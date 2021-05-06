/* 
           2 - 0
          / \
         1 - 3
*/ 

// tres formas de representar grafos en js

//Edge List
//     .....Representa arrays de las conexiones existentes entre los nodos
const graph = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
];

//Adjacent List
//     .......se puede representar de dos formas, a)Como un arreglo de vectores que contiene por cada vector las conexiones de los nodos
//     ...........................................b)Como un hashTable de arrays con las mismas coneciones con nodos, esta es mas intutiva y clara

//...a)        0    1      2      3
const graph =[[2],[2,3],[0,1,3],[1,2]];

//...b)
const graph={
    0:[2],
    1:[2,3],
    2:[0,1,3],
    3:[1,2]
}

//Adjacent Matrix
//      ........Por ultimo estan esta represnetacion es de manera binaria colocar 1 en las conexiones existentes, donde de cada vector
//      ........representa el nodo y cada columna el nodo en modo conexion

const graph = [
 //  0 1 2 3
    [0,0,1,0],  //0
    [0,0,1,1],  //1
    [1,1,0,1],  //2
    [0,1,1,0]   //3
];

const graph={
    0:[0,0,1,0],
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0]
}