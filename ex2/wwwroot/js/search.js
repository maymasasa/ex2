$(function () {
    $('form').submit(async e => {
        e.preventDefault();
        const q = $('#search').val();
        $('tbody').load('/Reviews/Index2?query=' + q)

        /*const response = await fetch('/Reviews/Index3?query=' + q);
        const data = await response.json();
        for (var i = 0; i < data.length; i++) {
            $('tbody').html(
                '<tr><td>' + data[i].userName + '</td>'
                + '<td>' + data[i].comment + '</td>'
                + '<td>' + data[i].rate + '</td>'
                + '<td>' + data[i].time + '</td>'
                + '<td>' + '<a asp-action="Edit" asp-route-id=' + data[i].id + '>Edit</a>' + ' | '
                + '<a asp-action="Details" asp-route-id=' + data[i].id + '>Details</a>' + ' | '
                + '<a asp-action="Delete" asp-route-id=' + data[i].id + '>Delete</a>' + '</td></tr>');
        }*/
    })
});