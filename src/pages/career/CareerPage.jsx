import React, { useState } from 'react';

import styles from './CareerPage.module.scss';

import {
  MyPZContainer,
  MyPZButton,
  MyPZCheckbox,
  MyPZAlert,
  MyPZhelpers,
  MyPZTextField,
} from '../../mypzkit';
import InputTextArea from '../../components/inputs/inputTextArea/InputTextArea';
import { contactUs } from '../../api/contacts/contactsApi';

const CareerPage = (props) => {
  const resetInputs = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  };
  const [isCheckedAgreement, setIsCheckedAgreement] = useState(false);
  const [formValue, setFormValue] = useState(resetInputs);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const { mainTitle, subTitle } = props;

  const handleCheckbox = (e) => {
    setIsCheckedAgreement(e.target.checked);
  };

  const handleInputChange = (key) => (e) => {
    setFormValue({ ...formValue, [key]: e.target.value });
  };

  const isSampleTextValid = (v) => v.length > 0;

  const isEmailValid = () => MyPZhelpers.emailRegex.test(formValue.email);

  const isPhoneValid = () => MyPZhelpers.phoneNumberRegex.test(formValue.phone);

  const isLetterValid = () => formValue.message.length > 15;

  const isFormValid = () => isSampleTextValid(formValue.firstName)
    && isSampleTextValid(formValue.lastName)
    && isEmailValid()
    && isPhoneValid()
    && isLetterValid()
    && isCheckedAgreement;

  const handleClickSubmit = async () => {
    setIsMessageSent(false);
    try {
      await contactUs({ ...formValue, type: 'career' });
      setIsMessageSent(true);
    } catch (e) {
      console.log('error while contactUs: ', e);
    }
    setFormValue(resetInputs);
    setIsCheckedAgreement(false);
  };

  const renderForm = () => (
    <div className={styles['page-career__form__inputs']}>
      <div className={styles['page-career__form__inputs-text']}>
        <MyPZTextField
          label="First Name"
          onChange={handleInputChange('firstName')}
          error={formValue.firstName && !isSampleTextValid(formValue.firstName) ? 'The First Name field can\'t be empty' : ''}
          value={formValue.firstName}
        />
      </div>
      <div className={styles['page-career__form__inputs-text']}>
        <MyPZTextField
          label="Last Name"
          onChange={handleInputChange('lastName')}
          error={formValue.lastName && !isSampleTextValid(formValue.lastName) ? 'The Last Name field can\'t be empty' : ''}
          value={formValue.lastName}
        />
      </div>
      <div className={styles['page-career__form__inputs-text']}>
        <MyPZTextField
          label="Email"
          onChange={handleInputChange('email')}
          error={formValue.email && !isEmailValid() ? 'The Email field can\'t be empty and must be in a valid format' : ''}
          value={formValue.email}
        />
      </div>
      <div className={styles['page-career__form__inputs-text']}>
        <MyPZTextField
          label="Phone"
          onChange={handleInputChange('phone')}
          error={formValue.phone && !isPhoneValid() ? 'The Phone field can\'t be empty and must be in a valid format' : ''}
          value={formValue.phone}
        />
      </div>
      <div className={styles['page-career__form__inputs-area']}>
        <InputTextArea
          label="Introduction letter"
          value={formValue.message}
          onChange={handleInputChange('message')}
          error={formValue.message && !isLetterValid() ? 'The Letter Area must contain a clear letter' : ''}
        />
      </div>
      <div className={styles['page-career__form__inputs-area']}>
        <MyPZCheckbox
          label={<span className={styles['page-career__form__checkbox-label']}>I consent to having this website store my submitted information</span>}
          checked={isCheckedAgreement}
          onChange={handleCheckbox}
        />
      </div>
      <div className={styles['page-career__form__inputs-button']}>
        <MyPZButton disabled={!isFormValid()} onClick={handleClickSubmit}>
          Submit
        </MyPZButton>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className={styles['page-career__sidebar']}>
      <span className={styles['page-career__sidebar__title']}>For inquiries contact:</span>
      <ContentSidebar title="Human Ressources">
        Apply directly by sending your resume, your photo and your motivation letter <br />
        <a href="mailto:contact@zeekeez.com">contact@zeekeez.com</a>
      </ContentSidebar>
      <ContentSidebar title="Current Job Openings at zeekeez">
        - Full Stack Developers <br />
        - Senior iOS Engineer <br />
        - Senior Android Engineer <br />
        - Human Ressource Manager <br />
      </ContentSidebar>
      <ContentSidebar title="Corporate Headquarters">
        zeekeez<br />
        Dubai – United Arab Emirates<br />
      </ContentSidebar>
    </div>
  );

  const renderAlert = () => {
    if (!isMessageSent) {
      return null;
    }

    return (
      <MyPZAlert className={styles['page-career__alert']}>
        Your message has been successfully sent
      </MyPZAlert>
    );
  };

  return (
    <MyPZContainer>
      <div className={styles['page-career']}>
        <MyPZContainer className={styles['page-career__form']}>
          <h1>{mainTitle}</h1>
          <h2>
            {subTitle}
          </h2>
          <p>
            We’re a team of dedicated techs, engineers, designers, business minds,
            and strategists building the new Real Estate Property Portal to change
            the way people search, buy, sell, rent their home sweet home.
          </p>
          <p>
            We are currently starting to build our dream team.
            Let’s make it simple: we don’t search the best talents but the
            right talents!
          </p>
          <p>
            Take your chance and send your resume,
            your photo and your motivation letter in order
            to understand who you are and what you can bring to zeekeez.
            Write with your heart, first we are humans.
          </p>
          <p>Good luck to you!</p>
          {renderAlert()}
          {renderForm()}
        </MyPZContainer>
        <MyPZContainer isSmall>
          {renderSidebar()}
        </MyPZContainer>
      </div>
    </MyPZContainer>
  );
};

const ContentSidebar = (props) => {
  const { title, children } = props;

  return (
    <div className={styles['page-career__sidebar__block']}>
      <div className={styles['page-career__sidebar__title']}>{title}</div>
      <div className={styles['page-career__sidebar__content']}>
        {children}
      </div>
    </div>
  );
};

export default CareerPage;
