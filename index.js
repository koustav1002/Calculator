let res=document.getElementById("inputtxt");

function calc(num){
    res.value+=num;
}

function result(){
    console.log(1);
    try{
        res.value=eval(res.value);
    }catch{
        alert("Invalid!");
        // res.value="Invalid!!";
    }
}

function clr(){
    res.value="";
}

function del(){
    console.log(2);
    res.value=res.value.slice(0,-1);
}