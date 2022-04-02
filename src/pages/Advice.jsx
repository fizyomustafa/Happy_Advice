import React, { useState, useEffect } from "react";
import { withParamsAndNavigate } from "../util/Navigate";
import axios from "axios";
import Card from "../components/Card";
import "../App.scss";
import "../components/Button.scss";
import Button from "../components/Button";



function Advice() {
 
  const [wallpaper, setWallpaper] = useState("");
  const [advice, setAdvice] = useState("");



  const getAdvice = () => {
    getWallpaper();
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log("response ->",response.data.slip);
      
        setAdvice(response.data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWallpaper = () => {
    axios
      .get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization: `563492ad6f917000010000016e78dcefe4424433a945c38427567d4a`,
        },
        params: {
          query: "sky",
          per_page: 1,
          page: Math.floor(Math.random() * 500),
        },
      })
      .then((response) => {
        console.log(response.data.photos[0].src);
        setWallpaper(response.data.photos[0].src.landscape);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAdvice();
    getWallpaper();
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="container-card">
        <div className="card">
          <h1 className="title">Random Pieces of Life Advice</h1>
          <div className="advice-container">
            <Card className="text" {...advice} />
            <h1 className="line">☀︎</h1>
            <Button onClick={getAdvice} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default withParamsAndNavigate(Advice);
