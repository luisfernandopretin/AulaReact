import { Link } from "react-router-dom";
export default function Para() {
    return (
        <div>
            <h1>Estado do Para</h1>
            <div className="conteudo">


                <img src="/PA.png" />

                <p>
                O Pará é um estado localizado na Região Norte do Brasil, e sua capital é Belém. É conhecido por sua grande riqueza natural, com extensas áreas da Floresta Amazônica e muitos rios. O estado possui uma economia baseada em atividades como mineração, agricultura, pecuária, pesca e extrativismo. O Pará também tem uma cultura muito rica, com destaque para suas comidas típicas, festas e tradições.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}