// Можно объявлять переменные заранее. Но без let он не будет работоать, поскольку JS принимает его как блок кода. Нужно брать их в круглые скобки. 

// Obj не обязательно хранить в переменной. Он может быть результатом функции.

function jyldyzAcademy() {
    return kelechek ={
        year: 2021,
        month: 'May',
        day: 17
    }
}; 

let {year, month,day} = jyldyzAcademy(); 

document.write('<br>', year, month,day)