sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return class First extends Controller {
      onInit() {
        //View model
        const oViewModel = new JSONModel({
          count: 0,
        });

        this.getView().setModel(oViewModel, "viewModel");

        //table binding
        const oTable = this.byId("suppliersTable");

        oTable.attachUpdateFinished(() => {
          const iCount = oTable.getItems().length;
          this.getView().getModel("viewModel").setProperty("/count", iCount);
        });
      }

      onListItemPress(oEvent) {
        this.getView().getModel().setDefaultBindingMode("TwoWay");

        const oContext = oEvent.getSource().getBindingContext();

        const sID = oContext.getProperty("SupplierID");

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
  },
);
