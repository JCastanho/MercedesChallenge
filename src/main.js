var counter = 0;
var total = 0;

function plusQ(x){
    var oldValue = document.getElementById("Q"+x).innerHTML;
    var value = parseInt(oldValue) + 1;
    document.getElementById("Q"+x).innerHTML = value;

    var total = document.getElementById("TotalV").innerHTML;
    var p = document.getElementById("P"+x).innerHTML;
    total = parseFloat(document.getElementById("TotalV").innerHTML.replace(/,/, '.')) + parseFloat(p.replace(/,/, '.'));
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

function next(){
    if(counter == 1){
        document.getElementById("Next").style.display = "none";
    }
    counter += 1;
    document.getElementById("Prev").style.display = "block";
}

function prev(){
    document.getElementById("Prev").style.display = "none";
    counter = 0;
    document.getElementById("Next").style.display = "block";
}


