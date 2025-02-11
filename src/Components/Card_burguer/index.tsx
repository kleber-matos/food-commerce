import "./style.scss";

interface Prop {
  imagem: string;
  nome: string;
  descricao: string;
  preco: number;
  avaliacao: number;
  disponivel: boolean;
}

export default function index({
  imagem,
  nome,
  descricao,
  preco,
  avaliacao,
  disponivel,
}: Prop) {
  return (
    <>
      <div>
        <img src={imagem} alt={nome} />
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <p>{preco}</p>
        <p>{avaliacao}</p>
        <span
          style={disponivel == true ? { color: "green" } : { color: "red" }}
        >
          {disponivel == true ? "Disponivel" : "Indisponivel"}
        </span>
        <button>adicionar ao carrinho</button>
      </div>
    </>
  );
}
