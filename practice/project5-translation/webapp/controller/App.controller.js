sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, JSONModel, MessageToast, ResourceModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        const oModel = new JSONModel({
          recipient: {
            name: "Hello World",
          },
        });

        this.getView().setModel(oModel);

        const resourceModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n",
        });

        this.getView().setModel(resourceModel, "translation");
      },

      onPress() {
        MessageToast.show("Hello");
      },
    });
  },
);
