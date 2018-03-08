var counter = 0;
var total = 0;

/*function total() {
    for (var i = 0; i < 2; i++) {
        var q = document.getElementById("Q"+i).innerHTML;
        var p = document.getElementById("P"+i).innerHTML;
        total = parseInt(q) * parseInt(p)
    }
    document.getElementById("TotalV").innerHTML = total;
}*/

function plusQ(x){
    var oldValue = document.getElementById("Q"+x).innerHTML;
    var value = parseInt(oldValue) + 1;
    document.getElementById("Q"+x).innerHTML = value;

    var total = document.getElementById("TotalV").innerHTML;
    var p = document.getElementById("P"+x).innerHTML;
    console.log(document.getElementById("P"+x).innerHTML);
    total = parseFloat(document.getElementById("TotalV").innerHTML.replace(/,/, '.')) + parseFloat(p.replace(/,/, '.'));
    console.log(document.getElementById("TotalV").innerHTML);
    console.log(total);
    document.getElementById("TotalV").innerHTML = total.toFixed(2) + ' €';
}

function minusQ(x){
    var oldValue = document.getElementById("Q"+x).innerHTML;
    if(parseInt(oldValue) > 1) {
        var value = parseInt(oldValue) - 1;
    }
    else{
        value = 0;
    }
    document.getElementById("Q"+x).innerHTML = value;
    var total = document.getElementById("TotalV").innerHTML;
    var p = document.getElementById("P"+x).innerHTML;
    if(parseFloat(document.getElementById("TotalV").innerHTML.replace(/,/, '.')) - parseFloat(p.replace(/,/, '.')) > 0){
        total = parseFloat(document.getElementById("TotalV").innerHTML.replace(/,/, '.')) - parseFloat(p.replace(/,/, '.'));
    }
    else{
        total = 0
    }
    document.getElementById("TotalV").innerHTML = total.toFixed(2) + ' €';
}

