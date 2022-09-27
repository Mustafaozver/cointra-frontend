import React, { useState } from 'react';

import styles from './ContactPage.module.scss';

import {
  MyPZContainer,
  MyPZButton,
  MyPZCheckbox,
  MyPZSelect,
  MyPZAlert,
  MyPZhelpers,
  MyPZTextField,
} from '../../mypzkit';
import InputTextArea from '../../components/inputs/inputTextArea/InputTextArea';
import { contactUs } from '../../api/contacts/contactsApi';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const optionsType = [
  {
    text: 'Individual',
    value: 'individual',
  },
  {
    text: 'Developer',
    value: 'developer',
  },
  {
    text: 'Broker',
    value: 'broker',
  },
  {
    text: 'Other',
    value: 'other',
  },
];

const resetInputs = {
  message: '',
  phone: '',
  email: '',
  whoAreYou: 'individual',
  companyName: '',
  lastName: '',
  firstName: '',
};

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zeekeez',
  url: 'https://www.zeekeez.com',
  logo: 'https://www.zeekeez.com/images/zeekeez-logo-black.svg',
  description: 'Zeekez.com is the 1st UAE’s Property Portal for people to explore, research and share their interests for the UAE property market.',
  telephone: '+97145781335',
  foundingDate: '2022',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+97145781335',
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: ['en', 'ar']
  },
  sameAs: [
    'https://www.facebook.com/people/Zeekeez/100079499966747/',
    'https://www.instagram.com/zeekeez_official/',
    'https://www.linkedin.com/company/zeekeez',
    'https://www.zeekeez.com/'
  ]
};

const ContactPage = (props) => {
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

  const isMessageValid = () => formValue.message.length > 10;

  const isFormValid = () => isSampleTextValid(formValue.firstName)
    && isSampleTextValid(formValue.lastName)
    && isSampleTextValid(formValue.companyName)
    && isEmailValid()
    && isPhoneValid()
    && isMessageValid()
    && isCheckedAgreement;

  const handleClickSubmit = async () => {
    setIsMessageSent(false);
    try {
      await contactUs({ ...formValue, type: 'contact' });
      setIsMessageSent(true);
    } catch (e) {
      console.log('error while contactUs: ', e);
    }
    setFormValue(resetInputs);
    setIsCheckedAgreement(false);
  };

  const renderForm = () => (
    <div className={styles['page-contact__form__inputs']}>
      <div className={styles['page-contact__form__inputs-text']}>
        <MyPZTextField
          label="First Name"
          onChange={handleInputChange('firstName')}
          error={formValue.firstName && !isSampleTextValid(formValue.firstName) ? 'The First Name field can\'t be empty' : ''}
          value={formValue.firstName}
        />
      </div>
      <div className={styles['page-contact__form__inputs-text']}>
        <MyPZTextField
          label="Last Name"
          onChange={handleInputChange('lastName')}
          error={formValue.lastName && !isSampleTextValid(formValue.lastName) ? 'The Last Name field can\'t be empty' : ''}
          value={formValue.lastName}
        />
      </div>
      <div className={styles['page-contact__form__inputs-text']}>
        <MyPZTextField
          label="Company Name"
          onChange={handleInputChange('companyName')}
          error={formValue.companyName && !isSampleTextValid(formValue.companyName) ? 'The Company Name field can\'t be empty' : ''}
          value={formValue.companyName}
        />
      </div>
      <div className={styles['page-contact__form__inputs-text']}>
        <MyPZSelect onChange={handleInputChange('whoAreYou')} value={formValue.whoAreYou} options={optionsType} label="Who are you ?" />
      </div>
      <div className={styles['page-contact__form__inputs-text']}>
        <MyPZTextField
          label="Email"
          onChange={handleInputChange('email')}
          error={formValue.email && !isEmailValid() ? 'The Email field can\'t be empty and must be in a valid format' : ''}
          value={formValue.email}
        />
      </div>
      <div className={styles['page-contact__form__inputs-text']}>
        <MyPZTextField
          label="Phone"
          onChange={handleInputChange('phone')}
          error={formValue.phone && !isPhoneValid() ? 'The Phone field can\'t be empty and must be in a valid format' : ''}
          value={formValue.phone}
        />
      </div>
      <div className={styles['page-contact__form__inputs-area']}>
        <InputTextArea
          label="Message"
          value={formValue.message}
          onChange={handleInputChange('message')}
          error={formValue.message && !isMessageValid() ? 'The Message Area must contain a clear message' : ''}
        />
      </div>
      <div className={styles['page-contact__form__inputs-area']}>
        <MyPZCheckbox
          label={<span className={styles['page-contact__form__checkbox-label']}>I consent to having this website store my submitted information</span>}
          checked={isCheckedAgreement}
          onChange={handleCheckbox}
        />
      </div>
      <div className={styles['page-contact__form__inputs-button']}>
        <MyPZButton disabled={!isFormValid()} onClick={handleClickSubmit}>
          Submit
        </MyPZButton>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className={styles['page-contact__sidebar']}>
      <span className={styles['page-contact__sidebar__title']}>For inquiries contact:</span>
      <ContentSidebar title="Sales Team">
        You are Broker or Developer? Need more infos?
        Want to promote your listings and projects? Book an appointment?
        Select a slot below
        <a href="mailto:contact@zeekeez.com">&nbsp;contact@zeekeez.com</a>
      </ContentSidebar>
      <ContentSidebar title="Support">
        You are already a client? Have technical questions about zeekeez?
        <a href="mailto:contact@zeekeez.com">&nbsp;contact@zeekeez.com</a>
      </ContentSidebar>
      <ContentSidebar title="Media">
        Need to receive press releases?<br />
        Organize an interview?<br />
        <a href="mailto:contact@zeekeez.com">contact@zeekeez.com</a>
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
      <MyPZAlert className={styles['page-contact__alert']}>
        Your message has been successfully sent
      </MyPZAlert>
    );
  };

  return (
    <MyPZContainer>
      <NavigationBar
        Paths={[
          { Path: 'Home', Url: '/' },
          { Path: 'Contact', Url: '/en/contact' },
        ]}
      ></NavigationBar>
      <div className={styles['page-contact']}>
        <MyPZContainer className={styles['page-contact__form']}>
          <h1>{mainTitle}</h1>
          <h2>{subTitle}</h2>
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
  //schemaJson.description = '';
  return (
    <div className={styles['page-contact__sidebar__block']}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <div className={styles['page-contact__sidebar__title']}>{title}</div>
      <div className={styles['page-contact__sidebar__content']}>
        {children}
      </div>
    </div>
  );
};

export default ContactPage;
