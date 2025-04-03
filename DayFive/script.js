
let lista = true;

let Frutas = [];
let Laticínios = [];
let Congelados = [];

while (lista == true) {

    let adicionarComida = prompt("Você deseja adicionar uma comida na sua lista de compras ?");

    if (adicionarComida.toLowerCase() === "sim") {
        let comida = prompt("Digite o nome da comida que você deseja inserir : ");
        let tipoDeComida = prompt(`Digite qual é a categoria que ${comida} se encaixa: [1]Frutas [2]Laticínios [3]Congelados : `);

        if(tipoDeComida == "1"){
            Frutas.push(comida)

        }else if (tipoDeComida == "2"){
            Laticínios.push(comida)
            
        }else if (tipoDeComida == "3"){
            Congelados.push(comida)
        }else{
            alert("Digite uma categoria valida!")
        }

    
   } else {
        alert("Lista de compras : ")
        alert(`Frutas: ${Frutas} `)
        alert(`Laticínios: ${Laticínios} `)
        alert(`Congelados : ${Congelados} `)
        lista = false;
    }
}