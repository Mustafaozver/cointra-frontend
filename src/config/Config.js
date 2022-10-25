const config = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://zeekeez.com',
  // TODO: put back NEXT_PUBLIC_BASE_API_URL
  baseApiUrl: /*process.env.NEXT_PUBLIC_BASE_API_URL ||*/ 'https://api.zeekeez.com', // 'http://localhost:8005',
  baseCDNUrl: process.env.NEXT_PUBLIC_BASE_CDN_URL || 'https://d23pgcxghat6wz.cloudfront.net/',
  mapPublicKey: 'AIzaSyD6ZVbpG5exHmlBvoRu8OBtfTbVh9e6AhY', //process.env.NEXT_PUBLIC_MAP_PUBLIC_KEY || 'AIzaSyAtv44A4TvoBV6ZQhp6-EEzEl5UkCuEnJk',
  googleAnalyticsTrackingCode: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_KEY || 'UA-165874994-1',
  facebookUrl: 'https://www.facebook.com/v12.0/dialog/oauth',
  facebookParams: {
    client_id: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID || '390434842548994',
    redirect_uri: process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI || 'http://localhost:8008/facebook-login',
    scope: ['email', 'public_profile'].join(','),
    response_type: 'token',
    auth_type: 'rerequest',
  },
  googleUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
  googleParams: {
    scope: 'https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email',
    response_type: 'token',
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '398865468304-po0tm2b05e7soe3eakq4vllgcld0u886.apps.googleusercontent.com',
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || 'http://localhost:8008/google-login',
  },
  getImageUrl: (path) => {
    if (!path) {
      return null;
    }
    const isUrlRegex = /^https?:\/\//;
    return isUrlRegex.test(path) ? path : `${config.baseCDNUrl}${path}`;
  },
  phoneNumberRegex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
  emailRegex: /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  propertyFilters: {
    priceConfigPerBusinessType: {
      rent: [
        {
          min: 10000,
          max: 100000,
          step: 10000,
        },
        {
          min: 100000,
          max: 300000,
          step: 25000,
        },
        {
          min: 300000,
          max: 500000,
          step: 50000,
        },
        {
          min: 500000,
          max: 1000000,
          step: 100000,
        },
      ],
      sale: [
        {
          min: 200000,
          max: 300000,
          step: 25000,
        },
        {
          min: 300000,
          max: 800000,
          step: 50000,
        },
        {
          min: 800000,
          max: 1000000,
          step: 100000,
        },
        {
          min: 1000000,
          max: 10000000,
          step: 1000000,
        },
        {
          min: 10000000,
          max: 50000000,
          step: 5000000,
        },
        {
          min: 50000000,
          max: 100000000,
          step: 10000000,
        },
        {
          min: 100000000,
          max: 250000000,
          step: 50000000,
        },
      ],
    },
    areaConfig: [
      {
        min: 500,
        max: 8000,
        step: 500,
      },
      {
        min: 8000,
        max: 15000,
        step: 1000,
      },
      {
        min: 15000,
        max: 25000,
        step: 2500,
      },
      {
        min: 25000,
        max: 35000,
        step: 5000,
      },
    ],
  },
};

export default config;
