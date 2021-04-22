sap.ui.define([
    "sap/ui/model/json/JSONmodel"

],
    /**
     * 
     * @param {typeof sap.ui.model.json.JSONmodel} JSONmodel 
     */
    function (JSONmodel) {
        'use strict';
        return {
            createRecipient: function () {
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                return new JSONmodel(oData);
            }
        };
    });
