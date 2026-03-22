sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
    "use strict";

    async function init() {
        const oView = await XMLView.create({
        viewName: "ui5.walkthrough.view.App"
    })

    oView.placeAt("content")
    }

    init()
});