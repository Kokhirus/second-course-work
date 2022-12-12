let questions = [
    {
        id: 1,
        question: "Большую ли роль для вас играет сопротивление при нажатии на клавишу?",
        options: [
            "Хочется, чтобы нажатие было плавным",
            "Мне нравится, когда при нажатии ты ощущаешь момент срабатывания клавиши, как у мембранных клавиатур",
            "Нравится ощущение работы на печатной машинке",
        ]   
    },
    {
        id: 2,
        question: "Не хотите ли вы шуметь при печати и печатать очень лёгкими нажатиями?",
        options: [
            "Так точно",
            "Я бы предпочёл не шуметь, но всё же печатать с большим вниманием на нажатия",
            "Мне некого отвлекать и я бы предпочёл чувствовать нажатия на клавиатуру",
        ]
      },
      {
        id: 3,
        question: "Что бы вы предпочли при игре за клавиатурой: скорость и лёгкость нажатия или точность и звуковую отдачу?",
        options: [
            "Скорость и лёгкость",
            "Только точность при нажатии",
            "Точность и звуковую отдачу",
        ]
      },
      {
        question: "Что бы вы предпочли при игре за клавиатурой: скорость и лёгкость нажатия или точность и звуковую отдачу?",
        options: [
            "Скорость и лёгкость",
            "Только точность при нажатии",
            "Точность и звуковую отдачу",
        ]
      },
      {
        question: "Уставали ли вы при работе на мембранных клавиатурах в течение длительного времени?",
        options: [
            "Да, постоянно",
            "Нет, мне приходились мембранные товарищи по нраву, но не хватало тактильной отзывчивости",
            "Нет, но в мембранных клавиатурах не хватало тактильной и звуковой отзывчивости",
        ]
      },
];


points_r = 0;
points_br = 0;
points_bl = 0;

let question_count = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li id="1" class="option">${first}</li>
    <li id="2" class="option">${second}</li>
    <li id="3" class="option">${third}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "test-result.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").id;
    var x = Number(user_answer);

    switch(x) {
        case 1:
            points_r+=1;
            sessionStorage.setItem("points_r",points_r);
            console.log(points_r);
            break;
        case 2:
            points_br+=1;
            sessionStorage.setItem("points_br",points_br);
            console.log(points_br);
            break;
        case 3:
            points_bl+=1;
            sessionStorage.setItem("points_bl",points_bl);
            console.log(points_bl);
            break;
        default:
            break;
    }
    question_count+=1;
    show(question_count);
}

function goback() {
    sessionStorage.setItem("points_r",0);
    sessionStorage.setItem("points_br",0);    
    sessionStorage.setItem("points_bl",0);
}