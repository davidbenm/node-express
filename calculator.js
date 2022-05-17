const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result + ".");
})

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(Math.pow(height, 2));
    var bmiRounded = Math.round(bmi * 10) / 10;

    if (bmiRounded < 18.5) {
        res.send("Your BMI is " + bmiRounded + ", so you are underweight.");
    } else if (bmiRounded >= 18.5 && bmiRounded <= 24.9) {
        res.send("Your BMI is " + bmiRounded + ", so you have a normal weight.");
    } else {
        res.send("Your BMI is " + bmiRounded + ", so you are overweight.");
    }

})

app.listen(port, function () {
    console.log("Server started on port " + port + ".");
});