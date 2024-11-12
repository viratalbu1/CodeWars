function filterString(value) {
  return value.split('').filter(item => !isNaN(item)).join('')
}


console.log(!!Number('0'))
console.log(filterString('wl3cez01'))
