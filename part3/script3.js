myFunction3(['Иван', 'Иванов', 'Отдел разработки']);

function myFunction3([name, surname, department, postion = 'junior']){
    console.log(postion);
}