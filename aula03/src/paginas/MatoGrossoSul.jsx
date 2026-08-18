import { Link } from "react-router-dom";
export default function MatoGrossoSul() {
    return (
        <div>
            <h1>Estado do Mato Grosso do Sul </h1>
            <div className="conteudo">


            <img src="/MS.png" />


                <p>
                Mato Grosso do Sul é um estado localizado na Região Centro-Oeste do Brasil, e sua capital é Campo Grande. O estado é conhecido por suas belas paisagens naturais, principalmente o Pantanal e a Serra da Bodoquena. Sua economia é baseada na agricultura, pecuária, indústria e turismo. Mato Grosso do Sul também possui uma rica diversidade de animais e plantas, além de uma cultura marcada por tradições regionais.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}