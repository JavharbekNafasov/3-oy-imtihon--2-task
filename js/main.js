// 2-MISOL

// Bu misolda sizga object beriladi, siz 2ta funksiya yozishingiz kerak bo'ladi. Birinchisi jamoadagi barcha azolarning oyliklarini yig'indisini hisoblab beradi. Ikkinchisi jamoa azolarining o'rtacha yoshini hisoblab beradi.

var users = {
    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },

    "Oybek": {
        name: "Oybek",
        surname: "Hakimov",
        age: 36,
        salary: 1500
    },
    
    "Umid": {
        name: "Umid",
        surname: "Abdurahmonov",
        age: 21,
        salary: 400
    }
}


//BIRINCHI FUNKSIYAMIZ OYLIKLAR YIG'INDISINI HISOBLASH UCHUN

function sumSalary(item) {
    var array = []
    var a = 0
    
    for (const key in item) {
        array.push(item[key].salary)
    }
    
    for (let i = 0; i < array.length; i++) {
        a += array[i];        
    }    
    
    return a    //Bu yerga oyliklarni yig'indisini jo'natadi
}

// IKKINCHI FUNKSIYAMIZ USERLARNI ORTACHA YOSHINI HISOBLASH UCHUN

function avarageAge(item2) {
    var array = []
    var a = 0
    var result

    for (const key in item2) {
        array.push(item2[key].age)
    }

    for (let i = 0; i < array.length; i++) {
        a += array[i];
    }

    result = a / array.length    
    
    return result  //Bu yerga userlarni o'rtacha yoshini chiqaradi
}

// console'dagi natijalar
console.log(sumSalary(users));
//--> 2700

console.log(avarageAge(users));
//--> 28