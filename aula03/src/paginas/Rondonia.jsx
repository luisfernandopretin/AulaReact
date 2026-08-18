import { Link } from "react-router-dom";
export default function Rondonia() {
    return (
        <div>
            <h1>Estado de Rondônia</h1>
            <div className="conteudo">

                <img src="/RO.png" />

                <p>
                Rondônia é um estado localizado na Região Norte do Brasil, e sua capital é Porto Velho. O estado possui grande parte de seu território coberto pela Floresta Amazônica e é rico em rios e biodiversidade. Sua economia é baseada principalmente na agricultura, pecuária, mineração e comércio. Rondônia também se destaca por sua diversidade cultural e pela importância de seus recursos naturais.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}