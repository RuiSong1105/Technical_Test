import { useState, useEffect } from "react";

export default function London({ getTime }) {

  const [curTime, setCurTime] = useState("");

  const update = () => {
    var request = new XMLHttpRequest();
    request.open("GET", "http://worldtimeapi.org/api/timezone/Europe/London", true);
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
      {curTime && <div className="display">Current Time For London: {curTime}</div>}
      {curTime && <div><button onClick={update}>Update</button></div>}
    </>
  );
}