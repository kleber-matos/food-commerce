import "./style.scss";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
// import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import data from "../../data/data.json";
import Logo from "../../assets/logo.png";
import Barra from "../../Components/Barra";
import Background from "../../Components/Background";
import Card_burguer from "../../Components/Card_burguer";

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

      {data.map((e) => (
        <div className="burgue">
          <Card_burguer
            nome={e.nome}
            descricao={e.descricao}
            imagem={e.imagem}
            avaliacao={e.avaliacao}
            disponivel={e.disponivel}
            preco={e.preco}
          />
        </div>
      ))}
    </>
  );
}
