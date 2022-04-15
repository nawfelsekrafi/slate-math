export const getLogDropDownMenu = () => {
  const arr = Array()
  for (var i = 1; i < 2; i++) {
    for (var j = 1; j < 5; j++) {
      arr.push({ name: i + 'x' + j, rows: i, cols: j })
    }
  }
  return arr
}
