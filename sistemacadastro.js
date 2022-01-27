let dataevento = new Date('02/05/2022')
console.log('Data do evento: '+ dataevento)
let datahoje = new Date()
console.log(`Data de hoje: ${datahoje}`)

if(dataevento < datahoje) {
    console.log("Data inválida, por favor inserir uma data posterior a data de hoje")
}else {
    console.log("Data cadastrada")

    console.log("Deseja cadastrar um novo participante?")

let listaparticipantes = ["part1", "part2", "part3", "part4", "part5", "part6", "part7", "part8", "part9", "part10"]

if(listaparticipantes.length < 100) {
    console.log("Qual a idade do participante?")

    let idade = 19

if(idade < 18) {
    console.log("Cadastro não permitido para participantes com menos de 18 anos")
}else {
    console.log("Participante cadastrado")

    console.log("Lista de participantes:")

for(contador = 0; contador < listaparticipantes.length; contador++) {
    console.log(`${listaparticipantes[contador]}`)
}

}

}else {
    console.log("Cadastro não permitido por ter excedido o limite de participantes")
}

}
