import { Link } from "react-router-dom";
export default function Piaui() {
    return (
        <div>
            <h1>Estado do Piauí</h1>
            <div className="conteudo">

                <img src="/PI.png" />

                <p>
                O Piauí está localizado na porção oeste da região Nordeste e apresenta paisagens de cerrado, caatinga e áreas litorâneas. Sua capital é Teresina, única capital nordestina situada no interior. O estado possui importantes sítios arqueológicos, especialmente na Serra da Capivara, que guarda registros da presença humana há milhares de anos. A cultura piauiense é marcada pela agricultura, pecuária, artesanato e tradições sertanejas.


                </p>
              

<p>
<Link to="/">Voltar</Link>
</p>

            </div>


        </div>

    );


}