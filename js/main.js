var btntommy = document.getElementById('tommy');
var btnbidgroup = document.getElementById('bidgroup');
var btncuker = document.getElementById('cuker');
var container = document.querySelector('.container');
var optioncontent = document.getElementById('optioncontent');


//active classi secmey ucun

document.querySelectorAll('.options .option').forEach(btn=>{
    btn.addEventListener('click', function(){
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    });
});

//---------------------------------------


var array= [
    {
        title:"Full Stack Web Developer",
        text:"A full-stack developer helps build and maintain both the front-end and the back-end of a website. Learn about full-stack developer skills, salary, and how you can become one. A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
        name:"Tommy",
        date:"December 2015 - present",
    },
    {
        title:"Vision",
        text:"Instead, we help our clients transform how they undertake capital projects. We don’t talk about merely meeting budgets and sticking to deadlines. Instead, we set much bolder targets such as completing projects in half the time and reducing costs by 10-30%. Repeatedly, we help our clients achieve goals they previously considered impossible",
        name:"BIDGROUP",
        date:"September 2010 - present",  
    },
    {
        title:"Goals",
        text:"Achieving complex and difficult goals requires focus, long-term diligence, and effort (see Goal pursuit). Success in any field requires forgoing excuses and justifications for poor performance or lack of adequate planning; in short, success requires emotional maturity. The measure of belief that people have in their ability to achieve a personal goal also affects that achievement.",
        name:"CUKER",
        date:"November 2017 - present",  
    },
]
//---------------------------------------


//butonlara click edtdikde listi gostermek ucun -

btntommy.addEventListener("click", function(){
    choseObject("Tommy");
});

btnbidgroup.addEventListener("click", function(){
    choseObject("BIDGROUP");
});

btncuker.addEventListener("click", function(){
    choseObject("CUKER");
});

//---------------------------------------



function choseObject(name){
    container.innerHTML = "";

    function objectchose(object){
        return object.name === name;
    }

    const selectedObject = array.find(objectchose);

    const mydiv = document.createElement("div");
    container.appendChild(mydiv);
    mydiv.classList.add("mydiv");

    var basliq = document.createElement("h1");
    basliq.textContent = selectedObject.title;
    mydiv.appendChild(basliq);
    basliq.classList.add("title");

    var ad = document.createElement("span");
    ad.textContent = selectedObject.name;
    mydiv.appendChild(ad);
    ad.classList.add("name");

    var date = document.createElement("span");
    date.textContent = selectedObject.date;
    mydiv.appendChild(date);
    date.classList.add("date");

    var metn = document.createElement("p");
    metn.textContent = selectedObject.text;
    mydiv.appendChild(metn);

    var btnshow = document.createElement("button");
    btnshow.classList.add("btn");
    btnshow.textContent = "more";
    mydiv.appendChild(btnshow);
}

//refresh etdikde ekranda secdiyimiz metni gosterir

window.addEventListener('load', function(){
    btntommy.click();
});

//----------------------------------

















