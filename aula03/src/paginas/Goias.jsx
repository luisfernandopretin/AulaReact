import { Link } from "react-router-dom";
export default function Goias() {
    return (
        <div>
            <h1>Estado de Goias </h1>
            <div className="conteudo">


            <img src="/GO.png" />


                <p>
                Goiás é um estado localizado na Região Centro-Oeste do Brasil, e sua capital é Goiânia. O estado é conhecido por suas belas paisagens naturais, como as cachoeiras e chapadas, além do Cerrado, um dos principais biomas brasileiros. Sua economia é baseada principalmente na agricultura, pecuária, indústria e mineração. Goiás também possui uma cultura rica, com comidas típicas, festas tradicionais e cidades históricas.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}