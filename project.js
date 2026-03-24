function calculateBMI(){

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height === "" || weight === ""){
        document.getElementById("result").innerHTML = "Please enter height and weight";
        return;
    }

    let heightMeter = height / 100;
    let bmi = weight / (heightMeter * heightMeter);

    let category = "";

    if(bmi < 18.5){
        category = "Underweight";
    }
    else if(bmi < 24.9){
        category = "Normal weight";
    }
    else if(bmi < 29.9){
        category = "Overweight";
    }
    else{
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
    "Your BMI: " + bmi.toFixed(2) + "<br>Category: " + category;

}