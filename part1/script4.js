//если меньше элементов, чем переменные, тогда лишние переменные запишется undefined; 
//если больше элементов, чем переменные, тогда лишние элементы никуда не запишутся. При необходимости можно сохранить их с помощью оператора rest

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист',  '2000'];
let [,, department4, position4, startedToWork4] = arr

document.write('<br>', department4 +" ",position4 +" ",  startedToWork4)
