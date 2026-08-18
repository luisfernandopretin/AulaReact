import { Link } from "react-router-dom";
export default function Tocantins() {
    return (
        <div>
            <h1>Estado de Tocantins</h1>
            <div className="conteudo">

                <img src="/TO.png" />

                <p>
                Tocantins é um estado localizado na Região Norte do Brasil, e sua capital é Palmas. É conhecido por suas belas paisagens naturais, como o Jalapão, com cachoeiras, rios e grandes áreas de cerrado. Sua economia é baseada principalmente na agricultura, pecuária, comércio e mineração. Tocantins também possui uma rica cultura, com festas tradicionais e diversas manifestações culturais.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}