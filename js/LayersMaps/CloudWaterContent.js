var cloudWater = document.querySelector("#CloudWater");

cloudWater.addEventListener("click", function () {

    buildGlobe();

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    var layerClima = "MODAL2_M_CLD_WP";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerClima);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };

    $.get(serviceAddress).done(createLayer).fail(logError);

})