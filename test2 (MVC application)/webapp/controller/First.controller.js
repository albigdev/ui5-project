sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

return class First extends Controller {
    onListItemPress(oEvent) {
      const oAppView = sap.ui.getCore().byId("appView"); //XML View App.viw.xml

      const oApp = oAppView.byId("app"); //App control in the XML view App.view.xml
      const oPage = oAppView.byId("detailPageId"); //Detail page in the XML view App.view.xml
      const sPageId = oAppView.byId("detailPageId").getId();
      
      const oContext = oEvent.getSource().getBindingContext(); //We get the data of the item we have pressed on the list
      console.log(oContext);

      oPage.setBindingContext(oContext); //We set up the page to show the data of the item we have pressed on the list
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
