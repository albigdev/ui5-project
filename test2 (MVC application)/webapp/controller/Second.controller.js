sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("gergely.albi.mvcapp.controller.Second", {
    onNavPress: function () {
      const oAppView = sap.ui.getCore().byId("appView");
      const oApp = oAppView.byId("app");
      oApp.back();
    },
  });
});
