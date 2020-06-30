//phép cộng
function add(){
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    myform.cal.value="+";
    result=num1+num2;
    
}

//phép trừ
function sub() {
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    myform.cal.value="-";
    result = num1-num2;
    

}
//phép nhân
function mul() {
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    myform.cal.value="x";
    result = num1*num2;
    

}
//phép chia
function div() {
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    myform.cal.value=":";
    result = num1/num2;
    

}
//dấu bằng
function equal() {
    myform.result.value=result;
}
 //
 function dis(val){
     
 }



           
