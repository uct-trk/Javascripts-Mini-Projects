let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let weight = document.getElementById("weight-input").value;
    let height = document.getElementById("height-input").value;
    console.log(weight)
    console.log(height)

    let finalBMI = (weight / (height * height) * 10000).toFixed(2);
    document.getElementById("bmi-output").value = finalBMI;
})