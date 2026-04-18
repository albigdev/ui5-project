sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return class Third extends Controller {
    onInit() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter
        .getRoute("product")
        .attachPatternMatched(this._onRouteMatched, this);
    }

    onNavPress() {
      const supplierId = this.getView()
        .getBindingContext()
        .getProperty("SupplierID");
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("productList", {
        ID: supplierId,
      });
    }

    _onRouteMatched(oEvent) {
      const productId = oEvent.getParameter("arguments").ProductID;
      this._sProductId = productId;

      this.getView().bindElement({
        path: `/Products(${productId})`,
      });
    }
  };
});
