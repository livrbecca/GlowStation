import { Link } from "react-router-dom";
import "../css/Home.css";

const RBadvert = () => {
  return (
    <Link to="/loading2">
    <div className="together">
      <h2 className="largeTextAd">
        Take the Routine <br /> Builder <br /> Today
      </h2>
      <h3 className="miniTextAd">
        Dry skin? <br /> Oily skin? <br /> Dark marks or texture? <br /> We got
        you.
      </h3>
      <img className="landing" src="landingpic.png" alt="collage" />
    </div>
    </Link>
  );
};

export default RBadvert;
