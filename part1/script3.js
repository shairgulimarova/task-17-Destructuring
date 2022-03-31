//Пропускаем значения переменной. Просто пропишем запятую вместо значения, которого пропускааем. 
function returnsArrInside(){
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}; 

let [,, department3, position3, startedToWork3] = returnsArrInside();

document.write('<br>',position3);