import { Link } from "react-router-dom";
export default function Roraima() {
    return (
        <div>
            <h1>Estado de Roraima</h1>
            <div className="conteudo">

                <img src="/RR.png" />

                <p>
                Roraima é um estado localizado na Região Norte do Brasil, e sua capital é Boa Vista. É conhecido por suas belas paisagens naturais, incluindo o Monte Roraima, uma das principais atrações turísticas da região. O estado possui uma grande diversidade de fauna e flora e abriga várias comunidades indígenas. Sua economia envolve atividades como agricultura, pecuária, comércio e extrativismo.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}