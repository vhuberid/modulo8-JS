const newArray0 = numbers.map(function(number) {
    return number * 2
})

//É EXATAMENTE A MESMA COISA QUE:

const newArray1 = numbers.map((number) => {
    return number * 2
})

//E QUE

const newArray2 = numbers.map (number => number * 2)
