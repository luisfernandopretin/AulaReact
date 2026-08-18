import { Link } from "react-router-dom";
export default function Amapa() {
    return (
        <div>
            <h1>Estado do Amapa</h1>
            <div className="conteudo">


                <img src="/AP.png" />

                <p>
                O Amapá é um estado localizado na Região Norte do Brasil, tendo Macapá como sua capital. O estado possui grande parte de seu território coberto pela Floresta Amazônica e é conhecido por sua rica biodiversidade. O Amapá faz fronteira com o Pará, a Guiana Francesa e o Suriname, além de ser banhado pelo Oceano Atlântico. Sua economia inclui atividades como mineração, agricultura, pesca e extrativismo.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}