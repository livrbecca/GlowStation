import { Link } from "react-router-dom";
import "./Home.css";

const RBadvert = () => {
  return (
    <>
      <Link to="/loading2">
        <h2 className="RBheader">Take the Routine Builder</h2>
      </Link>
      <div className="Ent2">
        <div className="sloganBG">
          <h3 className="promoSlogan">
            Complete the
            <Link to="/loading2">
              <button className="RBButton">
                <i> Routine Builder </i>
              </button>
            </Link>
            and recieve
            <b>
              <i> 15%</i>
            </b>{" "}
            off your first order.
          </h3>
        </div>
      </div>
    </>
  );
};

export default RBadvert;
