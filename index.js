const calculate=()=>{
    let english=document.querySelector("#English").value
    let math=document.querySelector("#Math").value
    let physics=document.querySelector("#Physics").value
    let chemistry=document.querySelector("#Chemistry").value
    let computer=document.querySelector("#Computer").value
    let grades=""


let totalgrades=parseFloat(english)+parseFloat(math)+parseFloat(physics)+parseFloat(chemistry)+parseFloat(computer)


let percentage=(totalgrades/500)*100
if(percentage>=90){
    grades="A"
}else if(percentage<=89&&percentage>=80){
    grades="B"
}
else if(percentage<=79&&percentage>=70){
    grades="C"
}else if(percentage<=69&&percentage>=60){
    grades="D"
}else{
    grades="F"
}

if((english<0||english>100)||(math<0||math>100)||(physics<0||physics>100)||(chemistry<0||chemistry>100)||(computer<0||computer>100)){
    alert("Please Enter Marks in range of 100")
}

if(english==""||math==""||physics==""||chemistry==""||computer==""){
    document.querySelector("#showgrade").innerHTML="Please Enter all Details"
}else if(english<=35||math<=35||physics<=35||chemistry<=35||computer<=35){
    grades="F"
    document.querySelector("#showtotal").innerHTML=`${totalgrades}`
    document.querySelector("#showaverage").innerHTML=`${percentage}`
    document.querySelector("#showgrade").innerHTML=`${grades}`

}else{
    document.querySelector("#showtotal").innerHTML=`${totalgrades}`
    document.querySelector("#showaverage").innerHTML=`${percentage}`
    document.querySelector("#showgrade").innerHTML=`${grades}`
}
}