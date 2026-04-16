sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return class Second extends Controller {
      onInit() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter
          .getRoute("detail")
          .attachPatternMatched(this._onRouteMatched, this); //If the route activates, we call this function

        sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
      }

      onNavPress() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("master");
      }

      _onRouteMatched(oEvent) {
        const sId = oEvent.getParameter("arguments").ID;

        const oView = this.getView();
        oView.bindElement({
          path: `/Suppliers(${sId})`,
        });
      }

      onPress() {
        const msg = this.getView()
          .getModel("i18n")
          .getResourceBundle()
          .getText("title");
        MessageToast.show(msg);
      }

      onSupplierItemPress() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("productList", {
          ID: this.getView().getBindingContext().getProperty("SupplierID"),
        });
      }
    };
  },
);
