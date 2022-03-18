const moment = require("moment")
const {contas} = require('../lib/funcoes')
const { produtos } = require("../model/dados")
const {alertas} = require('../lib/funcoes')
var data = moment().format('DD/MM/YYYY, hh:mm')

exports.geral =() => { 
console.log(`-------- SM Stationary Store ---- ${data} ----`)
console.log(`--------> produtos <--------`)

console.log(`---------- total: ${contas()} ----------`)
console.log('           VOLTE SEMPRE S2')

alertas()
}