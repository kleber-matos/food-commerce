import "./style.scss";

import Card from "../../Components/Card";
import Logo from "../../assets/logo.png";
import Burgue from "../../assets/burgue.png";
import Sacola from "../../assets/sacola.png";
import Background from "../../Components/Background";

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
