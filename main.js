let cpr ="030499-1546"
let cpr1 = cpr[1];
let dato = cpr.slice(0,2)
let maaned = cpr.slice(2,4)
let aar = cpr.slice(4,6)
let koen = cpr.slice(10)

// console.log(cpr.slice(0,2)); for at tjekke om det virker.
// console.log(dato);

console.log("Dit indtastede CPR-nummer er " + cpr)

// Tjekker om datoen er gyldig

if (dato >= 1 && dato <= 31){
    console.log("03 - Datoen er gyldig")
}
else{
    console.log("Ugyldig dato")
}

// Tjekker om måneden er gyldig

if (maaned >= 1 && maaned <= 12){
    console.log("0310 - Måneden er gyldig")
}
else{
    console.log("Ugyldig måned")
}

// Tjekker om årstallet er gyldigt

if (aar >= 0 && aar <= 99){
    console.log("031099 - Årstallet er gyldigt")
}
else{
    console.log("Ugyldigt år")
}

// Tjekker køn

if (koen % 2 == 0){
    console.log("Du er en pige")
}
else{
    console.log("Du er en dreng")
}

// Tjekker om CPR-nummerets længde er gyldigt

if (cpr.length == 11){
    console.log("Længden på dit cpr-nummer er gyldigt")
}
else{
    console.log("Længden på dit cpr-nummer er ugyldigt")
}

