$("#calcular").click(function () {
  let peso = parseFloat($("#peso").val());
  let alt = parseFloat($("#alt").val());

  let imc = peso / (alt * alt);
  let msg = "";

  if (peso == 0 || alt == 0) {
    msg = "Por favor, insira valores válidos";
  } else if (imc < 18.5) {
    msg = "Você está abaixo do peso";
  } else if (imc < 25) {
    msg = "Você está no peso ideal";
  } else if (imc < 30) {
    msg = "Você está com sobrepeso";
  } else {
    msg = "Você está obeso";
  }

  // Correção: Referenciar a variável correta 'msg' e adicionar aspas
  $("#resultado").html(`Seu IMC é ${imc.toFixed(2)}, ${msg}.`);
});

function limpar() {
  $("#peso").val("");
  $("#alt").val("");
  $("#peso").focus();
  $("input[name='operacao']").prop("checked", false);
  $("#resultado").html("Resultado:");
}
