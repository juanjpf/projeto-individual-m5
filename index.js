const prompt = require('prompt-sync')()
const css=[]
let resp='css'
while(resp!='SAIR'){
    resp = prompt('Digite uma Propriedade CSS: ').toUpperCase()
    if(resp!='SAIR'){
    css.sort()
    css.push(resp)
    }}
console.log(`Propriedade CSS: ${css}`)