module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['static.clickbus.com'],
  },
  publicRuntimeConfig: {
    internalApiConfig: {
      baseURL: 'https://api-cabal-internal.clickbus.com/api/v3',
      headers: {},
    },
    publicApiConfig: {
      baseURL: 'https://api-cabal.clickbus.com/api/v3',
      headers: {},
    },
    bffApiConfig: {
      baseURL: 'https://api-cabal.clickbus.com/api/v3',
      headers: {},
    },
  },
};
