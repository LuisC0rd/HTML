let menu = document.getElementById("menu");
let toggleMenu = document.getElementById("toggle-menu");
let formCalc = document.getElementById("form-calc");
let resultado = document.getElementById("resultado");

toggleMenu.addEventListener("click", () =>{
    menu.classList.toggle("hide");

})

function navMenu(link) {
    let item = document.getElementsByClassName(link);

    if (link === "calc" && item[0].style.display === "block")
        item[0].style.display = "none"
    else
        item[0].style.display = "block"
}

formCalc.addEventListener("submit", (event) =>{
    event.preventDefault();
    resultado.style = `backgroud-color: #fff;
                       border: 1px solid #222;
                       border-radius: 5px;
                       padding: 7px;`;

if(formCalc.number1.value === ""){
    resultado.innerHTML = "Digite um número.";
} 
else if(formCalc.number2.value === ""){
    resultado.innerHTML = "Digite outro número.";
}
else{
    if(operacao.value === "soma"){
        resultado.innerHTML = Number(formCalc.number1.value) + Number(formCalc.number2.value)
    }
    else if(operacao.value === "subtracao"){
        resultado.innerHTML = Number(formCalc.number1.value) - Number(formCalc.number2.value)
    }
    else if(operacao.value === "divisao"){
        resultado.innerHTML = Number(formCalc.number1.value) / Number(formCalc.number2.value)
    }
    else if(operacao.value === "multiplicacao"){
        resultado.innerHTML = Number(formCalc.number1.value) * Number(formCalc.number2.value)
    }
    else{
        resultado.innerHTML = alert("Selecione a operação desejava para iniciarmos.")
    }
}
})