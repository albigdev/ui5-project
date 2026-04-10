sap.ui.define([], function () {
  "use strict";

  return {
    toLowerCase: function (sValue) {
      return String(sValue).toLowerCase();
    },
    formatPrice: function (price) {
      return Number(price).toFixed(2);
    },
  };
});
