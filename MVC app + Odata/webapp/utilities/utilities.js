sap.ui.define([], function () {
  "use strict";

  return {
    toLowerCase: function (sValue) {
      return String(sValue).toLowerCase();
    },
    unitState: function (price) {
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
