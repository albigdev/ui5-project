sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

return class First extends Controller {
    onListItemPress(oEvent) {
  const oRootView = this.getOwnerComponent().getRootControl(); // XML View App.view.xml

      //const oAppViewPages = oAppView.getPages(); //We get the pages of the XML view App.view.xml
      //const firstView = oAppViewPages.find((oPage) => oPage.getId().includes("initialPage"))
      //const firstViewId = firstView.getId(); //We get the id of the first page in the XML view App.view.xml 

      const oApp = oRootView.byId("app"); // App control in the XML view App.view.xml
      const oPage = oRootView.byId("detailPageId"); // Detail page in the XML view App.view.xml
      const sPageId = oPage.getId();
      
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
