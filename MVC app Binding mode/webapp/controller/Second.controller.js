sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return class Second extends Controller {
    onInit() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter
        .getRoute("detail")
        .attachPatternMatched(this._onRouteMatched, this); //If the route activates, we call this function
    }

    onNavPress() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("master");
    }

    _onRouteMatched(oEvent) {
      const sId = oEvent.getParameter("arguments").ID;

      const oView = this.getView();
      oView.bindElement({
        path: "/SweetsSupplier/" + sId,
      });
    }
  };
});
