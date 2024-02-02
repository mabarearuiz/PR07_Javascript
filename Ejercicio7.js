
function tiradas(n) {
    var estadistica = [0,0,0,0,0,0,0,0,0,0,0];
    var res=0 ;
    var d1=0;
    var d2=0;

  for (i = 0; i < n; i++) {
     d1 = Math.floor(Math.random() * (5 + 1) + 1);
     d2 = Math.floor(Math.random() * (5 + 1) + 1);

     res = d1 + d2;

    // comprobar resultado
    // alert (res);
/*
    var dado1 = document.getElementById("dado1");
    dado1.innerHTML = d1;

    var dado2 = document.getElementById("dado2");
    dado2.innerHTML = d2;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = res;
*/
    estadistica[res-2]++; 
  }

  document.write("<table border=1>");
  
  document.write("<tr><th>Número</th><th>ha salido</th><th>veces</th></tr>");
  
  for (i = 0; i < 11; i++) {

    document.write("<tr><td>");
    document.write((i+2));
    document.write("</td>");

    document.write("<td>&nbsp;&nbsp;&nbsp; = </td>");

    document.write("<td>");
    document.write(estadistica[i]);
    document.write("</td></tr>");

  }
  document.write("</table>");

}

