// BIDDING DATA
let total=10000;
let base=document.getElementById('bb');
basebid=parseInt(base.innerHTML);
let cal=0.2*total;
console.log(cal);
document.getElementById('bb').innerHTML=(cal);
let current=document.getElementById('cb');
current.innerHTML=2000;
currentbid=parseInt(current.innerHTML);



// TIME AND COUNTDOWN TIMER
let interval1=setInterval(distime, 1000);

function distime(){
let tm=document.getElementById('time');
let d=new Date();
let H=d.getHours();
let M=d.getMinutes();
let S=d.getSeconds();
tm.innerHTML=(H+":"+M+":"+S);}

let interval= setInterval(count, 1000);

function count(){
let cd=document.getElementById('countd');
if(parseInt(cd.innerHTML)==0){
    document.getElementById('container').innerHTML="BiddingDone(TimeUp)";
    document.getElementById('container').style.fontSize="4rem";
    document.getElementById('container').style.textAlign="center";
    clearInterval(interval);
    clearInterval(interval1);

}
else{
cd.innerHTML=(parseInt(cd.innerHTML)-1);
}}

console.log("hello");

// USER SIDE BIDDING DATA

let b=document.getElementById("userbid");
b.innerHTML=currentbid;
function add(id) {
    let a=id;
    let c=parseInt(b.innerHTML);
    b.innerHTML=(c + a*100);
}

function clr() {
    let b=document.getElementById("userbid");
    b.innerHTML=currentbid;
}

function submittoserver() {
    let cub=document.getElementById("userbid");
    cub=parseInt(cub.innerHTML);
    
}