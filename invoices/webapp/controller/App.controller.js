sap.ui.define([

"sap/ui/core/mvc/Controller",
"sap/m/MessageToast"

],

/**
 * param {typeof sap.ui.core.mvc.Controller} Controller
 * param {typeof sap.m.MessageToast} MessageToast
   */

 function(Controller, MessageToast) {
     "use strict";
     
        return Controller.extend("logaligroupa21.sapui5.controller.App",  {
            
            oninit: function() {    
                 
      },

      onShowHello : function () {
         MessageToast.show("Hello World");
      }
   });
});

