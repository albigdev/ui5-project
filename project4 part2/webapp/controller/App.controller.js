sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], (Controller, MessageToast) => {
    "use strict"

    return Controller.extend("ui5.walkthrough.conroller.App",{

        onShowHello() {
            MessageToast.show("Controller is executed once all modules are loaded")
        }
    })
});