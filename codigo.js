//ej 1
function DarBienvenida(){
    let nombre=prompt("Ingrese su nombre");
    let ej1=document.getElementById("ej1");
    ej1.innerHTML="Bienvenido/a " + nombre + " a 5to año";
    Console.Log(ej1);
}

//ej2
function calcular() {
    let num1 =parseFloat(prompt("num1"));
    let num2 =parseFloat(prompt("num2"));

        const suma= num1 + num2; 
        const resta= num1-num2;
        const division= num1/num2;
        const multiplicacion=num1*num2;

        let mensaje = `suma: ${suma}, resta: ${resta}, division: ${division}, multiplicacion: ${multiplicacion}`
        
        let ej2=document.getElementById("ej2");
      
        ej2.innerHTML=mensaje;
        console.log(mensaje);
}

//ej3
function determinarParoImpar(){
    let num1 =parseFloat(prompt("num1"));

    let determinacion;

    if(num1%2==0)
    {
        determinacion= 'par';
    }
    else{
        determinacion='impar';
    }
    
    let mensaje = `Su numero es ${determinacion}`
    let ej3=document.getElementById("ej3");
    ej3.innerHTML=mensaje;
    console.log(mensaje);

}

//ej4
function contadorCaracteres()
{
    let palabra =prompt("Ingrese la palabra");
    let ej4=document.getElementById("ej4");
    let contador=palabra.length;
    ej4.innerHTML="Su palabra tiene " + contador + " caracteres";
    console.log(ej4);
}

//ej5
function repetirFrase()
{
    let palabra =prompt("Ingrese la palabra");
    let numero =parseFloat(prompt("numero"));
    let cadena="";

    let ej5=document.getElementById("ej5");
    for(let i=0; i<numero; i++ )
    {
        cadena+=palabra + "";
    }
    ej5.innerHTML=cadena;
    console.log(ej5);
}

//ej6
function mostrarTablaMult()
{
    let numero =parseFloat(prompt("numero"));
    let cadena="";

    let ej6=document.getElementById("ej6");
    for(let i=1; i<=10; i++ )
    {
        let multp=numero*i;
        if(i==10){
            cadena+=multp;
        }
        else{
              cadena+=multp + ", ";
        }
      
    }

    ej6.innerHTML=cadena;
    console.log(ej6);
}


let random = Math.floor(Math.random() * 10) + 1;

//ej7
function adivinarNumRnd() {
    let numero = parseFloat(prompt("Ingrese un número"));
    let ej7 = document.getElementById("ej7");

    while (numero !== random) 
        {
        if (numero < random) 
            {
            ej7.innerHTML = "Su número es menor al número generado";
            console.log(ej7);
        } else if (numero > random) {
            ej7.innerHTML = "Su número es mayor al número generado";
            console.log(ej7);
        }
        
        numero = parseFloat(prompt("Ingrese un número"));
    }

    ej7.innerHTML = "¡Felicitaciones! Adivinaste el número";
    console.log(ej7);
}

//8
function contarVocales() {
    let contadorVocales = 0;
    let palabra = prompt("Ingrese la palabra").toLowerCase(); 
    let vocales = ["a", "e", "i", "o", "u"];


    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) { 
            contadorVocales++;
        }
    }

    let ej8 = document.getElementById("ej8");

    if (contadorVocales > 0) {
        ej8.innerHTML = `Su palabra tiene ${contadorVocales} vocales`;
        console.log(ej8);
    } else {
        ej8.innerHTML = "Su palabra no tiene vocales";
        console.log(ej8);
    }
}

//9





