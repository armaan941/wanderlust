mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  center: coordinates, // [lng, lat]
  zoom: 9,
});

map.addControl(new mapboxgl.NavigationControl());

const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
  <div style="font-family: Arial, sans-serif;">
    <h6 style="margin: 0; font-size: 15px;">${displayTitle}</h6>
    <p style="margin: 4px 0 0; font-size: 13px; color: #555;">
      ${displayLocation}
    </p>
  </div>
`);

const markerElement = document.createElement("div");
markerElement.style.width = "18px";
markerElement.style.height = "18px";
markerElement.style.background = "#ff385c";
markerElement.style.border = "3px solid white";
markerElement.style.borderRadius = "50%";
markerElement.style.boxShadow = "0 2px 10px rgba(0,0,0,0.25)";
markerElement.style.cursor = "pointer";
markerElement.style.pointerEvents = "auto";

const marker = new mapboxgl.Marker(markerElement)
  .setLngLat(coordinates)
  .setPopup(popup)
  .addTo(map);

markerElement.addEventListener("click", (e) => {
  e.stopPropagation();

  map.flyTo({
    center: coordinates,
    zoom: 14,
    speed: 1.2,
    curve: 1.5,
    essential: true,
  });

  map.once("moveend", () => {
    popup.setLngLat(coordinates).addTo(map);

    if (map.getSource("location-circle")) {
      map.removeLayer("location-circle-fill");
      map.removeLayer("location-circle-outline");
      map.removeSource("location-circle");
    }

    map.addSource("location-circle", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: coordinates,
        },
      },
    });

    map.addLayer({
      id: "location-circle-fill",
      type: "circle",
      source: "location-circle",
      paint: {
        "circle-radius": 100,
        "circle-color": "#ff385c",
        "circle-opacity": 0.15,
      },
    });

    map.addLayer({
      id: "location-circle-outline",
      type: "circle",
      source: "location-circle",
      paint: {
        "circle-radius": 100,
        "circle-color": "#ff385c",
        "circle-opacity": 0.4,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#ff385c",
      },
    });
  });
});
