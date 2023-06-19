function count_ht(s, N)
{
    var p = [0,0];
    if(s == 'H')
    {
        p[0] = Math.floor(N / 2.0);
        p[1] = Math.ceil(N / 2.0);
    }
     
    // Check if initially all the coins
    // are facing towards tail
    else if(s == 'T')
    {
        p[0] = Math.ceil(N / 2.0);
        p[1] = Math.floor(N / 2.0);
    }
     
    return p;
}
 
var C = 'H';
var N = 5;
 
var p = count_ht(C, N);
 
console.log( "Head = " + (p[0]) + "<br>");
console.log( "Tail = " + (p[1]) + "<br>");