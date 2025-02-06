import "./style.scss";
import Background from "../../Components/Background";
import Card from "../../Components/Card";

import Sacola from "../../assets/sacola.png";
import Burgue from "../../assets/burgue.png";
import Logo from "../../assets/logo.png";

export default function index() {
  return (
    <>
      <Background />

      <section className="principal">
        <div>
          <img src={Logo} alt="Logo" />
          <h1>Seja bem-vindo!</h1>
          <p>
            Escolha como prefere aproveitar sua refeição.Estamos aqui para
            oferecer praticidade e sabor.
          </p>
        </div>
      </section>

      <section className="escolha">
        <div>
          <Card image={Burgue} text="Para comer aqui" rota="/cardapio" />
          <Card image={Sacola} text="Para levar" rota="/cardapio" />
        </div>
      </section>
    </>
  );
}
