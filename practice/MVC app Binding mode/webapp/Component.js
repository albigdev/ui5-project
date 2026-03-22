sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/core/UIComponent"],
  function (JSONModel, UIComponent) {
    "use strict";

    return UIComponent.extend("gergely.albi.mvcapp.Component", {
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        this.getRouter().initialize();
      },
    });

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
