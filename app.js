const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Greeting App</title>

<style>

body{
font-family: Verdana;
background: linear-gradient(120deg,#ff7e5f,#feb47b);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
}

.container{
background:rgba(255,255,255,0.2);
backdrop-filter:blur(10px);
padding:40px;
border-radius:15px;
text-align:center;
width:320px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

h1{
color:#333;
}

input{
width:85%;
padding:12px;
margin-top:10px;
border:none;
border-radius:8px;
outline:none;
}

button{
margin-top:15px;
padding:12px 20px;
border:none;
border-radius:25px;
background:#ff4b2b;
color:white;
font-size:15px;
cursor:pointer;
transition:0.3s;
}

button:hover{
background:#ff1e00;
}

</style>

</head>

<body>

<div class="container">

<h1>Welcome 👋</h1>
<p>Type your name below</p>

<form method="POST" action="/submit">

<input type="text" name="username" placeholder="Your name" required>

<br>

<button type="submit">Show Greeting</button>

</form>

</div>

</body>
</html>
`);
});


// POST request
app.post("/submit", (req, res) => {
    const name = req.body.username;
    res.redirect("/hello?name=" + name);
});


// Greeting Page
app.get("/hello", (req, res) => {

    const name = req.query.name;

    res.send(`

<!DOCTYPE html>
<html>

<head>

<title>Hello</title>

<style>

body{
font-family: Verdana;
background: linear-gradient(120deg,#43cea2,#185a9d);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
color:white;
}

.card{
background:rgba(0,0,0,0.3);
padding:50px;
border-radius:15px;
text-align:center;
}

h1{
font-size:40px;
}

a{
display:inline-block;
margin-top:20px;
padding:10px 20px;
background:white;
color:black;
border-radius:20px;
text-decoration:none;
}

</style>

</head>

<body>

<div class="card">

<h1>Hello, ${name} 🎉</h1>

<p>Welcome to the greeting app</p>

<a href="/">Go Back</a>

</div>

</body>

</html>

`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});