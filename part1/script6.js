// Значение переменной по умолчанию можно указывать функцию!

// Внизу функция возвращает текущую дату и его значение по умолчанию берет переменная Day 
// let arr = ['2022', 'march']; 

// function currentDay(){
//     return (new Date).getDate();
// }

// let [year, month, day=currentDay()] = arr;
// document.write (day); 

////////////////////////////////////////////////////////////

// let arr2 = ['march', '29'];
 
// function currentYear(){
//     return (new Date).getFullYear();
// }; 

// let [ month2, day2, year2 = currentYear()] = arr2

// document.write (year2); 

///////////////////////////////////////////////////////////

let arr3 = ['2022', '29'];

function currentMonth(){
    return (new Date).getMonth(); 
};

let[year3, day3, month3 = currentMonth()] = arr3
document.write('<br>', month3)



