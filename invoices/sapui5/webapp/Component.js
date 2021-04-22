sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroupa21/sapui5/model/models',
    'sap/ui/model/resource/ResourceModel'
],
    /**
     * param {typeof sap.ui.core.UIComponent} UIComponent
     * param {typeof logaligroupa21.sapui5.model.models} models
     * param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * 
     */
    function (UIComponent, models, ResourceModel) {
        'use strict';
        return UIComponent.extend("logaligroupa21.sapui5.Component", {

            metadata: {
                manisfest: "json"
            },
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);

                this.setmodel(models.createRecipient());
                var i18nModel = new ResourceModel({ bundlename: "logaligroupa21.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });
