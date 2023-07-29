// Don't confuse, here i have used jQuery

function refreshList(){

    $.get('/todos', function (data){
        for(let item of data){
            $('#list').append(`<li>${item}</li>`);
        }
    })

}

refreshList();

$('#btn').click(function(){
    const todo = $('#inp').val();
    $.post("/todos", {todo}, function(res){
        $('#list').append(`<li>${todo}</li>`);
    })
})