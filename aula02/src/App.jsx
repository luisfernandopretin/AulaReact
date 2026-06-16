import "./App.css";
import Exemplo1 from "./Exemplo1";

import Exercicio1 from "./Exercicio1";

import Exercicio2 from "./Exercicio2";

import Exercicio3 from "./Exercicio3";

import Exercicio4 from "./Exercicio4";

import Exercicio5 from "./Exercicio5";

import Exercicio6 from "./Exercicio6";

import Exercicio7 from "./Exercicio7";

import Exercicio8 from "./Exercicio8";

import Exercicio9 from "./Exercicio9";

export default function App() {
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>

      <div className="card">
        <h3>Chamadas para o componente Exemplo1</h3>
        <Exemplo1 numero1={10} numero2={20} />
      </div>




      <div className="card">
        <h3>Exercicio 1</h3>
        <Exercicio1 numero={12} />
        <Exercicio1 numero={67} />
        <Exercicio1 numero={-5} />
      </div>


      <div className="card">
        <h3>Exercicio 2</h3>
        <Exercicio2 peso={60} altura={50} />
      </div>



      <div className="card">
        <h3>Exercicio 3</h3>
        <Exercicio3 nota1={9} nota2={7} />
      </div>


      <div className="card">
        <h3>Exercicio 4</h3>

        <Exercicio4 basep={7} alturap={9} />

      </div>



      <div className="card">

        <h3>Exercicio 5</h3>
        <Exercicio5 consulta={10} />
      </div>


      <div className="card">
        <h3>Exercicio 6</h3>
        <Exercicio6 capital={1000} tempo={6} taxa={5} />
      </div>

      <div className="card">
        <h3>Exercicio 7</h3>
        <Exercicio7 celsius={30} />
        <Exercicio7 celsius={20} />
        <Exercicio7 celsius={39.5} />

      </div>




      <div className="card">
        <h3>Exercicio 8</h3>
        <Exercicio8 salario={2000} vendas={50} />
        <Exercicio8 salario={1000} vendas={40} />
        <Exercicio8 salario={3000} vendas={300} />

      </div>


<div className="card">
<h3>Exercicio 9</h3>
<Exercicio9 sb={2500}/>



</div>



    </div>

  )
}