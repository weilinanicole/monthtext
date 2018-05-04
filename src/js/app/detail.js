var addr = location.search.slice(4);
$.ajax({
    url: '/api/req?id=' + addr,
    success: function(data) {
        var data = JSON.parse(data);
    }
})