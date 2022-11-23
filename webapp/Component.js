/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "reqres/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("reqres.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // // GET
                // var aData = jQuery.ajax({
                //     type: "GET",
                //     contentType: "application/json",
                //     url: "/api/users?page=2",
                //     dataType: "json",
                //     async: false,
                //     success: function (data, textStatus, jqXHR) {
                //       console.log("success GET+ Reqres");
                //       console.log(data);
                //     }
                //   });

                // //POST
                // const jsonData = '{ "name": "John", "job": "Tech Lead" }';
                // var bData = jQuery.ajax({
                //     type: "POST",
                //     data: jsonData,
                //     contentType: "application/json",
                //     url: "/api/users",
                //     dataType: "json",
                //     success: function (data, textStatus, jqXHR){
                //         console.log("success POST + Reqres");
                //         console.log(data);
                //         console.log(textStatus);
                //     },
                //     error: function(oError){
                //         console.log('error', oError);
                //     }
                // });
            }
        });
    }
);