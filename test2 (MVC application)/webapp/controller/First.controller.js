sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

return class First extends Controller {
    onListItemPress(oEvent) {
      const oAppView = sap.ui.getCore().byId("appView");
      const oContext = oEvent.getSource().getBindingContext();
      
      const oApp = oAppView.byId("app");
      const oPage = oAppView.byId("detailPageId");
      const sPageId = oAppView.byId("detailPageId").getId();

      oPage.setBindingContext(oContext);
      oApp.to(sPageId);
    }

    toLowerCase(sValue) {
      const sString = String(sValue);
      return sString.toLowerCase();
    }
  }

  // return Controller.extend("gergely.albi.mvcapp.controller.First", {
  //   onListItemPress: function (oEvent) {
  //     const oAppView = sap.ui.getCore().byId("appView");
  //     const sPageId = oAppView.byId("detailPageId").getId();
  //     const oApp = oAppView.byId("app");
  //     const oPage = oApp.getPage(sPageId);

  //     const oContext = oEvent.getSource().getBindingContext();
  //     oPage.setBindingContext(oContext);
  //     oApp.to(sPageId);

  //     /*const sPageId="appView--detailPageId";
	// 	 const oPage = oApp.getPage(sPageId);
		 
	// 	 const oContext = oEvent.getSource().getBindingContext();
	// 	 oPage.setBindingContext(oContext);
	// 	 oApp.to(sPageId);*/
  //   },
  //   toLowerCase: function (sValue) {
  //     const sString = String(sValue);
  //     return sString.toLowerCase();
  //   },
  // });
});
