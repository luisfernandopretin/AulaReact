import { Link } from "react-router-dom";
export default function SantaCatarina() {
    return (
        <div>
            <h1>Estado de Santa Catarina </h1>
            <div className="conteudo">


            <img src="/SC.png" />



                <p>
                Santa Catarina é um estado localizado na Região Sul do Brasil, e sua capital é Florianópolis. É conhecido por suas belas praias, serras e paisagens naturais. O estado possui uma economia diversificada, com destaque para a indústria, agricultura, pecuária, turismo e comércio. Santa Catarina também tem forte influência de imigrantes europeus, presente em sua cultura, arquitetura e festas tradicionais.


                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}