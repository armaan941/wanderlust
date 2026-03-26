var map = L.map("map").setView(coordinates, 9);
L.tileLayer(
  `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${mapToken}`,
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map);

var popup = L.popup({ keepInView: true, offset: 0 })
  .setLatLng(coordinates)
  .setContent("<p>Hello world!<br />This is a nice popup.</p>")
  .openOn(map);

var marker = L.marker(coordinates).addTo(map);
