sap.ui.define([], function () {
  "use strict";

  return {
    toLowerCase: function (sValue) {
      return String(sValue).toLowerCase();
    },
    formatPrice: function (price) {
      return Number(price).toFixed(2);
    },
    priceState: function (price) {
      if (price < 20) {
        return "Success";
      } else if (price < 22) {
        return "Warning";
      } else {
        return "Error";
      }
    },
  };
});
