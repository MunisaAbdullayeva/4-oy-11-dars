// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring
let a = 45
let b = 10
console.log(a + b)

// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

let son = '12'
console.log(typeof +son)

// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

let c = Math.random() * 10;
console.log(c)

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin


let ism = prompt("yoz")

if (ism == "Mars") {
    console.log("Mars")
} else {
    console.log("Mars IT School")
}



// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini boshqa bir arrayga qo'shib chiqaring

let array = ["Notebook", "Laptop", "Box", "Desk", "Mouse"]
let array1 = []
for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
        array1.push(array[i])
    }
}

console.log(array1)


// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

