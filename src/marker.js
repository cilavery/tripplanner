// const mapbox = require("mapbox-gl");
// mapboxgl.accessToken = "pk.eyJ1IjoiY2lsYXZlcnkiLCJhIjoiY2p2NG10d2J5MGY4dTQ0bm1mb3c0em1nMSJ9.jZ196IRZT8XEl6d4jlczjQ"

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type) {
  const marker = document.createElement('div')
    marker.style.width = "32px"
    marker.style.height = "39px"
    marker.style.backgroundImage = `url(${iconURLs[type]}`
  return marker
};


module.exports = buildMarker;
