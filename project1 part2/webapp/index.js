sap.ui.define(["sap/m/Text"], (Text) => {
    "use strict";

    const oText = new Text("id1", {
        text: "sample control"
    });
    oText.placeAt("xyz")
})