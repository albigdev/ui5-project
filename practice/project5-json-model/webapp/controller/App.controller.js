sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ],
  (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        const oModel = new JSONModel({
          recipient: {
            name: "Hello World",
          },
        });

        this.getView().setModel(oModel);
      },

      onPress() {
        MessageToast.show("Hello");
      },
    });
  },
);