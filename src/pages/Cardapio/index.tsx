import { Link } from "react-router-dom";
import Background from "../../Components/Background";
import Logo from "../../assets/logo.png";
import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import Barra from "../../Components/Barra";

import "./style.scss";

export default function index() {
  return (
    <>
      <Background />

      <section className="sec1">
        <div>
          <figure>
            <img className="logo" src={Logo} alt="Image" />
            <figcaption>
              <CiStopwatch />
              Aberto
            </figcaption>
          </figure>

          <p>Food</p>
        </div>

        <span>
          <FaStar className="icon" />
          <p>5.0</p>
        </span>
      </section>

      <section>
        <Barra />
      </section>

      <Link to="/"> voltar</Link>
    </>
  );
}
