const A=0 || 42
console.log(A) //42

const B=0||42
console.log(B) //0

const C=''||'h1'
console.log(C) // 'h1'

const D=''??'h1'
console.log(D) //''