import { Link } from "react-router-dom";
export default function Paraiba() {
    return (
        <div>
            <h1>Estado da Paraíba</h1>
            <div className="conteudo">


                <img src="/PB.png" />

                <p>
                A Paraíba possui uma rica combinação de belezas naturais, história e cultura. Sua capital, João Pessoa, é conhecida por suas praias, áreas verdes e pelo centro histórico. O estado também apresenta importantes atrações no interior, além de belas paisagens do litoral. Entre suas manifestações culturais destacam-se o forró, as festas juninas, o artesanato e a culinária típica nordestina.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}