$(function () {
    $('form').submit(async e => {
        e.preventDefault();
        const q = $('#search').val();
        $('tbody').load('/Reviews/Index2?query=' + q);
    })
});