let array= [1,2,3,4,5]
let num = array.find(item=>{
    if(item>3) return item
})

let numero=array.find(item=>item>3)
let index = array.findIndex(item=>item>3)



//Iteradores : son objetos al igual que python tiene el .next
// y la ventaja al igual que python guarda su estado
//este objeto devuelve dos propiedades value, done(devuelve true cuando no tiene mas elementos)


// .keys()

// .values()

//.entries()

let iteratorIndex = array.keys()
let iteratorValues = array.values()
let iterator = array.entries() // devulve una dubla de array
for (let item of iteratorIndex){
    console.log(item)
}
console.log("\n")
for (let item of iteratorValues){
    console.log(item)
}
console.log("\n")
for (let item of iterator){
    console.log(item)
}

// El objetivo es el procesamiento , pues este ejecuta los datos en tiempo de ejecucion y no retorna todo en uno solo