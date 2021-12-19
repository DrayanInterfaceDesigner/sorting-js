let res = sortAlphabetical([ 'Candace', 'Anna', 'Ana', 'Marry', 'Marbuó', 'Nilce', 'Beatrice'])
console.log('sorted: ', res)



/*

---------[PT-BR] [INITIAL THEORY - SKETCH] [IGNORE] ------ 

1+12+12+1  = 26
2+1+17+19 = 39

ana = 14
Ala = 12

ordem de valor relativa geral
ex: se temos "B B B B B ( B*5 = 10 )" e comparamos com "Ana (A*2=2 + 12 = 16)"
"Ana" viria por último, e "BBBBB" primeiro, pois relativamente falando, 
Ana tem menos caracteres, e por mais que individualmente A tenha menos valor que B,
como existem menos caracteres para análise em "Ana" do que em "BBBBBB", o peso de cada 
"A" aumenta. Então o valor de B diminui em relação ao geral(todo) por conta do valor de "n",
pois "n" vale 12, alfabeticamente B viria após, por ter um maior valor simplesmente por conta
da comparação entre as duas primeiras letras já descartarem o peso do restante da String. */

// function sortAlphabetical(array) {
//     let order = []
//     array.forEach( word => {
//         const fchunk, schunk;
//         fchunk = 1
//         schunk = 1

//     })
//     return order
// }

// if(fchunk < schunk) {
//     return firstWord
// }
