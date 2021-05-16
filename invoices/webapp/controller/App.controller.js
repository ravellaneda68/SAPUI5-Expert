sap.ui.define([

"sap/ui/core/mvc/Controller"

],

/**
 * param {typeof sap.ui.core.mvc.Controller} Controller
    */

 function(Controller) {
     "use strict";
     
        return Controller.extend("logaligroupa21.sapui5.controller.App",  {
            
            oninit: function() {    
           
      }, 
      onOpenDialogHeader: function(){
          this.getOwnerComponent().openHelloDialog();
      }
      
   });
});

