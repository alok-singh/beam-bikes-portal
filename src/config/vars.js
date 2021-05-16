/* 
  Purpose of this file to hold all the 
  settings, texts, switches which are prone to change 
  frequently anything like that must not be hardcoded
*/

export const config = {
  header: {
    logo: {
      link: '/bike-finder',
      imageSrc: 'https://global-uploads.webflow.com/5b685812f109cf81a7d99e25/606e8f3eb8613d4f91dc33e5_beam_whitecir_rgb.png',
    },
    navItems: [
      {
        link: '/bike-finder',
        title: 'Bike Finder',
      },
      {
        link: '/bike-generator',
        title: 'Bike Generator',
      },
      {
        link: '/career',
        title: 'Careers',
      },
      {
        link: '/highlights',
        title: 'The Highlight',
      },
    ], 
  },
  footer: {
    copyrightText: `Copyright ${(new Date()).getFullYear()} © Beam Mobility Holdings Pte. Ltd.`,
    navItems: [
      {
        link: '/cookie-policy',
        title: 'Cookie Policy',
      },
      {
        link: '/privacy-policy',
        title: 'Privacy Policy',
      },
      {
        link: '/terms-and-conditions',
        title: 'Terms of Service',
      }
    ],
  },
  map: {
    markerImageSrc: {
      blue: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      yellow: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    }
  },
  defaultApiValues: {
    MIN_LATITUDE: 1.30,
    MAX_LATITUDE: 1.36,
    MIN_LONGITUDE: 103.65,
    MAX_LONGITUDE: 103.99,
    SEARCH_BIKES_LIMIT: 1000,
    SEARCH_LATITUDE: 1.3690926,
    SEARCH_LONGITUDE: 103.8164342,
    SEARCH_DISTANCE: 50,
    GENERATE_BIKES_LIMIT: 10
  },
  BASE_URL: 'http://localhost:3000',
  LOCATION_LIST: [
    {
      lat: 1.3561196,
      lng: 103.7359319,
      name: 'Bukit Batok'
    },
    {
      lat: 1.2847447,
      lng: 103.5669755,
      name: 'Tuos'
    },
    {
      lat: 1.2869421,
      lng: 103.7662684,
      name: 'Queens Town'
    },
    {
      lat: 1.3606464,
      lng: 103.8950904,
      name: 'Paya Lebar'
    },
    {
      lat: 1.3606464,
      lng: 103.8950904,
      name: 'Hougang Mall'
    },
    {
      lat: 1.3606464,
      lng: 103.8950904,
      name: 'IKEA tempines'
    },
    {
      lat: 1.3606464,
      lng: 103.8950904,
      name: 'Punggol Park'
    },
    {
      lat: 1.3873578,
      lng: 103.7294777,
      name: 'Punggol Park'
    },
    {
      lat: 1.4014782,
      lng: 103.7421992,
      name: 'Yew Tee Village'
    },
    {
      lat: 1.4026886,
      lng: 103.7926615,
      name: 'Zoo'
    },
  ]
};