var func = new Function("x","y","return x*y;");
function secondFunction(){
    var result;
    result = func(10,20);
    document.write(result);
}