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
          Ok: 0,
          Warning: 0,
          Critical: 0,
        });
        this.getView().setModel(oViewModel, "viewModel");

        const oTable = this.byId("productsTable");
        oTable.attachUpdateFinished(() => {
          const oBinding = oTable.getBinding("items");
          const iCount = oBinding ? oBinding.getLength() : 0;
          const iOk = oBinding
            ? oBinding
                .getContexts()
                .filter((ctx) => ctx.getProperty("UnitsInStock") >= 20).length
            : 0;
          const iWarning = oBinding
            ? oBinding
                .getContexts()
                .filter(
                  (ctx) =>
                    ctx.getProperty("UnitsInStock") < 20 &&
                    ctx.getProperty("UnitsInStock") > 0,
                ).length
            : 0;
          const iCritical = oBinding
            ? oBinding
                .getContexts()
                .filter((ctx) => ctx.getProperty("UnitsInStock") === 0).length
            : 0;

          this.getView().getModel("viewModel").setProperty("/count", iCount);
        });

        const oRouter = this.getOwnerComponent().getRouter();
        oRouter
          .getRoute("productList")
          .attachPatternMatched(this._onRouteMatched, this);
      }

      onNavPress() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("detail", {
          ID: this._sSupplierId,
        });
      }

      onProductItemPress(oEvent) {
        const sProductId = oEvent
          .getSource()
          .getBindingContext()
          .getProperty("ProductID");
        this._sProductId = sProductId;

        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("product", {
          ID: this._sSupplierId,
          ProductID: this._sProductId,
        });
      }

      _onRouteMatched(oEvent) {
        const sId = oEvent.getParameter("arguments").ID;
        const iSupplierId = Number(sId);
        this._sSupplierId = sId;

        this.getView().bindElement({
          path: `/Suppliers(${iSupplierId})`,
        });

        const oTable = this.byId("productsTable");
        const oBinding = oTable.getBinding("items");

        if (oBinding) {
          oBinding.filter([
            new Filter("SupplierID", FilterOperator.EQ, iSupplierId),
          ]);
        }
      }

      onSearch(oEvent) {
        const sQuery = oEvent.getParameter("newValue");
        const oTable = this.byId("productsTable");
        const oBinding = oTable.getBinding("items");

        if (oBinding) {
          if (sQuery) {
            oBinding.filter([
              new Filter({
                filters: [
                  new Filter("ProductName", FilterOperator.Contains, sQuery),
                  new Filter(
                    "SupplierID",
                    FilterOperator.EQ,
                    this._sSupplierId,
                  ),
                ],
                and: true,
              }),
            ]);
          } else {
            oBinding.filter([
              new Filter("SupplierID", FilterOperator.EQ, this._sSupplierId),
            ]);
          }
        }
      }
    };
  },
);
