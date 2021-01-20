import { Link } from "react-router-dom";
import "./Home.css";

const RBadvert = () => {
  return (
    <Link to="/loading2">
    <div className="together">
      <h2 className="largeTextAd">
        Take the Routine <br /> Builder <br /> Today.
      </h2>
      <p className="simple">Skincare for all, made simple. <br /> Answer 4 easy questions to get your perfect routine. </p>
      {/* <h3 className="miniTextAd">
        Dry skin? <br /> Oily skin? <br /> Dark marks? <br/> Texture? <br /> We got
        you.
      </h3> */}
      <img className="landing" src="landingpic.png" alt="collage" />
    </div>
    </Link>
  );
};

export default RBadvert;
