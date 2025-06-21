function cargarselect(){
    var year = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]
    var select = document.getElementsByName('meses')[0];
    for (obj in year) {
        var opt = document.createElement('option')
        opt.text = year[obj]
        opt.value = year[obj]
        select.add(opt)
            
    }
}


function cambio(){
    //Debe escribir el contenido del elemento seleccionado en el select meses
    //Escribir en la caja de texto Mostrar y en el select Month
}