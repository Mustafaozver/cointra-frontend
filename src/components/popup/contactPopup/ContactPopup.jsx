import React, { useContext, useEffect, useState } from 'react';

import styles from './ContactPopup.module.scss';

import {
  MyPZAlert,
  MyPZButton,
  MyPZhelpers,
  MyPZModal,
  MyPZTextField,
  MyPZCheckbox,
} from '../../../mypzkit';
import InputTextArea from '../../inputs/inputTextArea/InputTextArea';
import { UserContext } from '../../../context/users/UserContext';
import UserPropertyPreferencesForm from '../../form/userPropertyPreferences/UserPropertyPreferencesForm';
import FiltersProvider from '../../../context/filters/FiltersContext';
import { paramsToFilters } from '../../../helpers/propertyFilterHelper';
import storageManager from '../../../storage/storageManager';
import { LoginContext } from '../../../context/login/LoginContext';
import Config from '../../../config/Config';
import ButtonCall from '../../button/buttonCall/ButtonCall';
import { getPropertyPhone } from '../../../api/properties/propertiesApi';
import {
  getUserPropertyPreferences
} from '../../../api/user/userPropertyPreferencesApi';

const defaultUserPropertyPreferences = {
  businessType: 'sale',
  price: { min: '0', max: 'Any' },
};

const defaultPreferencesData = {
  isDataShared: false,
  moveDate: null,
  preApproval: null,
};

const ContactPopup = (props) => {
  const {
    isOpen,
    onClose,
    onSubmit,
    data,
    isSuccess,
    isDisabled,
  } = props;

  const [userInfos] = useContext(UserContext);
  const [loginInfos, setLoginInfos] = useContext(LoginContext);
  const [userPropertyPreferences, setUserPropertyPreferences] = useState(defaultUserPropertyPreferences);
  const [isCallButtonActive, setIsCallButtonActive] = useState(false);
  const [agentMobile, setAgentMobile] = useState('');
  const [phoneProcessing, setPhoneProcessing] = useState(false);
  const isUserLogged = storageManager.isLogged();
  const [preferencesData, setPreferencesData] = useState(defaultPreferencesData);
  const [values, setValues] = useState({
    message: '',
    createAccount: false,
    confirmPassword: '',
    user: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    },
    userPropertyPreferences: {},
  });

  useEffect(async () => {
    if (!isUserLogged || !userInfos.userInfos) {
      return;
    }

    try {
      if (userInfos && userInfos.userInfos) {
        const userPropertyPreferences = await getUserPropertyPreferences();
        setValues({
          ...values,
          user: {
            ...values.user,
            ...userInfos.userInfos,
          },
        });

        setPreferencesData({
          isDataShared: userPropertyPreferences.userPropertyPreferences.isDataShared || false,
          moveDate: userPropertyPreferences.userPropertyPreferences.moveDate || null,
          preApproval: userPropertyPreferences.userPropertyPreferences.preApproval || null,
        });
      }

      if (userInfos && userInfos.propertyPreferences) {
        const finalParams = paramsToFilters(userInfos.propertyPreferences);
        setUserPropertyPreferences(finalParams);
      }
    } catch (e) {
      console.log('error while getUserPropertyPreferences:', e);
    }
  }, [userInfos]);

  useEffect(() => {
    if (!data || !isOpen) {
      return '';
    }

    setAgentMobile('');
    setIsCallButtonActive(false);

    const finalPrice = new Intl.NumberFormat().format(data.price);

    const initMessage = `Hi <span class="contact-popup__agent-name">${data.agent.firstName.toLowerCase()} ${data.agent.lastName.toLowerCase()}</span>, <br /><br />I am interested in your property: <b>${data.title}</b> (<b>AED ${finalPrice}</b>) on zeekeez.com <br /><br />Ref: <b>${data.reference}</b><br /><a contentEditable="false" href="/properties/${data.slug}"><u>${data.title}</u></a> <br /><br />Please contact me. <br /><br />Thank you.`;

    setValues({ ...values, message: initMessage });
  }, [JSON.stringify(data)]);

  const handleUserPropertyPreferencesChange = (userPropertyPreferences) => {
    setValues({ ...values, userPropertyPreferences });
  };

  const handleInputChange = (key) => (e) => {
    setValues({ ...values, [key]: e.target.value });
  };

  const handleUserChange = (key) => (e) => {
    setValues({ ...values, user: { ...values.user, [key]: e.target.value } });
  };

  const handleSubmit = () => {
    let submitValues = { ...values };
    if (!submitValues.user.password) {
      delete submitValues.user.password;
    }
    onSubmit(submitValues);
  };

  const handleLogin = () => {
    setLoginInfos({
      ...loginInfos,
      isPopupOpen: true,
    });
  };

  const handleCallClick = async (e) => {
    e.preventDefault();

    if (!isCallButtonActive) {
      setPhoneProcessing(true);
      const phoneResponse = await getPropertyPhone(data.slug);
      setAgentMobile(phoneResponse.phone);

      window.location.href = `tel:${phoneResponse.phone}`;
      setPhoneProcessing(false);
    }

    setIsCallButtonActive(!isCallButtonActive);
  };

  const handleCreateAccountCheckbox = (e) => {
    setValues({ ...values, createAccount: e.target.checked })
  };

  const isNameFieldValid = (key) => () => values.user[key].length > 0;

  const isPhoneFieldValid = () => MyPZhelpers.phoneNumberRegex.test(values.user.phone);

  const isEmailFieldValid = () => MyPZhelpers.emailRegex.test(values.user.email);

  const isMessageValid = () => values.message.length > 10;

  const isCreateAccountValid = () => {
    if (!values.createAccount) {
      return true;
    }

    return values.user.password && values.user.password.length >= 3 && values.user.password === values.confirmPassword;
  };

  const isFormValid = () => {
    return isNameFieldValid('firstName')
    && isNameFieldValid('lastName')
    && isPhoneFieldValid()
    && isEmailFieldValid()
    && isMessageValid()
    && isCreateAccountValid()
    && !!values.userPropertyPreferences.isDataShared;
  }

  const renderSuccessAlert = () => {
    if (!isSuccess) {
      return;
    }

    return (<MyPZAlert>Your message has been sent to agent successfully. You will get contacted by the agent soon</MyPZAlert>);
  };

  const renderUserPropertyPreferenceForm = () => {
    return (<>
      <div className={styles['contact-popup__tagline']}>What are you looking to do? (optional)</div>
      <div className={styles['contact-popup__property-preferences']}>
        <UserPropertyPreferencesForm
          onChange={handleUserPropertyPreferencesChange}
          data={preferencesData}
        />
      </div>
    </>);
  };

  const renderCreateAccount = () => {
    if (isUserLogged) {
      return null;
    }

    const checkbox = (
      <div className={styles['contact-popup__checkbox']}>
        <MyPZCheckbox
          label={'Yes I want to create my Zeekeez account (optional)'}
          checked={values.createAccount}
          onChange={handleCreateAccountCheckbox}
          className={styles['form-register__checkbox']}
        />
      </div>);

    const passwords = (<>
      <div className={styles['contact-popup__input-group']}>
        <div className={styles['contact-popup__input-item']}>
          <MyPZTextField
            label="Password"
            placeholder="********"
            type="password"
            onChange={handleUserChange('password')}
            value={values.user.password}
          />
        </div>
        <div className={styles['contact-popup__input-item']}>
          <MyPZTextField
            label="Confirm password"
            placeholder="********"
            type="password"
            onChange={handleInputChange('confirmPassword')}
            value={values.confirmPassword}
          />
        </div>
      </div>
    </>);

    return (<>
      <div className={styles['contact-popup__tagline']}>Yalla, create your account now &#128521;</div>
      {checkbox}
      {values.createAccount && passwords}
    </>);
  };

  const renderTitle = () => {
    return (
      <div className={styles['contact-popup__title']}>
        Email enquiry to {data.agent.firstName}
      </div>
    );
  };

  const renderAgent = () => {
    return (
      <div className={styles['contact-popup__agent']}>
        <div className={styles['contact-popup__agent-header']}>
          <div className={styles['contact-popup__agent-header-image']}>
            <img src={data.agent.imageUrl ? Config.getImageUrl(data.agent.imageUrl) : '/icons/profile-image.jpg'} />
          </div>
          <div className={styles['contact-popup__agent-header-info']}>
            <div className={styles['contact-popup__agent-name']}>{data.agent.firstName} {data.agent.lastName}</div>
            <div>{data.agency.name}</div>
          </div>
        </div>
        <div>
          <ButtonCall
            onClick={handleCallClick}
            active={isCallButtonActive}
            value={agentMobile}
            loading={phoneProcessing}
          >
            Call
          </ButtonCall>
        </div>
      </div>
    );
  };

  const renderProperty = () => {
    return (
      <div className={styles['contact-popup__property']}>
        <div className={styles['contact-popup__property-header']}>
          <div className={styles['contact-popup__property-header-image']}>
            {data.images && data.images.length > 0 &&
              <img src={Config.getImageUrl(data.images[0].path)} />
            }
          </div>
          <div className={styles['contact-popup__property-header-info']}>
            <div className={styles['contact-popup__property-title']}>{data.title}</div>
            <div>{data.price} - {data.locationName}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderLoginButton = () => {
    if (isUserLogged) {
      return null;
    }
    return (
      <div className={styles['contact-popup__login']}>
        <div className={styles['contact-popup__tagline']}>Already registered? Sign in, your infos will be added</div>
        <div className={styles['contact-popup__login-button']}><MyPZButton onClick={handleLogin}>Login</MyPZButton></div>
      </div>
    );
  };

  const renderMandatoryForm = () => {
    return (<>
      <div className={styles['contact-popup__tagline']}>If not registered, complete the form</div>
      <div className={styles['contact-popup__input-group']}>
        <div className={styles['contact-popup__input-item']}>
          <MyPZTextField
            label="First Name*"
            placeholder="John"
            error={values.user.firstName && !isNameFieldValid('firstName') ? 'The First Name field can\'t be empty' : ''}
            onChange={handleUserChange('firstName')}
            value={values.user.firstName}
          />
        </div>
        <div className={styles['contact-popup__input-item']}>
          <MyPZTextField
            label="Last Name*"
            placeholder="Doe"
            error={values.user.lastName && !isNameFieldValid('lastName') ? 'The Last Name field can\'t be empty' : ''}
            onChange={handleUserChange('lastName')}
            value={values.user.lastName}
          />
        </div>
      </div>
      <div className={styles['contact-popup__input-group']}>
        <div className={styles['contact-popup__input-item']}>
          <MyPZTextField
            label="Email*"
            placeholder="john.doe@mail.com"
            error={values.user.email && !isEmailFieldValid() ? 'The Email field can\'t be empty and must be in a valid format' : ''}
            onChange={handleUserChange('email')}
            value={values.user.email}
            disabled={isUserLogged}
          />
        </div>
        <div className={styles['contact-popup__input-item']}>
          <MyPZTextField
            label="Phone*"
            placeholder="+971 xxx xxx xxx"
            error={values.user.phone && !isPhoneFieldValid() ? 'The Phone field can\'t be empty and must be in a valid international format' : ''}
            onChange={handleUserChange('phone')}
            value={values.user.phone}
          />
        </div>
      </div>
      {renderCreateAccount()}
      <div className={styles['contact-popup__input']}>
        <InputTextArea
          label="Message"
          error={values.message && !isMessageValid() ? 'The Message field can\'t be empty' : ''}
          onChange={handleInputChange('message')}
          value={values.message}
        />
      </div>
    </>);
  };

  if (!data || !isOpen) {
    return null;
  }

  return (
    <FiltersProvider overrideFilters={userPropertyPreferences}>
      <MyPZModal isOpen={isOpen} onClose={onClose}>
        <div className={styles['contact-popup']}>
          {renderTitle()}
          {renderAgent()}
          {renderProperty()}
          {renderLoginButton()}
          {renderMandatoryForm()}
          {renderUserPropertyPreferenceForm()}

          {renderSuccessAlert()}
          <div className={styles['contact-popup__input-button']}>
            <MyPZButton onClick={handleSubmit} disabled={!isFormValid() || isDisabled}>Submit</MyPZButton>
          </div>
        </div>
      </MyPZModal>
    </FiltersProvider>
  );
};

export default ContactPopup;
