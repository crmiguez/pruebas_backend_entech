app.get('https://gorest.co.in/public-api/users', function(req, res) {
    var page = req.param('page');
    var limit;

    if (req.param('limit') % 20 === 0){
        limit = req.param('limit')
    }

    res.send('?' +page + '&' + limit);
})
    .catch(function(err) {
        //handle error
        console.log(err);
    });
