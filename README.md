Leaflet.SimpleMarkers
=====================

A light-weight Leaflet plugin for adding and deleting markers.

###Demo

http://jdomingu.github.io/Leaflet.SimpleMarkers/

###Instructions

To create the marker controls, enter the following code:
```
var marker_controls = new L.Control.SimpleMarkers();
map.addControl(marker_controls);
```

###Available Options

`add_control`: Show the add marker button should be shown. Possible values: `true`, `false`. Default: `true`.
`delete_control`: Show the delete marker button should be shown. Possible values: `true`, `false`. Default: `true`.
`allow_popup`: Create and bind a popup for each marker.  Possible values: `true`, `false`. Default: `true`.
`marker_icon`: Use a custom icon instance. If not given, the default Leaflet icon will be shown. Possible values: Leaflet icon instance, `undefined`. Default: `undefined`.
`marker_draggable`: Allow dragging of markers. Possible values: `true`, `false`. Default: `false`.
`add_marker_callback`: Run a callback function with the marker instance as argument. Possible values: Callback function, `undefined`. Default: `undefined`.

