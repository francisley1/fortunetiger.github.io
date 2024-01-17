function geraHorario(){
setInterval(function(){
    var gerahorario = document.getElementById('geraHorario').innerHTML;
    var soma = parseInt(gerahorario) +1;
    document.getElementById('geraHorario').innerHTML = soma;
}, -5)

//    var image = document.getElementById('img').innerHTML;

}

