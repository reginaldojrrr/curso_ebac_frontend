$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#input-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<p>${tarefa}</p>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#input-tarefa').val('');
})

$('ul').on('click', 'li', function(e) {
    if($(this).css("text-decoration").includes("line-through")) {
        $(this).css("text-decoration", "none");
    } else {
        $(this).css("text-decoration", "line-through");
    }
});