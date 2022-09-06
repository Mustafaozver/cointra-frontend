const faq = [
  {
    question: 'What is a Free 30-day trial?',
    answer: 'The Free 30-day trial offer is a non-biding offer. After this period, you are free to subscribe or not to zeekeez’s plans. This offer is valid for 30 days from the date of registration. The Free 30-day trial offer is based on an Unlimited pack giving you Unlimited access to test all of zeekeez’s features.',
  },
  {
    question: 'Can I upload all my listings in one time?',
    answer: 'Yes you can! You need to send us your files (XML, CSV, XLS, XLSX). Our team will upload it for you. Your listings will be automatically published in your dashboard. You will be allowed to manage, edit, modify, delete all of them anytime.',
  },
  {
    question: 'Is this website owned by or associated by any real estate agency?',
    answer: 'Fully independent !!! We are a PropTech company and we help both Individuals and Professionals. Our company values are based on transparency, equality and technology.',
  },
  {
    question: 'What are the differences between Agent, Agency, Individual, and Developer accounts?',
    answer: 'Each subscription is specific to a real estate category. The Agent account is only valid for 1 agent. It does not give any other access. This Agent can then enter his listings. It is a single-user account and must be subscribed by the Agent himself. The Agency account is only valid for one Agency. It gives Unlimited access to create accounts for the Agents of the Agency (Unlimited users). It is a multiple user account and must be subscribed only by the Agency itself, i.e., by the manager or one of his legal representatives. The Developer account is valid only for one Developer. It gives Unlimited access to all Agents of the Developer (Unlimited users). It is a multiple user account and must be subscribed to only by the Developer himself, i.e., by the manager or one of his legal representatives. The Individual account is only valid for 1 individual (landlord/owner). It does not give any other access. This Individual can then enter his listings. It is a single-user account and must be signed up by the Individual in person. The individual account only gives access to on-demand listings sold individually.',
  },
  {
    question: 'As an Agency, can I manage my Agents’ accounts?',
    answer: 'Everything is designed with team management in mind. From the Agency dashboard, you create your Agents’ accesses (login/password). Your Agents will then receive their accesses to finalize their accounts by filling in their profile information.',
  },
  {
    question: 'Is there a CRM? How can I consult the activity of my listings?',
    answer: 'zeekeez offers a CRM accessible from the dashboard. You will be able to see in real-time: activities, leads, deals, inquiries, etc. All the data is available in this space: first name, last name, mobile, email, etc.',
  },
  {
    question: 'What does an Unlimited subscription mean?',
    answer: 'It is a unique all-in-one pack that allows real estate professionals to promote their commercial offers without any listing limitation or time limit. It is a monthly subscription subscribed for a commitment period of 1 year payable monthly (monthly payment) or annually (billed annually). This pack includes the features of the Unlimited pack described on the Broker and Developer subscriptions page.',
  },
  {
    question: 'What does a Growth subscription mean?',
    answer: 'It is a package intended for real estate professionals managing a large volume of residential and commercial listings. It is a monthly subscription contract of 1 year payable monthly (monthly payment) or annually (billed annually). This pack includes the features of the Growth pack described on the Broker and Developer subscription page.',
  },
  {
    question: 'What does a Starter subscription mean?',
    answer: 'It is a package designed for SMB’s Real Estate Professionals. It offers all the functionalities to promote your residential and commercial offers. It is a monthly subscription contract of 1 year payable monthly (monthly payment) or annually (billed annually). This pack includes the features of the Growth pack described on the Broker and Developer subscription page.',
  },
  {
    question: 'What is the duration of a listing with the Unlimited pack?',
    answer: 'There is no limit of duration with the Unlimited pack! Edit your listing; once published, this listing will be online until the sale or rental of the properties. You can delete or modify this listing at any time; it’s up to you. With the Unlimited pack, you can publish as many listings as you want.',
  },
  {
    question: 'What is the duration of a listing with the Growth pack?',
    answer: 'The listing time limit of the Growth pack is 90 days. Edit your listing, once published, this listing will be online for 90 days. You can delete or modify this listing at any time; Note that once you delete the listing, your listing credit will increase. You will then add one more listing credit on your account. With the Growth pack, you and your team can publish as many listings as you want, up to a maximum of 500 listings.',
  },
  {
    question: 'What is the duration of a listing with the Starter pack?',
    answer: 'The listing time limit of the Growth pack is 45 days. Edit your listing, once published, this listing will be online for 45 days. You can delete or modify this listing at any time; Note that once you delete the listing, your listing credit will increase. You will then add one more listing credit on your account. With the Growth pack, you and your team can publish as many listings as you want, up to a maximum of 150 listings.',
  },
  {
    question: 'Do I have to sign up after the Free 30-day trial offer?',
    answer: 'At the end of the trial, you will then receive a message warning you that the trial offer is about to expire. You can then subscribe to a paid package or simply cancel your account. In the event of cancellation, no action on your part is required. The trial offer will stop automatically. Note that if you subscribe to a paid package, all your listings will remain active. In case of cancellation, you will lose all your listings.',
  },
  {
    question: 'How do I pay for my subscription?',
    answer: 'You can use the following methods: by debit/credit card through Stripe, Paypal, or bank transfer subject to prior validation by zeekeez. \n\nAll you have to do is follow the instructions on zeekeez website.',
  },
  {
    question: 'How do I validate the creation of my profile?',
    answer: 'To activate your subscription, you must provide all the information requested on the My Profile page of your dashboard. Once this information is provided, the zeekeez team will activate your account and your listings.',
  },
  {
    question: 'How do I add a listing?',
    answer: 'Login to your dashboard and select “Add a listing,” fill in the fields, add your pictures, description, features, etc., and follow the instructions.',
  },
  {
    question: 'What is the recommended photo size?',
    answer: 'We recommend uploading photos with a minimum size of 1440×990 px. \n\nIf you choose a smaller size, the quality of your photos will low. Beautiful photos are highly recommended to optimize your results.',
  },
  {
    question: 'How to upload a video?',
    answer: 'Just follow the instructions on the “Add a Listing” form in the video section. You need to enter a Youtube or Vimeo URL. Accepted files are SWF File or MOV File.',
  },
  {
    question: 'How do I validate my listings once created?',
    answer: 'Once your listings have been created from your dashboard, the listings are in “pending” status. The zeekeez team will activate your listings after verification.',
  },
  {
    question: 'How can I manage my listings?',
    answer: 'You can manage your listings from your dashboard. All your listings are available in this section. You can edit, delete, modify, etc. All listings are accessible: published, pending, expired, draft, on hold. You just have to select the listing of your choice and change its status.',
  },
  {
    question: 'How do I retrieve my password if I forget it?',
    answer: 'Click on the login button, then enter your email or username. You will receive your new password by email via a “reset password” link.',
  },
  {
    question: 'How do I view my invoices?',
    answer: 'zeekeez offers an “Invoices” section on your dashboard when you have subscribed to a paid package. Please note that Agents who have been given access by their Agency do not have access to this financial data. Only the Agency has access to its invoices.',
  },
  {
    question: 'Can I upgrade my subscription?',
    answer: 'You can upgrade your subscription at any time by choosing a higher subscription package. For example, you can upgrade to the Growth pack or the Unlimited pack if you have a Starter pack. You could upgrade to an Unlimited pack if you subscribed to a Growth pack.',
  },
  {
    question: 'Can I downgrade my subscription?',
    answer: 'No. It is impossible to downgrade your subscription.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'No. Subscriptions are valid for a minimum of 1 year.',
  },
  {
    question: 'How do I contact support?',
    answer: 'A contact form is at your disposal in the footer fo the website. The support team will work on your request immediately.',
  },
];

export default faq;
