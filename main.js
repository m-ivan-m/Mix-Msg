let text1 = ['Cancer', 'Piscis', 'Escorpio', 'Acuario', 'Virgo', 'Aries', 'Libra', 'Tauro', 'Leo']
let text2 = ['Conocernos a nosotros mismos.', 'Nada a nadie.', 'Mas play.', 'Salir a respirar aire puro.', 'Podes leer de vez en cuando.', 'Una birrita podes.', 'Mas porro menos falopa.', 'Es amarga.']
let text3 = ['La más fácil es hablar mal de los demás.', 'Solo podes pensar.', 'Más quiero a mi perro.', 'Te causa dolor a ti mismo.', 'Arde la tarjeta.', 'Siempre en lo que nos falta.', 'Pocos experimentan lo que realmente eres.', 'Esta mal pero no tan mal.', 'Su fruto es dulce.']

const random = arr => {
  let random =  Math.floor(Math.random() * arr.length)
  return arr[random]
}

const getPhrase = () => {
  let first = random(text1)
  let second = random(text2)
  let third = random(text3)

  return `Signo: ${first}\n| Salud: ${second}\n| Economia: ${third}`
}

console.log(getPhrase())

export { getPhrase }