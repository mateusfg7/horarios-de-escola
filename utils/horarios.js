let horarioHoje

const data = new Date()
let dia = data.getDay()

const horarios = {
    "seg": [
        "Português", 
        "Inglês", 
        "Quimica", 
        "Física", 
        "Ed. Física"
    ],
    
    "ter" : [
        "Artes", 
        "História", 
        "Sociologia",
        "Português",
        "Geografia"
    ],
    "qua": [
        "Ed, Física",
        "Redação",
        "Biologia",
        "Geografia",
        "Biologia"
    ],
    "qui": [
        "Física",
        "História",
        "Matemática",
        "Matemática",
        "Quimica"
    ],
    "sex": [
        "Matemática",
        "Física",
        "Literatura",
        "Mateática",
        "Filosofia"
    ],
    "sab": ["SÁBADO"],
    "dom": ["DOMINGO"],
    "default": ["valor inválido"]
}

if (dia === 1) {
    horarioHoje = horarios["seg"]
} else if (dia === 2) {
    horarioHoje = horarios["ter"]
} else if (dia === 3) {
    horarioHoje = horarios["qua"]
} else if (dia === 4) {
    horarioHoje = horarios["qui"]
} else if (dia === 5) {
    horarioHoje = horarios["sex"]
} else if (dia === 6) {
    horarioHoje = horarios["sab"]
} else if (dia === 7) {
    horarioHoje = horarios["dom"]
} else {
    horarioHoje = horarios["default"]
}

export default horarioHoje