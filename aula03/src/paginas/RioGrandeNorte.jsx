import { Link } from "react-router-dom";
export default function RioGrandeNorte() {
    return (
        <div>
            <h1>Estado do Rio Grande do Norte</h1>
            <div className="conteudo">


                <img src="/RN.png" />

                <p>
                O Rio Grande do Norte é conhecido por suas praias, dunas e belas paisagens litorâneas. Sua capital, Natal, é um importante destino turístico e possui atrações como praias, áreas de preservação e o Morro do Careca. O estado também conta com destinos bastante visitados, como Pipa e Genipabu. Sua cultura é marcada pelo forró, pelas festas populares, pelo artesanato e pela culinária regional.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}