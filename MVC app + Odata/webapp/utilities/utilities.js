sap.ui.define([], function () {
  "use strict";

  return {
    toLowerCase: function (sValue) {
      return String(sValue).toLowerCase();
    },
    unitState: function (value) {
      const number = Number(value);

      if (number <= 10) {
        return "Error";
      }
      if (number <= 20) {
        return "Warning";
      }
      return "Success";
    },
  };
});
