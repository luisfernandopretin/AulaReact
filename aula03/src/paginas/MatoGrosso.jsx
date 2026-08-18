import { Link } from "react-router-dom";
export default function MatoGrosso() {
    return (
        <div>
            <h1>Estado do Mato Grosso</h1>
            <div className="conteudo">

                <img src="/MT.png" />

                <p>
                Mato Grosso é um estado localizado na Região Centro-Oeste do Brasil, e sua capital é Cuiabá. É conhecido por abrigar parte da Amazônia, do Cerrado e do Pantanal, apresentando grande diversidade de paisagens e animais. Sua economia se destaca pela agricultura e pela pecuária, sendo um dos principais produtores de grãos do país. O estado também possui importantes áreas de preservação ambiental e grande potencial turístico.

                </p>
              

<p>
<Link to="/">Voltar</Link>
</p>

            </div>


        </div>

    );


}