sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("reqres.controller.View1", {
            onInit: function () {

                // this only works running locally
                // or when accessing directly from the html5-apps-repo when deployed,
                // not from within the Fiori Launchpad
                
                let myPathWithoutFile
                if (window.location.href.indexOf("hana.ondemand") != -1) {
                    const myPath = window.location.pathname
                    myPathWithoutFile = myPath.substring(0, myPath.lastIndexOf('/'))
                    console.log(myPathWithoutFile)
                } else {
                    myPathWithoutFile = ""
                }

                var that = this;
                var oEntry = {};
                // GET
                var aData = jQuery.ajax({
                    type: "GET",
                    contentType: "application/json",
                    url: myPathWithoutFile + "/api/users?page=2",
                    dataType: "json",
                    async: false,
                    success: function (data, textStatus, jqXHR) {
                      console.log("success GET+ Reqres");
                      console.log(data);
                      var oJSONModel = new sap.ui.model.json.JSONModel(data.data);
					  that.getView().setModel(oJSONModel, "resData");
                    }
                  });
            }
        });
    });
