const route=require('express').Router();

route.get('/',(req,res)=>{
	if(req.user){
		//console.log(req);
	return res.send(`
		<!DOCTYPE html>
<html lang="en">
<head>
  <title>Ted</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

<div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Ted</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <ul class="navbar-nav">
            	<li class="nav-item">
                    <a class="nav-link" href="#">Welcome Back</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/api/logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav><br><br>
<div id=div class="container-fluid">
  <div class="row">
    <div id="d1" class="col-sm-3">
      <h1 id="d1h">Dashboard</h1>
      <div id="d11" class="list-group">
  <a href="/api/viewpost" class="list-group-item">View Post</a>
  <a href="/api/createpost" class="list-group-item">Create Post</a>
</div>
</div>
</div>
</body>
`)
	}
	else
		res.redirect('../login.html')
})

exports=module.exports=route