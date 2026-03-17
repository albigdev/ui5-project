sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return class Second extends Controller {
    onInit() {
      const Router = this.getOwnerComponent().getRouter();

      Router.getRoute("detail").attachPatternMatched(
        this._onRouteMatched,
        this,
      );
    }

    onNavPress() {
      const oRootView = this.getOwnerComponent().getRootControl();
      const oApp = oRootView.byId("app");
      oApp.back();
    }

    _onRouteMatched(oEvent) {
      const sId = oEvent.getParameter("arguments").ID;

      const oView = this.getView();
      oView.bindElement({
        path: "/SweetSupplier/" + sId,
      });
    }
  };

  // return Controller.extend("gergely.albi.mvcapp.controller.Second", {
  //   onNavPress: function () {
  //     const oAppView = sap.ui.getCore().byId("appView");
  //     const oApp = oAppView.byId("app");
  //     oApp.back();
  //   },
  // });
});
