/*1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no. */

function Nodo(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
  
  function arbolesIdenticos(arbolA, arbolB) {
    if (arbolA === null && arbolB === null) {
      return true;
    }
    if (arbolA === null || arbolB === null) {
      return false;
    }
    return (
      arbolA.valor === arbolB.valor &&
      arbolesIdenticos(arbolA.izquierda, arbolB.izquierda) &&
      arbolesIdenticos(arbolA.derecha, arbolB.derecha)
    );
  }
  
  var arbolA = new Nodo(1);
  arbolA.izquierda = new Nodo(2);
  arbolA.derecha = new Nodo(3);
  
  var arbolB = new Nodo(1);
  arbolB.izquierda = new Nodo(2);
  arbolB.derecha = new Nodo(3);
  
  var arbolC = new Nodo(1);
  arbolC.izquierda = new Nodo(2);
  arbolC.derecha = new Nodo(4);
  
  console.log('Arbol A y Arbol B son idénticos:', arbolesIdenticos(arbolA, arbolB));
  console.log('Arbol A y Arbol C son idénticos:', arbolesIdenticos(arbolA, arbolC));

//2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.

function copiarArbol(arbol) {
    if (arbol === null) {
      return null;
    }
    var nuevoNodo = new Nodo(arbol.valor);
    nuevoNodo.izquierda = copiarArbol(arbol.izquierda);
    nuevoNodo.derecha = copiarArbol(arbol.derecha);
    return nuevoNodo;
  }
  
  var arbolOriginal = new Nodo(1);
  arbolOriginal.izquierda = new Nodo(2);
  arbolOriginal.derecha = new Nodo(3);
  
  var arbolCopia = copiarArbol(arbolOriginal);
  
  console.log('Arbol original:', arbolOriginal);
  console.log('Arbol copia:', arbolCopia);
  

//3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.

function Nodo(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
  
  function nodosEnNivel(arbol, nivel) {
    if (arbol === null) {
      return [];
    }
    if (nivel === 0) {
      return [arbol.valor];
    }
    var nodosNivel = [];
    nodosNivel = nodosNivel.concat(nodosEnNivel(arbol.izquierda, nivel - 1));
    nodosNivel = nodosNivel.concat(nodosEnNivel(arbol.derecha, nivel - 1));
    return nodosNivel;
  }
  
    var arbol = new Nodo(1);
  arbol.izquierda = new Nodo(2);
  arbol.derecha = new Nodo(3);
  arbol.izquierda.izquierda = new Nodo(4);
  arbol.izquierda.derecha = new Nodo(5);
  arbol.derecha.izquierda = new Nodo(6);
  arbol.derecha.derecha = new Nodo(7);
  
  var nivel = 2;
  var nodosNivel = nodosEnNivel(arbol, nivel);
  
  console.log('Nodos en el nivel', nivel + ':', nodosNivel);
  

    
//4.- Escribe una función que devuelva el número de hojas de un árbol binario.

function Nodo(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
  
  function contarHojas(arbol) {
    if (arbol === null) {
      return 0;
    }
    if (arbol.izquierda === null && arbol.derecha === null) {
      return 1;
    }
    var hojasIzquierda = contarHojas(arbol.izquierda);
    var hojasDerecha = contarHojas(arbol.derecha);
    return hojasIzquierda + hojasDerecha;
  }
  

  var arbol = new Nodo(1);
  arbol.izquierda = new Nodo(2);
  arbol.derecha = new Nodo(3);
  arbol.izquierda.izquierda = new Nodo(4);
  arbol.izquierda.derecha = new Nodo(5);
  arbol.derecha.derecha = new Nodo(6);
  
  var numHojas = contarHojas(arbol);
  
  console.log('Número de hojas:', numHojas);
  
  