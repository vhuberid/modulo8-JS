const listNumbers = [1, 2, 3, 4];

const sum = listNumbers.reduce( (acc,current) => {
    console.log ("acumulador", acc)
    console.log("atual", current)
    return acc + current
},0)