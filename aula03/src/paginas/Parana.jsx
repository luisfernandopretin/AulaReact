import { Link } from "react-router-dom";
export default function Parana() {
    return (
        <div>
            <h1>Estado do Parana</h1>
            <div className="conteudo">


                <img src="/PR.png" />

                <p>
                O Paraná é um estado localizado na Região Sul do Brasil, e sua capital é Curitiba. O estado é conhecido por suas belas paisagens, como as Cataratas do Iguaçu, uma das principais atrações turísticas do país. Sua economia é forte e diversificada, com destaque para a agricultura, pecuária, indústria e comércio. O Paraná também possui uma rica cultura, influenciada por diferentes povos e tradições.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}