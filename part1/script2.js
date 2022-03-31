//массив для реструктризации не обязательно хранить в переменной. Он может быть результатом функции 
function returnsArrInside(){
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}; 

let [name1,surname1, department1, position1, startedToWork1] = returnsArrInside();

document.write('<br>',department1);