$("#pickStudentBtn").on('click', function(){
    var randomStudent = students[Math.floor(Math.random() * students.length)];
    $("#studentPicked").text(randomStudent);
});
