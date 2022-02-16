import { Header } from "./components/header/Header";
import "./App.css";
import { Input } from "./components/input/Input";
import { useState } from "react";
import { Button } from "./components/button/Button";
import axios from "axios";

function App() {
  const [dataInput, setDataInput] = useState({});
  const [dataRoutes, setDataRoute] = useState([]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setDataInput({
      ...dataInput,
      [name]: value,
    });
    console.log(dataInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRoute = { ruta: { dataInput } };
    let routeData = [];
    axios
      .post("http://localhost:5000/route", dataRoute)
      .then((res) => {
        for (let route of Object.keys(res.data)) {
          routeData.push(res.data[route]);
        }
        return routeData;
      })
      .then((res) => {
        setDataRoute(res);
      })
      .catch(console.error);

    console.log(dataRoute);
  };

  return (
    <>
      <Header />
      <div className="appBody">
        <div className="contain">
          <div>
            <form onSubmit={handleSubmit} className="appForm" method="post">
              <Input
                label="Street"
                nameInput="street"
                type="input"
                func={handelChange}
                required="required"
              />
              <Input
                label="Bus Route"
                nameInput="route"
                type="number"
                func={handelChange}
                required="required"
              />
              <Input
                label="Direction"
                nameInput="direction"
                type="input"
                func={handelChange}
                required="required"
              />
              <Button />
            </form>
          </div>
          {dataRoutes != null && (
            <div className="contain__data">
              {dataRoutes.map((route, index) => (
                <>
                  <div className="contain__data-info" key={index}>
                    <p>{route.route}</p>
                    <p>{route.time}</p>
                    <p>{route.direction}</p>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
