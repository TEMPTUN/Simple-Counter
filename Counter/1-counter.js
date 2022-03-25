let sea=document.getElementById("swn");
let con=document.getElementById("count");
let count=0;
function r(){
     count+=1;
     con.innerText=count;
}
function q(){
    if(count<=0){
        count=1;
        alert("NO NEGATIVE PEOPLE");
    }
    count-=1;
    con.innerText=count;
}
function save(){
    let pane=count+" - ";
    sea.textContent+=pane;
    con.innerText=0;
    count=0;
}
/* recap of first javascript app
use of script src---script tag
learned variables ,numbers, strings operations
use of console.log to correct errors
use of functions,onclick (function name)
use of dom concept to connect the code of js to id by html---dom concept
by use of get elementbyid()
then use of textcontent then innertext
*/
