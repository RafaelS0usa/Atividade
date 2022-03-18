const {produtos} = require('../model/dados')

exports.contas=() => {
    var valorTotal = 0
    for(var i = 0; i < produtos.length; i++){
        
        valorTotal += produtos[i].Qtd * produtos[i].valor
        
        // utilizando interpolação⭐️
        console.log(`ID: ${produtos[i].id} - ${produtos[i].nome} = ${produtos[i].valor}`)
    
    }
    return valorTotal
}

exports.alertas=() => {
    if(produtos == 'Recipiente de Alcool em Gel' || 'Kit de Máscaras descartaveis'){
        console.log('Parabens, OMS está orgulhosa!!!')
    } else{
        console.log('ALERTA: FICA LIGADX EM!')
    }
}
/*exports.mostraTela =() => {
    console.log()
}*/