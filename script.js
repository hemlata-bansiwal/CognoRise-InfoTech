// TASK 1 //

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        } 
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
    }
    })
})

// TASK 2 //

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data" ,listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


// TASK 3 //

window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click' , calculateBmi)
}
function calculateBmi(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if(!height ||isNaN(height) ||height < 0){
        result.innerText = "Please provide a valid height";
        return;
    } else if(!weight || isNaN(weight) || weight < 0){
        result.innerText = "Please provide a valid weight";
        return;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5){
        result.innerText = `Under Weight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9){
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9){
        result.innerText = `Over Weight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9){
        result.innerText = `Obesity (Class 1): ${bmi}`;
    } else if (bmi >=35.5 && bmi < 39.9){
        result.innerText = `Obesity (Class 2): ${bmi}`;
    } else {
        result.innerText = ` Extreme Obesity : ${bmi}`;
    }
}



