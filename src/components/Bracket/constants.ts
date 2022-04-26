export const getBracketDropDownMenu = () => {
    const arr = Array()
    for (var i = 1; i < 9; i++) {
      for (var j = 1; j < 5; j++) {
        if(i == 8 && j > 2)
        {
          continue
        }
        arr.push({ name: i + 'x' + j, rows: i, cols: j })
      }
    }
    return arr
  }
  