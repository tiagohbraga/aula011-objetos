const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

const primeiroAtor = filme.elenco[0]
console.log(primeiroAtor)

const ultimaAtriz = filme.elenco[3]
console.log(ultimaAtriz)

const transmição = filme.transmissoesHoje
console.log(transmição)

// const canalBrasil = filme.transmissoesHoje[1]
// console.log(canalBrasil)
console.log(filme.transmissoesHoje[1].horario)