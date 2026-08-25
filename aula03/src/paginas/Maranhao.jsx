import { Link } from "react-router-dom";
export default function Maranhao() {
    return (
        <div>
            <h1>Estado do Maranhão</h1>
            <div className="conteudo">

                <img src="/MA.png" />

                <p>
                O Maranhão é um estado nordestino conhecido pela diversidade de suas paisagens e manifestações culturais. Sua capital é São Luís, cidade histórica que preserva importantes construções coloniais. Entre seus principais atrativos naturais estão os Lençóis Maranhenses, famosos pelas dunas e lagoas de águas cristalinas. A cultura maranhense também se destaca pelo bumba meu boi, uma das manifestações populares mais tradicionais do estado.


                </p>
              

<p>
<Link to="/">Voltar</Link>
</p>

            </div>


        </div>

    );


}