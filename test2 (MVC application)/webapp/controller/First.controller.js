sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("gergely.albi.mvcapp.controller.First", {
    onListItemPress: function (oEvent) {
      const oAppview = sap.ui.getCore().byId("appView");
      const oDetailPageId = oAppview.byId("detailPageId");
      const sPageId = oDetailPageId.getId();
      const oPage = oApp.getPage(sPageId);

      const oContext = oEvent.getSource().getBindingContext();
      oPage.setBindingContext(oContext);
      oApp.to(sPageId);

      /*const sPageId="appView--detailPageId";
		 const oPage = oApp.getPage(sPageId);
		 
		 const oContext = oEvent.getSource().getBindingContext();
		 oPage.setBindingContext(oContext);
		 oApp.to(sPageId);*/
    },
    toLowerCase: function (sValue) {
      const sString = String(sValue);
      return sString.toLowerCase();
    },
  });
});
