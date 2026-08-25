import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo1() {
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();

    const [dias, setDias] = useState();
    const [resultado, setresultado] = useState();

    function calcular() {
        let res = idade * 365;

        setDias(res);


        function processsar()
        {
            let res = idade * 365;
            setDias(res);

            setresultado(
                <div>
                    O aluno {nome} ja viveu {res} dias

                </div>

            );




        }






    }


    return (
        <div>

            <h1>Exemplo 1</h1>

            <div className="conteudo">


                <form>
                    <p>
                        Digite o nome do aluno <br />
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </p>

                    <p>
                        Digite a idade
                        <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />

                    </p>


                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>

                    <p>
                        <input type="button" value="Processar" onClick={processsar} />
                    </p>







                </form>

                <p>Nome Aluno: {nome} <br />
                    Idade: {idade}


                    <br />
                    Dias vividos: {dias}
                </p>

                <p>
                    {resultado}
                </p>

<p>
                <Link to="/">Voltar</Link>
</p>

            </div>

        </div>
    );
}
