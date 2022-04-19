export const getIntegralDropDownMenu = () => {
  const arr = Array()
  for (var i = 1; i < 3; i++) {
    for (var j = 1; j < 7; j++) {
      arr.push({ name: i + 'x' + j, rows: i, cols: j })
    }
  }
  return arr
}