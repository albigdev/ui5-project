sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return class Third extends Controller {
    onInit() {}

    onNavPress() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("detail", {
        ID: this._sSupplierId,
      });
    }

    _onRouteMatched(oEvent) {}

    onSearch(oEvent) {}
  };
});
