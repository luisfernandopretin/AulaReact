import { Link } from "react-router-dom";
export default function Amazonas() {
    return (
        <div>
            <h1>Estado do Amazonas</h1>
            <div className="conteudo">


                <img src="/AM.png" />

                <p>
                O Amazonas é um estado localizado na Região Norte do Brasil, e sua capital é Manaus. É o maior estado brasileiro em extensão territorial e possui grande parte de seu território coberto pela Floresta Amazônica. O estado é conhecido por seus rios, sua rica biodiversidade e pela importância da Amazônia para o meio ambiente. Sua economia inclui atividades como comércio, indústria, agricultura, pesca e extrativismo.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}