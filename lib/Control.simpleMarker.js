L.Control.addMarker = L.Control.extend({
    options: {
        position: 'topleft',
        alt: 'Add a marker'
    },

    onAdd: function (map) {
        
        var add_marker_div = L.DomUtil.create('div', 'add_marker_control');

        L.DomEvent.addListener(add_marker_div, 'click', L.DomEvent.stopPropagation)
            .addListener(add_marker_div, 'click', L.DomEvent.preventDefault)
            .addListener(add_marker_div, 'click', function () { enterAddMarkerMode() });
        
        return add_marker_div;
    }
});

L.Control.delMarker = L.Control.extend({
    options: {
        position: 'topleft',
        alt: 'Delete all markers'
    },

    onAdd: function (map) {
        
        var del_marker_div = L.DomUtil.create('div', 'del_marker_control');

        L.DomEvent.addListener(del_marker_div, 'click', L.DomEvent.stopPropagation)
            .addListener(del_marker_div, 'click', L.DomEvent.preventDefault)
            .addListener(del_marker_div, 'click', function () { enterDelMarkerMode() });
        
        return del_marker_div;
    }
});


var markerList = [];

function enterAddMarkerMode() {

if (markerList !== '') {
    for (var marker = 0; marker < markerList.length; marker++) {
        if (typeof(markerList[marker]) !== 'undefined') {
            markerList[marker].removeEventListener('click', onMarkerClickDelete);
        } 
    }
}

document.getElementById('map').style.cursor = 'crosshair';
map.addEventListener('click', onMapClickAddMarker);

}

function onMapClickAddMarker(e) {
    map.removeEventListener('click'); 
    document.getElementById('map').style.cursor = 'auto';
    
    var popupContent =  "You clicked on the map at " + e.latlng.toString();
    var the_popup = L.popup({maxWidth: 160, closeButton: false});
    the_popup.setContent(popupContent);
    
    var marker = L.marker(e.latlng);
    marker.addTo(map);
    marker.bindPopup(the_popup).openPopup();
    markerList.push(marker);
    
    return false;    
}

function enterDelMarkerMode() {
    
    for (var marker = 0; marker < markerList.length; marker++) {
        if (typeof(markerList[marker]) !== 'undefined') {
            markerList[marker].addEventListener('click', onMarkerClickDelete);
        }
    }

}

function onMarkerClickDelete(e) {
    map.removeLayer(this);
    var marker_index = markerList.indexOf(this);
    delete markerList[marker_index];
    
    for (var marker = 0; marker < markerList.length; marker++) {
        if (typeof(markerList[marker]) !== 'undefined') {
            markerList[marker].removeEventListener('click', onMarkerClickDelete);
        } 
    }
    return false;  
}
