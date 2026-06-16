export default function Exercicio8({ vendas, salario }) {

    let comissao, sf;

    comissao = vendas * 0.06;
    sf = salario + comissao;

   return (

<div>
            Vendas: R$ {vendas}
            Salario:R${salario}

            Comissao: R$ {comissao}
            Salario Final: R$ {sf}

        </div>
   )

}