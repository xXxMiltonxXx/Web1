function calcular() {
    // Obtenemos los valores de los campos de entrada
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
  
    // Obtenemos el elemento de resultado
    var resultadoElement = document.getElementById("resultado");
  
    // Creamos un array con las operaciones que queremos realizar
    var operaciones = [    ["Suma", num1 + num2],
      ["Resta", num1 - num2],
      ["Multiplicación", num1 * num2],
      ["División", num1 / num2],
      ["Módulo", num1 % num2]
    ];
  
    // Iteramos sobre el array de operaciones
    for (var i = 0; i < operaciones.length; i++) {
      // Obtenemos la operación y el resultado correspondiente
      var operacion = operaciones[i][0];
      var resultado = operaciones[i][1];
  
      // Mostramos la operación y el resultado en el elemento de resultado
      resultadoElement.innerHTML += "<p>" + operacion + ": " + resultado + "</p>";
    }
  }
  
  