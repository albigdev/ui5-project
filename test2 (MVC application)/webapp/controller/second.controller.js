sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("gergely.albi.mvcapp.controller.Second", {
    onNavPress: function () {
      oApp.back();
    },
  });
});

//Hello
