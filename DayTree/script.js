let EscolhaLinguagem = prompt("Você deseja seguir para área de Front-End ou Back-End? Digite sua resposta: ");

if (EscolhaLinguagem === "Front-End") {
    let LinguagemFront = prompt("Você quer aprender [1] React ou [2] Vue ")

} else if (EscolhaLinguagem === "Back-End") {
    let LinguagemBack = prompt("Você quer aprender [1] C# ou [2] Java ")
}
else {
    alert("Digite uma opção valida!")
}


let seguirArea = prompt("Qual será seu proximo passo ? [1] Seguir se especializando na area ou [2] Seguir se desenvolvendo para se tornar Fullstack")

if (seguirArea == 1) {
    alert(`Muito bem! Continue estudando ${EscolhaLinguagem} para se tornar um especialista na área!`)
} else if (seguirArea === 2) {
    alert("O caminho para se tornar um Desenvolvedor FullStack é longo, porem recompensador! Boa sorte")
}

var extras = [];
let outrasLinguagens = true;

while (outrasLinguagens) {
    let Continue = prompt("Digite o nome da tecnologia que você gostaria de aprender : (ou 'sair' para encerrar)")

    if (Continue.toLocaleLowerCase() === 'sair') {
        outrasLinguagens = false;

    } else {
        extras.push(Continue);
    }
    console.log(extras);
}



