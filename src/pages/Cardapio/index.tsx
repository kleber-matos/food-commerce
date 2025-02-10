import { Link } from "react-router-dom";
import Background from "../../Components/Background";
import Logo from "../../assets/logo.png";
import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

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

      <Card_burguer />

      {data.map((e) => (
        <div className="burgue">
          <img src={e.imagem} alt="teste" />
          <h2>{e.nome}</h2>
          <p>{e.descricao}</p>
          <strong>{e.preco}</strong>
          <p>{e.avaliacao}</p>
          <p
            style={e.disponivel == true ? { color: "green" } : { color: "red" }}
          >
            {e.disponivel == true ? (
              <strong>
                Disponível <AiFillCheckCircle />
              </strong>
            ) : (
              <strong>
                Indisponível <AiFillCloseCircle />
              </strong>
            )}
          </p>
        </div>
      ))}
    </>
  );
}
