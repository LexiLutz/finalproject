
//map for every country; taken from mapbox assignment
let map1 = L.map('map1').setView([19.090645, 15.840304], 1.92);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGV4aWx1dHoiLCJhIjoiY2tpNHd5MHJsMjdvbTJ4bzJyOHBybTYwNSJ9.y3R1DKUt7eFo85kpkrUGYg'
}).addTo(map1);

for (let i = 0; i < places.length; i++) {
  L.marker( [ places[i].lat, places[i].long])
  .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].description + '</p>')
    .addTo(map1);
};


// code was adapted from: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function peak() {
  var x = document.getElementById("seasons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function afford() {
  var x = document.getElementById("visit");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function attractions() {
  var x = document.getElementById("come");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
