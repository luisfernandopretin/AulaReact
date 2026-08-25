import { Link } from "react-router-dom";
export default function Pernambuco() {
    return (
        <div>
            <h1>Estado de Pernambuco</h1>
            <div className="conteudo">


                <img src="/PE.png" />

                <p>
                Pernambuco é um dos estados mais importantes cultural e historicamente do Nordeste brasileiro. Sua capital, Recife, destaca-se por seus rios, pontes, praias e patrimônio histórico, enquanto Olinda é conhecida por suas construções coloniais e pelo tradicional Carnaval. O estado também possui destinos turísticos famosos, como Porto de Galinhas e Fernando de Noronha. Na cultura pernambucana, destacam-se o frevo, o maracatu, o forró e a culinária regional.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}