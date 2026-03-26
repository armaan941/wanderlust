let locationCircle;

var map = L.map("map", { zoomControl: true, scrollWheelZoom: false }).setView(
  coordinates,
  9,
);
L.tileLayer(
  `https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${mapToken}`,
  {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map);

const customDivIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="
      width: 18px;
      height: 18px;
      background: #ff385c;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 10px rgba(0,0,0,0.25);
      cursor: pointer;
    "></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

const marker = L.marker(coordinates, { icon: customDivIcon }).addTo(map);

marker.bindPopup(`
    <div style="font-family: Arial, sans-serif;">
      <h6 style="margin: 0; font-size: 15px;">${displayTitle}</h6>
      <p style="margin: 4px 0 0; font-size: 13px; color: #555;">
        ${displayLocation}
      </p>
    </div>
  `);

marker.on("click", function () {
  map.flyTo(coordinates, 16, {
    animate: true,
    duration: 1.5,
  });

  map.once("moveend", function () {
    marker.openPopup();

    if (locationCircle) {
      map.removeLayer(locationCircle);
    }

    locationCircle = L.circle(coordinates, {
      radius: 200, // meters
      color: "#ff385c",
      fillColor: "#ff385c",
      fillOpacity: 0.15,
      weight: 1.5,
    }).addTo(map);
  });
});
