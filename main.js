function verificar() {
    const num = Number(document.getElementById("numero").value);

    if (isNaN(num)) {
    console.log("Por favor, insira um número válido.");
    return;
    }

    let resposta = `Múltiplos de ${num}:<br>`;

    for (let i = 1; i <= 10; i++) {
      const multiplos = num * i;
    resposta += `<br>${num} x ${i} = ${multiplos}`;
    }
    setTimeout(() => {
      document.getElementById("resposta").innerHTML = resposta;
    }, 500);
  }
  

