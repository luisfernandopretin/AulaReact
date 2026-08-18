import { Link } from "react-router-dom";
export default function RioGrandeSul() {
    return (
        <div>
            <h1>Estado do Rio Grande do Sul </h1>
            <div className="conteudo">


            <img src="/RS.png" />



                <p>
                O Rio Grande do Sul é um estado localizado na Região Sul do Brasil, e sua capital é Porto Alegre. É conhecido por suas paisagens naturais, pelo clima mais frio e por sua forte tradição cultural, com destaque para o chimarrão e o tradicionalismo gaúcho. Sua economia é baseada na agricultura, pecuária, indústria e comércio. O estado também possui cidades históricas e belas regiões, como a Serra Gaúcha.
 

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}