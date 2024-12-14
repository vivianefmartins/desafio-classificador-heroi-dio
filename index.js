let nome = "Lara Croft";
let quantExp = 8500;
let nivel;

switch(true){
    case quantExp < 1000:
        nivel = "Ferro";
        break;
    
    case quantExp >= 1000 && quantExp <= 2000:
        nivel = "Bronze";
        break;

    case quantExp >= 2001 && quantExp <= 5000:
        nivel = "Prata";
        break;

    case quantExp >= 5001 && quantExp <= 7000:
        nivel = "Ouro";
        break;

    case quantExp >= 7001 && quantExp <= 8000:
        nivel = "Platina";
        break;

    case quantExp >= 8001 && quantExp <= 9000:
        nivel = "Ascendente";
        break;

    case quantExp >= 9001 && quantExp <= 10000:
        nivel = "Imortal";
        break;

    case quantExp >= 100001:
        nivel = "Radiante";
        break;
}

console.log(`O Herói de nome(a) ${nome} está no nível ${nivel}`);