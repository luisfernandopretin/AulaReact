import { Link } from "react-router-dom";
export default function Alagoas() {
    return (
        <div>
            <h1>Estado de Alagoas</h1>
            <div className="conteudo">


                <img src="/AL.png" />

                <p>
                Alagoas é um estado localizado na Região Nordeste do Brasil, e sua capital é Maceió. É conhecido por suas belas praias, lagoas e paisagens naturais. Sua economia destaca-se pela agricultura, turismo, comércio e indústria.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}