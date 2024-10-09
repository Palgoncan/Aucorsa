// Reemplaza con tu App ID y API Key
/*const platform = new H.service.Platform({
  app_id: "d0KVX3b36jFRNAFzyGFr",
  apiKey: "mZqWrF_CHjRKanDp8YULeqb_pyyJxB2AZvUFwmVOHKU",
});

// Obtener el mapa
const defaultLayers = platform.createDefaultLayers();
const map = new H.Map(
  document.getElementById("map"),
  defaultLayers.vector.normal.map,
  {
    zoom: 13,
    center: { lat: 37.888179, lng: -4.779038 }, // Coordenadas de Córdoba
  }
);

// Interacciones del mapa
const mapEvents = new H.mapevents.MapEvents(map);
const behavior = new H.mapevents.Behavior(mapEvents);
const ui = H.ui.UI.createDefault(map, defaultLayers);

// Añadir marcadores para las paradas de autobús
const busStops = [
  {
    lat: 37.884581427293156,
    lng: -4.777588551992838,
    name: "Claudio Marcelo (Tendillas)",
  },
  { lat: 37.88427729244391, lng: -4.776263907565135, name: "Diario Córdoba" },
  { lat: 37.88133733264106, lng: -4.776058048022727, name: "San Fernando" },
  {
    lat: 37.88012478552924,
    lng: -4.774611932431022,
    name: "El Potro (la Ribera)",
  },
  {
    lat: 37.88057361190781,
    lng: -4.76745788010643,
    name: "Cuesta de la Pólvora",
  },
  { lat: 37.884898876474935, lng: -4.766870141054899, name: "Puerta Nueva" },
  {
    lat: 37.88915588483209,
    lng: -4.764241240945449,
    name: "Avda. Barcelona D.C.",
  },
  {
    lat: 37.891419579498155,
    lng: -4.7652562716150335,
    name: "Marrubial (Puerta Plasencia)",
  },
  {
    lat: 37.89428894649564,
    lng: -4.768576025989386,
    name: "Agrupación Córdoba",
  },
  {
    lat: 37.89639366290227,
    lng: -4.7668983030807,
    name: "Agrupación Córdoba (Iglesia)",
  },
  { lat: 37.89872002548389, lng: -4.763688370611991, name: "Guaraní" },
  { lat: 37.89875819034903, lng: -4.760569799506306, name: "Mahatma Gandhi" },
  {
    lat: 37.89930958827295,
    lng: -4.759072790334929,
    name: "Ntra. Sra. de la Merced",
  },
  {
    lat: 37.89967269094999,
    lng: -4.7567010430924,
    name: "Fátima (Dr. Nevado del Rey)",
  },
  {
    lat: 37.89789291203164,
    lng: -4.756580940152756,
    name: "Fátima (Arcos de la Frontera)",
  },
  { lat: 37.89751104974417, lng: -4.753294013839316, name: "Fátima" },
];

// Crear marcadores en el mapa
busStops.forEach((stop) => {
  const marker = new H.map.Marker({ lat: stop.lat, lng: stop.lng });
  map.addObject(marker);
  marker.setData(stop.name);
});

// Añadir evento de clic para mostrar el nombre de la parada
map.addEventListener("tap", function (evt) {
  const target = map.getObjectAt(
    evt.currentPointer.viewportX,
    evt.currentPointer.viewportY
  );
  if (target) {
    alert(target.getData()); // Muestra el nombre de la parada
  }
});*/

// Reemplaza con tu App ID y API Key
const platform = new H.service.Platform({
  app_id: "d0KVX3b36jFRNAFzyGFr",
  apiKey: "mZqWrF_CHjRKanDp8YULeqb_pyyJxB2AZvUFwmVOHKU",
});

// Obtener el mapa
const defaultLayers = platform.createDefaultLayers();
const map = new H.Map(
  document.getElementById("map"),
  defaultLayers.vector.normal.map,
  {
    zoom: 13,
    center: { lat: 37.888179, lng: -4.779038 }, // Coordenadas de Córdoba
  }
);

// Interacciones del mapa
const mapEvents = new H.mapevents.MapEvents(map);
const behavior = new H.mapevents.Behavior(mapEvents);
const ui = H.ui.UI.createDefault(map, defaultLayers);

// Añadir marcadores para las paradas de autobús
const busStops = [
  {
    lat: 37.884581427293156,
    lng: -4.777588551992838,
    name: "Claudio Marcelo (Tendillas)",
  },
  { lat: 37.88427729244391, lng: -4.776263907565135, name: "Diario Córdoba" },
  { lat: 37.88133733264106, lng: -4.776058048022727, name: "San Fernando" },
  {
    lat: 37.88012478552924,
    lng: -4.774611932431022,
    name: "El Potro (la Ribera)",
  },
  {
    lat: 37.88057361190781,
    lng: -4.76745788010643,
    name: "Cuesta de la Pólvora",
  },
  { lat: 37.884898876474935, lng: -4.766870141054899, name: "Puerta Nueva" },
  {
    lat: 37.88915588483209,
    lng: -4.764241240945449,
    name: "Avda. Barcelona D.C.",
  },
  {
    lat: 37.891419579498155,
    lng: -4.7652562716150335,
    name: "Marrubial (Puerta Plasencia)",
  },
  {
    lat: 37.89428894649564,
    lng: -4.768576025989386,
    name: "Agrupación Córdoba",
  },
  {
    lat: 37.89639366290227,
    lng: -4.7668983030807,
    name: "Agrupación Córdoba (Iglesia)",
  },
  { lat: 37.89872002548389, lng: -4.763688370611991, name: "Guaraní" },
  { lat: 37.89875819034903, lng: -4.760569799506306, name: "Mahatma Gandhi" },
  {
    lat: 37.89930958827295,
    lng: -4.759072790334929,
    name: "Ntra. Sra. de la Merced",
  },
  {
    lat: 37.89967269094999,
    lng: -4.7567010430924,
    name: "Fátima (Dr. Nevado del Rey)",
  },
  {
    lat: 37.89789291203164,
    lng: -4.756580940152756,
    name: "Fátima (Arcos de la Frontera)",
  },
  { lat: 37.89751104974417, lng: -4.753294013839316, name: "Fátima" },
];

// Crear marcadores en el mapa
busStops.forEach((stop) => {
  const marker = new H.map.Marker({ lat: stop.lat, lng: stop.lng });
  map.addObject(marker);
  marker.setData(stop.name);

  // Añadir una ventana de información al marcador
  marker.addEventListener("tap", function () {
    const infoBubble = new H.ui.InfoBubble(marker.getGeometry(), {
      content: `<div class="hui-info-bubble"><b>${stop.name}</b></div>`, // Personaliza la burbuja
    });
    ui.addBubble(infoBubble);
  });
});

// Implementar geolocalización
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Añadir un marcador para la ubicación del usuario
      const userMarker = new H.map.Marker(userLocation);
      map.addObject(userMarker);
      map.setCenter(userLocation);
    },
    function () {
      alert("Error al obtener la ubicación del usuario.");
    }
  );
} else {
  alert("La geolocalización no es soportada por este navegador.");
}

// Implementar rutas y direcciones
function calculateRoute(start, end) {
  const routingService = platform.getRoutingService();

  const routeRequestParams = {
    mode: "fastest;car",
    waypoint0: `geo!${start.lat},${start.lng}`,
    waypoint1: `geo!${end.lat},${end.lng}`,
    representation: "display",
  };

  routingService.calculateRoute(
    routeRequestParams,
    function (result) {
      if (result.response.route) {
        const route = result.response.route[0];
        const routeLine = new H.geo.LineString();
        route.shape.forEach(function (point) {
          const parts = point.split(",");
          routeLine.pushLatLngAlt(parts[0], parts[1]);
        });

        const routeLineStyle = { strokeColor: "blue", lineWidth: 4 };
        const routeLineSegment = new H.map.Polyline(routeLine, routeLineStyle);
        map.addObject(routeLineSegment);
        map.setViewBounds(routeLineSegment.getBounds());
      }
    },
    function (error) {
      console.error("Error al calcular la ruta:", error);
    }
  );
}

// Calcular la ruta desde la primera hasta la última parada
calculateRoute(busStops[0], busStops[busStops.length - 1]);
