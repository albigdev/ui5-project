sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/core/UIComponent"],
  function (JSONModel, UIComponent) {
    "use strict";

      return UIComponent.extend("gergely.albi.mvcapp.Component", {
      init() {
        super.init();

        const oData = {
          CountSweets: "2",
          SweetsSupplier: [
            {
              ID: 0,
              Name: "Sweet Magic",
              Address: {
                Street: "Sivarao Street",
                City: "Vijayawada",
                State: "Andhra Pradesh",
                ZipCode: "521456",
                Country: "INDIA",
              },
            },
            {
              ID: "1",
              Name: "Aanjaneya Sweets",
              Address: {
                Street: "Bhavanipuram",
                City: "Vijayawada",
                State: "Andhra Pradesh",
                ZipCode: "521456",
                Country: "INDIA",
              },
            },
          ],
        };

        const oModel = new JSONModel(oData);
        this.setModel(oModel);
      }
    };

    //OLD WAY

    //     return UIComponent.extend("gergely.albi.mvcapp.Component", {
    //         createContent: function () {
    //             UIComponent.prototype.createContent.apply(this, arguments);

    //             const oData = {
    //               CountSweets: "2",
    //         }

    //         const oModel = new JSONModel(oData);
    //         this.setModel(oModel);
    //     }
  },
);
