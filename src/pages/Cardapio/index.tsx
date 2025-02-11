import { Link } from "react-router-dom";
import Background from "../../Components/Background";
import Logo from "../../assets/logo.png";
import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
// import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import data from "../../data/data.json";

import Card_burguer from "../../Components/Card_burguer";

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
