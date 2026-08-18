import { Link } from "react-router-dom";
export default function Bahia() {
    return (
        <div>
            <h1>Estado da Bahia </h1>
            <div className="conteudo">


            <img src="/BA.png" />


                <p>
                A Bahia é um estado localizado na Região Nordeste do Brasil, e sua capital é Salvador. É conhecida por sua rica cultura, suas praias e sua importância histórica. Sua economia inclui turismo, agricultura, indústria, comércio e mineração.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}