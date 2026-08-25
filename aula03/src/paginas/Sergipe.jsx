import { Link } from "react-router-dom";
export default function Sergipe() {
    return (
        <div>
            <h1>Estado do Sergipe</h1>
            <div className="conteudo">


                <img src="/SE.png" />

                <p>
                Sergipe é o menor estado brasileiro em extensão territorial, mas apresenta grande diversidade cultural e natural. Sua capital, Aracaju, é conhecida por suas praias e pela orla, que reúne diversas opções de lazer. O estado também possui atrações como o Cânion do Xingó, no rio São Francisco, além de cidades históricas e áreas naturais. A cultura sergipana é marcada pelas festas juninas, pelo forró, pelo artesanato e pela culinária regional.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}