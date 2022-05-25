$(function () {
    $('form').submit(e => {
        e.preventDefault();
        const q = $('#search').val();
        $('tbody').load('/Reviews/Search2?query='+q);
    })
});