const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Endpoints
app.get("/", (req, res) => {
  //recieve an parameter
  const user = req.query.user;
  res.send(user + "!");
});

const rutas = [];
let route = "";
let time = "";
let direction = "";

function getAddress() {
  let value = Math.floor(Math.random() * 6);
  switch (value) {
    case 1:
      route = "2640 Lomita Blvd, Torrance, CA 90505";
      time = "45 minutes";
      direction = "WEST";
      return { route, time, direction };
    case 2:
      route = "20 W 34th St, New York, NY 10001";
      time = "1h 20 minutes";
      direction = "EAST";
      return { route, time, direction };
    case 3:
      route = "230 3rd St E, Minnewaukan, ND 58351";
      time = "4h 35 minutes";
      direction = "NORTH";
      return { route, time, direction };
    case 4:
      route = "650 S R L Thornton Fwy, Dallas, TX 75203";
      time = "1h 10 minutes";
      direction = "SOUTH";
      return { route, time, direction };
    case 5:
      route = "400 Broad St, Seattle, WA 98109";
      time = "45 minutes";
      direction = "WEST-NORTH";
      return { route, time, direction };
    default:
      route = "36 Ocean Dr, Miami Beach, FL 33139";
      time = "2h 25 minutes";
      direction = "EAST";
      return { route, time, direction };
  }
}

app.post("/route", (req, res) => {
  const { ruta } = req.body; //user
  rutas.push({
    street: ruta.street,
    route: ruta.route,
    direction: ruta.cardinal,
  });
  res.json({ ruta1: getAddress(), ruta2: getAddress(), ruta3: getAddress() });
});

app.get("/view_routes", (_, res) => {
  res.json(rutas);
});

//Server start listenining to request
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
