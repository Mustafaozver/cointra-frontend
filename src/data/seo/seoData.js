const { propertyTypes, businessTypes, locations } = require('./SeoCombinations');

exports.default = [
  {
    title: 'Top Searches in Dubai',
    data: [
      [
        propertyTypes.apartment,
        propertyTypes.villas,
        propertyTypes.house,
      ],
      businessTypes,
      [
        locations.dubai,
        locations.businessBay,
        locations.palmJumeirah,
      ],
    ],
  },
  {
    title: 'Popular areas in Abu Dhabi',
    data: [
      [
        propertyTypes.apartment,
        propertyTypes.villas,
      ],
      businessTypes,
      [
        locations.abuDhabi,
      ],
    ],
  },
  {
    title: 'Trending areas in Dubai',
    data: [
      [
        propertyTypes.apartment,
        propertyTypes.house,
      ],
      businessTypes,
      [
        locations.dubaiMarina,
        locations.downtownDubai,
        locations.palmJumeirah,
      ],
    ],
  },
  {
    title: 'Popular searches in UAE',
    data: [
      [
        propertyTypes.apartment,
        propertyTypes.villas,
        propertyTypes.land,
        propertyTypes.studio,
        propertyTypes.house,
        propertyTypes.luxury,
        propertyTypes.commercial,
      ],
      businessTypes,
      [
        locations.uae,
      ],
    ],
  },
  {
    title: 'Top Searches Commercial in Dubai',
    data: [
      [
        propertyTypes.shop,
        propertyTypes.commercial,
        propertyTypes.office,
      ],
      businessTypes,
      [
        locations.dubai,
      ],
    ],
  },
  {
    title: 'Trending searches in Abu Dhabi',
    data: [
      [
        propertyTypes.villas,
        propertyTypes.flat,
        propertyTypes.office,
      ],
      businessTypes,
      [
        locations.abuDhabi,
      ],
    ],
  },
  {
    title: 'Trending for Rent in Abu Dhabi',
    data: [
      [
        propertyTypes.studio,
        propertyTypes.villas,
      ],
      businessTypes,
      [
        locations.abuDhabi,
      ],
    ],
  },
];
