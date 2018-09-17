$(document).ready(function() {
    
    require([
        "esri/Map",
        "esri/views/MapView",
        "dojo/domReady"
    ], function(Map, MapView) {
        var map = new Map ({
            basemap: "satellite"
        });   
        var view = new MapView ({
            container: "viewDiv",
            map: map,
            zoom: 4,
            center: [15, 65]
        });
    });
});

