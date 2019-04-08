$("#class").change(function(){
    changeClass();
});
$("#pick").on('click', function(){
    pickStudent(0);
});
$("#clear").on('click', function(){
    resetStudents();
});
var pickedStudents = [];
var student = '';
function changeClass(){
    var selectClass = $("#class option:selected").text();
    if (selectClass === 'Monday/Wednesday') {
        students = monStudents;
    } else if (selectClass === 'Tuesday/Thursday') {
        students = tueStudents;
    } else if (selectClass === 'Saturday') {
        students = monStudents.concat(tueStudents);
    }
}
function resetStudents(){
    $("#choosen").empty();
    $("#student").empty();
    pickedStudents = [];
}
function pickStudent(tries){
    var student = students[Math.floor(Math.random() * students.length)];
    if (tries > 100){
        resetStudents();
    }
    if (pickedStudents.indexOf(student) !== -1){
        tries++;
        return pickStudent(tries);
    }
    pickedStudents.push(student);
    if (pickedStudents.length > 1){
        $("#choosen").append(' | ');
    }
    $("#choosen").append(student);
    $("#student").text(student);
}
