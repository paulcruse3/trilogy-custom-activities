$(document).ready(function() {
    // ======== List Manipluation Functions ===========
    var saveTodoList = function(todoList) {
        localStorage.setItem('todo-list', todoList.join(','));
    }
    var writeCount = function(todoList) {
        $('#todo-count').html(todoList.length);
    }
    var writeTodo = function(todo, todoList){
        if (todo) {
            $('#todo-list').append(`
                <div class="input-group mb-3">
                    <input type="text" class="form-control bg-dark text-white" value="${todo}" readonly>
                    <div class="input-group-append">
                        <span class="input-group-text bg-danger text-white delete-todo" id="${todo}">Delete</span>
                    </div>
                </div>
            `);
        }
    }

    // ======== Aggregate Functions ======
    var initialListRender = function(todoList) {
        for (var todo of todoList){
            writeTodo(todo, todoList);
        }
    }
    var processWriteTodo = function(todoList){
        var todo = $("#todo").val();
        $('#todo').val('');
        todoList.push(todo)
        writeTodo(todo, todoList);
        writeCount(todoList);
        saveTodoList(todoList);
    }
    var processDeleteTodo = function(todo, todoList){
        const index = todo.indexOf(todo);
        if (index > -1) {
            todoList.splice(index, 1);
        }
        writeCount(todoList);
        saveTodoList(todoList);
    }

    // ======== DOM Manipluation Functions ======
    $(document).on('click','.delete-todo', function() {
        $(this).closest("div.input-group.mb-3").remove();
        var todo = $(this).attr('id');
        processDeleteTodo(todo, todoList);
    });
    $('#todo-add').on('click', function() {
        processWriteTodo(todoList);
    });
    $('#todo').keydown(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            processWriteTodo(todoList);
        }
    });

    // ======== Initialize ======
    var localList = localStorage.getItem('todo-list');
    var todoList = [];
    if (localList){
        todoList = localList.split(',');
        initialListRender(todoList);
    }
});
