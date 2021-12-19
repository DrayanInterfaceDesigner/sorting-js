const alphabets = {
    latin: 
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}

//CORE METHOD
function INT_FIND_LETTER_VALUE (char) {
    if(typeof char !== 'string') { return }
    const value = alphabets.latin.indexOf(char.toUpperCase()) + 1
    return value
} //returns a INTEGER representing the charater position on the given alphabet(latin only for now)

Array.prototype.swap = function (a, b) {
    if(typeof a !== "number") return undefined;
    if(typeof b !== "number") return undefined;

    let c = this[a]
    this[a] = this[b]
    this[b] = c
    return this
} // swaps the given indexes


/* SEMI-SORT IN ALPHABETICAL ORDER (only initial letters for now) */
function sortAlphabetical(array = []) {
    let initialArr, result, firstChunk, secondChunk;
    initialArr = []
    result = []
    // pre-determine array size [DEPRECATED]
    // result[array.length] = null;

    // sort using the first letters
    array.forEach(word => {
        const letterValue = INT_FIND_LETTER_VALUE(word.charAt(0))
        let index = letterValue - 1
        console.log(word, index)
        if(initialArr[index] !== undefined) { initialArr.splice( ++index, 0, word ) }
        else { initialArr[index] = word } 
    })

    // delete all the "empty" spaces
    initialArr.filter(word => { if(word !== 'empty') result.push(word) })

    return result

    /* ---- [ ALL BELLOW IS DEPRECATED ]---------------------------------------------*/
    /*
    // sort using sum of the first chunk ? (sum sort doesn't seems to work, maybe bubble sort?)
    for(let i = 0; i <= (result.length-2); i++) {
        let chunkValue = '', nextChunkValue = '';


        for(let o = 0; o <= result[i].length; o++) { 
            
            chunkValue += INT_FIND_LETTER_VALUE(result[i].charAt(o)).toString() 
            // console.log(result[i].charAt(o), INT_FIND_LETTER_VALUE(result[i].charAt(o)), chunkValue )
        }
        
        for(let o = 0; o <= result[i+1].length; o++) {
            nextChunkValue += INT_FIND_LETTER_VALUE(result[i+1].charAt(o)).toString()
            // console.log(result[i+1].charAt(o), INT_FIND_LETTER_VALUE(result[i+1].charAt(o)), chunkValue )
        }


        console.log(result[i], result[i+1])
        console.log(chunkValue, nextChunkValue)

        if(eval(chunkValue) > eval(nextChunkValue)) {
            result.swap(i, i+1)
            console.log(result[i], result[i+1])
        }
        // console.log(i, i+1)
        // result.swap(i, i+1)
    }
    */

    /* another ideia: 
    Forget sum or bubble sorting and lets do a matrix,
    only one collunm:
    1. take all the individual values from each letter in each word and push it to an horizontal line
    2. compare vertically each collunm
    3. if the values are equal, so they're assigned by zero 0 
    Suppose:
    word1: col1 = B(2) col2 = C(3)
    word2: col1 = C(3) col2 = K(10)
    word3: col1 = B(2) col2 = Z(26)
    IN THIS CASE: 
    word1-col1 = 0
    word2-col1 = 1
    word3-col1 = 0
    4. Ignore the col2, since it already has a value
    5. compare col4 and col6 (the next letters)
    6. Z > C (26 > 3), so  now the order is:
    word1-col2 = 1 then  0
    word2-col2 = 1 then  0
    word3-col2 = 2
    7. now compare word1 and word2's col2
    C < K
    So:
    word1= 1
    word2= 2
    word3= 2
    
    */
} 

