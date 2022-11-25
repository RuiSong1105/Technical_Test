import { Outlet, Link } from "react-router-dom";

export default function Root() {

  return (
    <>
      <div id="box">
        <h1>The World Clock</h1>
        <Link to={`/`} className="link">HomePage</Link>
        <Link to={`London`} className="link">London</Link>
        <Link to={`Paris`} className="link">Paris</Link>
        <Link to={`Rome`} className="link">Rome</Link>
        <Outlet />
      </div>
    </>
  );
}