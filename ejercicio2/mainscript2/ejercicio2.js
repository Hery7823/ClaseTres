let socio1, socio2, socio3, inverTotal;
socio1=prompt(" Ingresa Capital Socio Uno");
socio2=prompt("Ingresa Capital Socio Dos");
socio3=prompt("Ingresa Capital Socio Tres");
inverTotal=parseInt(socio1) + parseInt(socio2) + parseInt(socio3);
socio1=(socio1/inverTotal)* 100;
socio2=(socio2/inverTotal)* 100;
socio3=(socio3/inverTotal)* 100;

prompt("inversion por acciones: \naccionista 1: "+socio1+" % \naccionista 2: "+socio2+" % \naccionista 3: "+socio3+" %");


