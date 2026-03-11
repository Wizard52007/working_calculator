function press(num)
{
    document.getElementById("display").value +=num
}

function calculate()
{
    let expression =document.getElementById("display").value;
    let result = eval(expression)
    document.getElementById("display").value = result;

}

function clearDisplay()
{
    document.getElementById("display").value = "";
}

function backspace()
{
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0,-1)
}