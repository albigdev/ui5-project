sap.ui.define([], function () {
  "use strict";

  return {
    toLowerCase: function (sValue) {
      return String(sValue).toLowerCase();
    },
    unitState: function (number) {
      if (number > 20) return "Success";
      if (number <= 20) return "Warning";
      if (number <= 10) return "Error";
    },
  };
});
