import { Link } from "react-router-dom";
export default function Acre() {
    return (
        <div>
            <h1>Estado do Acre</h1>
            <div className="conteudo">


                <img src="/AC.png" />

                <p>
                O Acre é um estado localizado na Região Norte do Brasil, na Amazônia. Sua capital é Rio Branco, e o estado faz fronteira com o Amazonas, Rondônia, Peru e Bolívia. O Acre é conhecido por sua grande riqueza natural, com extensas áreas de floresta amazônica, além de sua importância histórica na produção de borracha. Também é lembrado pela figura de Chico Mendes, importante defensor da preservação da Amazônia.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}