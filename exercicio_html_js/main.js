document.getElementById("meu-form").addEventListener("submit", function(e){
    e.preventDefault();

    var inputA = document.getElementById("input-a");
    var inputB = document.getElementById("input-b");

    if(inputB.value > inputA.value) {
        document.getElementById("validacao").innerHTML = "Formulário válido.";
        document.getElementById("validacao").className = "success-message";
        inputB.classList.remove("input-error");
        inputA.classList.remove("input-error");
        inputB.classList.add("input-success");
        inputA.classList.add("input-success");

    } else {
        document.getElementById("validacao").innerHTML = "Formulário inválido. O valor B deve ser maior que o valor A.";
        document.getElementById("validacao").className = "error-message";
        inputB.classList.add("input-error");
        inputA.classList.add("input-error");
        inputB.classList.remove("input-success");
        inputA.classList.remove("input-success");
    }
});