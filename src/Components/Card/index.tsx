import "./style.scss";
import { Link } from "react-router-dom";

interface Info {
  image: string;
  text: string;
  rota: string;
}

export default function index({ image, text, rota }: Info) {
  return (
    <>
      <div className="card">
        <img src={image} alt="image" />
        <Link to={rota}>{text}</Link>
      </div>
    </>
  );
}
