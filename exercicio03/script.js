const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//copia
const pokemon2= {
	...pokemon1
};
pokemon2.nome = 'Squirtle'
pokemon2.tipo = 'Agua'

//original
pokemon1.ataque = []
pokemon1.ataque.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
})
//copia
pokemon2.ataque = [...pokemon1.ataque]
pokemon2.ataque.push({
    nome: 'Jato de água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
 })

//original
pokemon1.ataque.push({
    nome: 'Folha de navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
})

console.log(pokemon1)
console.log(pokemon2)