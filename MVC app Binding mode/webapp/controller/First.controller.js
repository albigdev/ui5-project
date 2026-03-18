sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return class First extends Controller {
    onListItemPress(oEvent) {
      this.getView().getModel().setDefaultBindingMode("OneWay");

      const oContext = oEvent.getSource().getBindingContext();

      const sID = oContext.getProperty("ID");

      const oRouter = this.getOwnerComponent().getRouter();

      oRouter.navTo("detail", {
        ID: sID,
      });
    }

    toLowerCase(sValue) {
      const sString = String(sValue);
      return sString.toLowerCase();
    }
  };
});
