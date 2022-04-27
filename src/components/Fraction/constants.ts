export const getFractionDropDownMenu = () => {
  const arr = Array()
  for (var i = 1; i < 2; i++) {
    for (var j = 1; j < 4; j++) {
      arr.push({ name: i + 'x' + j, rows: i, cols: j })
    }
  }
  return arr
}
