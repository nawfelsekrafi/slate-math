export const getTables = () => {
    const arr = Array()
    for(var i = 1; i<11; i++){
        for(var j = 1; j<11; j++){
            arr.push({name: i + "x" + j, rows: i, cols: j})
        }
    }
    return arr;
}