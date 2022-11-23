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
                var that = this;
                var oEntry = {};
                // GET
                var aData = jQuery.ajax({
                    type: "GET",
                    contentType: "application/json",
                    url: "/api/users?page=2",
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
