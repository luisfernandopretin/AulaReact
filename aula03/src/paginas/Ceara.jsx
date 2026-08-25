import { Link } from "react-router-dom";
export default function Ceara() {
    return (
        <div>
            <h1>
            Estado do Ceará
            </h1>
            <div className="conteudo">


                <img src="/CE.png" />

                <p>
                O Ceará é um estado localizado na região Nordeste do Brasil, conhecido por suas belas praias, paisagens naturais e forte identidade cultural. Sua capital é Fortaleza, um dos principais destinos turísticos do país. Além do litoral, o estado possui serras e áreas de sertão, apresentando uma grande diversidade de paisagens. Sua cultura é marcada pelo forró, pela literatura de cordel, pelo artesanato e pelas festas populares.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}