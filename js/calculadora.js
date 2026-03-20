$("#calcular").click(function () {
  //recebendo dados da interface
  let n1 = parseInt($("#n1").val());
  let n2 = parseInt($("#n2").val());
  let operacao = $("input[name='operacao']:checked").val();
  //chamandoa funçaõ calcular
  let resultado = calcular(n1, n2, operacao);
  //mostrando na interface
  $("#resultado").html("Resultado: " + resultado);

   switch (operacao) {
  case "veri":
      if (n1 % 2 == 0) {
        $("#resultado").html("Resultado: n1 é par");
      } else {
        $("#resultado").html("Resultado: n1 é ìmpar");
      }
      break;

    case "p.n":
      if (n1 < 0) {
        $("#resultado").html("Resultado: n1 é negativo");
      } else if (n1 == 0) {
        $("#resultado").html("Resultado: n1 é igual a zero");
      } else {
        $("#resultado").html("Resultado: n1 é positivo");
      }
      break;

          case "div":
      if (n1 == 0) {
        $("#resultado").html("Não é possível realizar divisão com zero");
      } else if(n2==0){
        $("#resultado").html("Não é possível realizar divisão com zero");
      }
      else{
        resultado = n1 / n2
        $("#resultado").html("Resultado: " + resultado);
      }
      break;
    }
});

function limpar() {
  $("#n1").val("");
  $("#n2").val("");
  $("#n1").focus();
  $("input[name='operacao']").prop("checked", false);
  $("#resultado").html("Resultado:");
}

function calcular(n1, n2, operacao) {
  let resultado = 0;

  switch (operacao) {
    case "soma":
      resultado = n1 + n2;
      break;

    case "sub":
      resultado = n1 - n2;
      break;

    case "mult":
      resultado = n1 * n2;
      break;

  
  }

  return resultado;
}
