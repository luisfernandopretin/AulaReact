import { Link } from "react-router-dom";
export default function DistritoFederal() {
    return (
        <div>
            <h1>Distrito Federal</h1>
            <div className="conteudo">


                <img src="/DF.png" />

                <p>
                O Distrito Federal está localizado na Região Centro-Oeste do Brasil e tem como sede Brasília, a capital do país. É onde ficam os principais órgãos do governo federal, como o Congresso Nacional, o Palácio do Planalto e o Supremo Tribunal Federal. O Distrito Federal possui uma economia baseada principalmente nos serviços, no comércio e na administração pública. Brasília também é conhecida por sua arquitetura moderna e foi projetada por Lúcio Costa e Oscar Niemeyer.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}