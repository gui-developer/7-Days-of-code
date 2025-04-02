let numerosecreto = Math.round(Math.random()*10);
console.log(numerosecreto)

let i = 0 ;
let acertou = false;

while(i < 2 && !acertou){
    let chute = prompt("Qual o valor que você deseja chutar ?");
    chute = parseInt(chute);

    if(chute === numerosecreto){
        alert("Parabéns, você acertou!");
        acertou = true;
    }else{
        alert("Você errou, tente novamente: ");
        i++;
    }
}

if(!acertou){
    alert(`Suas tentativas acabaram. O número secreto era ${numerosecreto}`)
}