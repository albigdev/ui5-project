sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return class Third extends Controller {
      onInit() {
        const oViewModel = new JSONModel({
          count: 0,
        });
        this.getView().setModel(oViewModel, "viewModel");

        const oTable = this.byId("productsTable");
        oTable.attachUpdateFinished(() => {
          const iCount = oTable.getItems().length;
          this.getView().getModel("viewModel").setProperty("/count", iCount);
        });

        const oRouter = this.getOwnerComponent().getRouter();
        oRouter
          .getRoute("product")
          .attachPatternMatched(this._onRouteMatched, this);
      }

      onNavPress() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("detail", {
          ID: this._sSupplierId,
        });
      }

      _onRouteMatched(oEvent) {
        const sId = oEvent.getParameter("arguments").ID;
        const iSupplierId = parseInt(sId, 10);
        this._sSupplierId = sId;

        this.getView().bindElement({
          path: `/Products`,
        });

        const oTable = this.byId("productsTable");
        const oBinding = oTable.getBinding("items");

        if (oBinding) {
          oBinding.filter([
            new Filter("SupplierID", FilterOperator.EQ, iSupplierId),
          ]);
        }
      }
    };
  },
);
