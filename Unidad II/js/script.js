function saludo(){
    window.alert('Hola!')
}
function cambio(nro){
    if(revisaPar(nro)){
        window.alert('Hola, el '+nro+' es par')
    }
    else{
        window.alert('Hola, el '+nro+' es impar')
    }
}

function revisaPar(nro){
    if (nro % 2 == 0){
        return true
    }
    else{
        return false
    }
}
function pulsar(){
    window.alert('Evento onClick')
}

function foco(){
    window.alert('Evento onFocus')
}

function tecla(){
    window.alert('Evento onKeyPress')
}

function calculadora(){
    var op1= parseFloat(document.getElementById('caja1').value)
    var op2= parseFloat(document.getElementById('caja2').value)
    var opc = document.getElementsByName('opcion')

    for (let i = 0; i < opc.length; i++) {
        if(opc[i].checked == true){
            switch (opc[i].value) {
                case 'sum':
                    var resultado
                    resultado = op1 + op2
                    window.alert(resultado)
                    break;
                case 'dif':
                    var resultado
                    resultado = op1 - op2
                    window.alert(resultado)
                    break;
                case 'mult':
                    var resultado
                    resultado = op1 * op2
                    window.alert(resultado)
                    break;
                case 'divi':
                    var resultado
                    resultado = op1 / op2
                    window.alert(resultado)
                    break;
                case 'modu':
                    var resultado
                    resultado = op1 % op2
                    window.alert(resultado)
                    break;
                case 'entera':
                    var resultado
                    resultado = (Math.floor(op1 / op2))
                    window.alert(resultado)
                    break;

                default:
                    break;
            }

        }
        
    }
}