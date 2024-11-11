// Função para verificar a idade
document.getElementById("idadeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const idade = document.getElementById("idadeInput").value;
    const mensagemIdade = document.getElementById("mensagemIdade");

    if (idade >= 18) {
        mensagemIdade.textContent = "Você é maior de idade. Pode continuar!";
        mensagemIdade.style.color = "green";
    } else {
        mensagemIdade.textContent = "Você deve ser maior de idade para acessar o bar.";
        mensagemIdade.style.color = "red";
    }
});

// Função para simular pagamento
document.getElementById("pagamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const cartao = document.getElementById("cartao").value;
    const validade = document.getElementById("validade").value;
    const mensagemPagamento = document.getElementById("mensagemPagamento");

    if (cartao && validade) {
        mensagemPagamento.textContent = "Pagamento processado com sucesso!";
        mensagemPagamento.style.color = "green";
    } else {
        mensagemPagamento.textContent = "Preencha todos os campos corretamente.";
        mensagemPagamento.style.color = "red";
    }
});
