export const PrivateKeyManager = (() => {
  let instance;

  function init() {
    // Private variables
    const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    function getBaseUrl(tokenName) {
      return BASE_URL;
    }

    // Public methods
    return {
      getBaseUrl,
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
