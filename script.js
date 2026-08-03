const units = {

length:{
items:{
"متر":1,
"سانتی‌متر":0.01,
"کیلومتر":1000
},
text:"هر 100 سانتی‌متر برابر با 1 متر است."
},


weight:{
items:{
"گرم":1,
"کیلوگرم":1000,
"تن":1000000
},
text:"هر 1000 گرم برابر با 1 کیلوگرم است."
},


volume:{
items:{
"میلی‌لیتر":1,
"لیتر":1000
},
text:"هر 1000 میلی‌لیتر برابر با 1 لیتر است."
},


time:{
items:{
"ثانیه":1,
"دقیقه":60,
"ساعت":3600
},
text:"هر 60 ثانیه برابر با 1 دقیقه است."
},


temperature:{
items:{
"سلسیوس":"c",
"فارنهایت":"f"
},
text:"برای تبدیل دما از فرمول مخصوص استفاده می‌کنیم."
}

};




function changeUnits(){

let category=document.getElementById("category").value;


let from=document.getElementById("from");

let to=document.getElementById("to");


from.innerHTML="";

to.innerHTML="";


for(let item in units[category].items){

from.innerHTML+=`<option>${item}</option>`;

to.innerHTML+=`<option>${item}</option>`;

}

}




function convert(){


let category=document.getElementById("category").value;


let value=Number(document.getElementById("number").value);


let from=document.getElementById("from").value;


let to=document.getElementById("to").value;



if(!value){

answer.innerHTML="⚠️ عدد وارد کنید";

return;

}



let result;



if(category==="temperature"){


if(from==="سلسیوس" && to==="فارنهایت")

result=value*9/5+32;


else if(from==="فارنهایت" && to==="سلسیوس")

result=(value-32)*5/9;


else

result=value;


}



else{


result=value*

units[category].items[from] /

units[category].items[to];

}



answer.innerHTML=
"✅ نتیجه: "+
result.toFixed(2)+" "+to;


learn.innerHTML=
"💡 یاد بگیر: "+
units[category].text;


}





function clearAll(){

number.value="";

answer.innerHTML="نتیجه";

learn.innerHTML="💡 نکته آموزشی اینجا نمایش داده می‌شود";

}




function darkMode(){

document.body.classList.toggle("dark");


let btn=document.querySelector(".dark-btn");


if(document.body.classList.contains("dark"))

btn.innerHTML="☀️ حالت روشن";

else

btn.innerHTML="🌙 حالت تاریک";

}




changeUnits();





// فعال کردن PWA

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}