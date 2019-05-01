const mapboxgl = require("mapbox-gl")
const buildMarker = require("./marker.js")

mapboxgl.accessToken = "pk.eyJ1IjoiY2lsYXZlcnkiLCJhIjoiY2p2NG10d2J5MGY4dTQ0bm1mb3c0em1nMSJ9.jZ196IRZT8XEl6d4jlczjQ"

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
})

const marker = buildMarker('activity')
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map)
