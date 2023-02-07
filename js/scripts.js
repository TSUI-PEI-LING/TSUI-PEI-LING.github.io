//解析json
let data;
function getData() {
    const xhr = new XMLHttpRequest;
    xhr.open('get','https://raw.githubusercontent.com/ShanksSU/ESP32__to_PHP_MySql/main/test.json')
    xhr.send(null);
    xhr.onload = function(){
        data = JSON.parse(xhr.responseText).features;
        console.log(data);
        chapter0();
        chapter1();
        chapter2();
        chapter3();
        chapter4();
        chapter5();
        chapter7();
    }

    xhr.onerror = function () {
        console.error(new Error(`連結失敗${xhr.status}`))
    }
}

getData();


//輸出chapter0內容
function chapter0(){
    let str = '';
    document.querySelector('.chapter0').innerHTML = null;
    const name = data.chapter0.name;
    const phone = data.chapter0.phone;
    const email = data.chapter0.email;
    const work_experience = data.chapter0.work_experience;
    str+=`  
            <div class="resume-section-content">
                <h1 class="mb-0">
                    ${name}
                    <span class="text-primary">教師</span>
                </h1>
                        
                <div class="subheading mb-5">
                    <div class="phone_email">${phone}</div>
                        <a href="mailto:${email}">${email}</a>
                </div>

                <p class="lead mb-5">
                    <h4>`
                        for(i=0;i<work_experience.length;i++){
                            str+=`${work_experience[i]}<br>`;
                        }
                    str+=`</h4>
                </p>
            </div>`;

    document.querySelector('.chapter0').innerHTML = str;
}

function chapter1(){
    let str = '';
    document.querySelector('.chapter1').innerHTML = null;
    const title = data.chapter1.title;
    const award = data.chapter1.award;
    str+=`<h2 class="mb-5">${title}</h2>
            <h3>
            <ul class="fa-ul mb-0">`;
            for(i=0;i<award.length;i++){
                str+=`<li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            ${award[i]}
                        </li>`;
            }
    str+=`</ul></h3>`;
    // console.log(str);
    document.querySelector('.chapter1').innerHTML = str;
}


function chapter2(){
    let str = '';
    document.querySelector('.chapter2').innerHTML = null;
    const title = data.chapter2.title;
    const award = data.chapter2.award;
    str+=`<h2 class="mb-5">${title}</h2>
            <h3>
            <ul class="fa-ul mb-0">`;
            for(i=0;i<award.length;i++){
                str+=`<li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            ${award[i]}
                        </li>`;
            }
    str+=`</ul></h3>`;
    // console.log(str);
    document.querySelector('.chapter2').innerHTML = str;
}

function chapter3(){
    let str = '';
    document.querySelector('.chapter3').innerHTML = null;
    const title = data.chapter3.title;
    const education = data.chapter3.education;
    str+=`<h2 class="mb-5">${title}</h2>`;
            for(i=0;i<education.length;i++){
                str+=`
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">${education[i]}</h3>
                            <div class="subheading mb-3"></div>
                            <p></p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">時間</span></div>
                    </div>`;
            }
    // console.log(str);
    document.querySelector('.chapter3').innerHTML = str;
}

function chapter4(){
    let str = '';
    document.querySelector('.chapter4').innerHTML = null;
    const title = data.chapter4.title;
    const skills = data.chapter4.skills;
    str+=`<h2 class="mb-5">${title}</h2>
            <h3>
            <ul class="fa-ul mb-0">`;
            for(i=0;i<skills.length;i++){
                str+=`<li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        ${skills[i]}
                    </li>`;
            }
    str+=`</ul></h3>`;
    // console.log(str);
    document.querySelector('.chapter4').innerHTML = str;
}

function chapter5(){
    let str = '';
    document.querySelector('.chapter5').innerHTML = null;
    const title = data.chapter5.title;
    const license = data.chapter5.license;
    str+=`<h2 class="mb-5">${title}</h2>
            <h3>
            <ul class="fa-ul mb-0">`;
            for(i=0;i<license.length;i++){
                str+=`<li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        ${license[i]}
                    </li>`;
            }
    str+=`</ul></h3>`;
    // console.log(str);
    document.querySelector('.chapter5').innerHTML = str;
}

function chapter7(){
    let str = '';
    document.querySelector('.chapter7').innerHTML = null;
    const title = data.chapter7.title;
    const activity = data.chapter7.activity;
    str+=`<h2 class="mb-5">${title}</h2>
            <h4>`;
            for(i=0;i<activity.length;i++){
                str+=`<p>
                        ${activity[i]}
                    </p>`;
            }
    str+=`</h4>`;
    // console.log(str);
    document.querySelector('.chapter7').innerHTML = str;
}