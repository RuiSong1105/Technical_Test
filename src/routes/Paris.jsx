import { useState, useEffect } from "react";

export default function Paris({ getTime }) {

  const [curTime, setCurTime] = useState("");

  const update = () => {
    var request = new XMLHttpRequest();
    request.open("GET", "http://worldtimeapi.org/api/timezone/Europe/Paris", true);
    request.onload = function () {
      setCurTime(() => getTime(JSON.parse(this.response).datetime.split(".")[0]));
    };
    request.send();
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <>
      {curTime && <div className="display">Current Time For Paris: {curTime}</div>}
      {curTime && <div><button onClick={update}>Update</button></div>}
    </>
  );
}