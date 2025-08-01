import "./styles.css";
import code from "./assets/code.svg";
import share from "./assets/share.svg";
import chat from "./assets/chat.svg";

export default function Card({imagemUrl, titulo, resumo, linhasDeCodigo, compartinhamento, cometarios, usuario}) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="Imagem da publicação" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
            <h3>{titulo}</h3>
            <p>
              {resumo}
            </p>
        </div>
        <div className="conteudo__rodape">
            <ul>
              <li>
                <img src={code} alt="icone" />
                {linhasDeCodigo}
              </li>
              <li>
                <img src={share} alt="icone" />
                {compartinhamento}
              </li>
              <li>
                <img src={chat} alt="icone" />
                {cometarios}
              </li>
            </ul>
            <div className="perfil">
              <img src={usuario.imagem} alt="perfil" />
              {usuario.nome}
            </div>
        </div>
      </div>
    </article>
  );
}
