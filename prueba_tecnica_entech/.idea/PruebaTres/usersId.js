app.get('https://gorest.co.in/public-api/users/:id/:posts', function(req, res) {
    res.send(req.params.id, req.params.posts);
})
    .catch(function(err) {
        //handle error
        console.log(err);
    });
