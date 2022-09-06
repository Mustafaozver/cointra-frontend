exports.propertyTypes = {
  apartment: {
    name: 'Apartment',
    url: 'apartment',
    value: {
      propertyTypes: {
        APT: true,
      },
    },
  },
  flat: {
    name: 'Flat',
    url: 'apartment',
    value: {
      propertyTypes: {
        APT: true,
      },
    },
  },
  villas: {
    name: 'Villas',
    url: 'villa',
    value: {
      propertyTypes: {
        VIL: true,
      },
    },
  },
  house: {
    name: 'House',
    url: 'house',
    value: {
      propertyTypes: {
        VIL: true,
      },
    },
  },
  studio: {
    name: 'Studio',
    url: 'studio',
    value: {
      bedrooms: [0],
    },
  },
  bedroomApartment: {
    name: '1 Bedroom Apartment',
    url: 'studio',
    value: {
      bedrooms: [1],
      propertyTypes: {
        APT: true,
      },
    },
  },
  land: {
    name: 'Land',
    url: 'land',
    value: {
      propertyTypes: {
        LAN: true,
      },
    },
  },
  commercial: {
    name: 'Commercial',
    url: 'commercial',
    value: {
      propertyTypes: {
        SHP: true,
        SHW: true,
      },
      category: 0,
    },
  },
  luxury: {
    name: 'Luxury Properties',
    url: 'luxury',
    value: {
      price: {
        max: 'Any',
        min: 100000,
      },
    },
  },
  shop: {
    name: 'Store',
    url: 'shop',
    value: {
      propertyTypes: {
        SHP: true,
      },
      category: 0,
    },
  },
  office: {
    name: 'Office',
    url: 'office',
    value: {
      propertyTypes: {
        OFF: true,
      },
      category: 0,
    },
  },
};

exports.businessTypes = [
  {
    name: 'Rent',
    url: 'rent',
    value: {
      businessType: 'rent',
    },
  },
  {
    name: 'Sale',
    url: 'sale',
    value: {
      businessType: 'sale',
    },
  },
];

exports.locations = {
  dubai: {
    name: 'Dubai',
    url: 'dubai',
    value: {
      locations: [
        {
          slug: 'dubai1',
        },
      ],
    },
  },
  businessBay: {
    name: 'Business Bay',
    url: 'business-bay',
    value: {
      locations: [
        {
          slug: 'business-bay5',
        },
      ],
    },
  },
  palmJumeirah: {
    name: 'Palm jumeirah',
    url: 'palm-jumeirah',
    value: {
      locations: [
        {
          slug: 'palm-jumeirah6',
        },
      ],
    },
  },
  abuDhabi: {
    name: 'Abu Dhabi',
    url: 'abu-dhabi',
    value: {
      locations: [
        {
          slug: 'abu-dhabi2',
        },
      ],
    },
  },
  dubaiMarina: {
    name: 'Dubai Marina',
    url: 'dubai-marina',
    value: {
      locations: [
        {
          slug: 'dubai-marina3',
        },
      ],
    },
  },
  downtownDubai: {
    name: 'Downtown Dubai',
    url: 'downtown-dubai',
    value: {
      locations: [
        {
          slug: 'downtown-dubai4',
        },
      ],
    },
  },
  uae: {
    name: 'UAE',
    url: 'uae',
    value: null,
  },
};
