let images = document.getElementById('images');
let sayings = document.getElementById('sayings');
let button = document.getElementById('btn_main');

let arrayWithImages = ['./assets/svg/1.svg',
                       './assets/svg/2.svg',
                       './assets/svg/3.svg',
                       './assets/svg/4.svg',
                       './assets/svg/5.svg',
                       './assets/svg/6.svg',
                       './assets/svg/7.svg',
                       './assets/svg/8.svg',
                       './assets/svg/9.svg',
                       './assets/svg/10.svg',
                       './assets/svg/11.svg',
                       './assets/svg/12.svg',
                       './assets/svg/13.svg',
                       './assets/svg/14.svg',
                       './assets/svg/15.svg',
                       './assets/svg/16.svg',
                       './assets/svg/17.svg',
                       './assets/svg/18.svg',
                       './assets/svg/19.svg',
                       './assets/svg/20.svg',
                       './assets/svg/21.svg',
                       './assets/svg/22.svg',
                       './assets/svg/23.svg',
                       './assets/svg/24.svg',
                       './assets/svg/25.svg',
                       './assets/svg/26.svg',
                       './assets/svg/27.svg',
                       './assets/svg/28.svg',
                       './assets/svg/29.svg',
                       './assets/svg/30.svg',
                       './assets/svg/31.svg',
                       './assets/svg/32.svg',
                       './assets/svg/33.svg',
                       './assets/svg/34.svg',
                       './assets/svg/35.svg',
                       './assets/svg/36.svg',
                       './assets/svg/37.svg',
                       './assets/svg/38.svg',
                       './assets/svg/39.svg',
                       './assets/svg/40.svg',
                       './assets/svg/41.svg',
                       './assets/svg/42.svg',
                       './assets/svg/43.svg',
                       './assets/svg/44.svg',
                       './assets/svg/45.svg',
                       './assets/svg/46.svg',
                       './assets/svg/47.svg',
                       './assets/svg/48.svg',
                       './assets/svg/49.svg',
                       './assets/svg/50.svg',
                       './assets/svg/51.svg',
                       './assets/svg/52.svg',
                       './assets/svg/53.svg',
                       './assets/svg/54.svg',
                       './assets/svg/55.svg',
                       './assets/svg/56.svg',
                       './assets/svg/57.svg',
                       './assets/svg/58.svg',]

                       let audio = document.getElementById("audio");


let arrayWithSayings;

let arrayWithSayingsRu = [
    "А потом они сдали бутылки и жили долго и счастливо.",
    "Будут проблемы - пишите, будут деньги - высылайте.",
    "Без родительской помощи трудно стать тунеядцем.",
    "Благодаря телевидению дурак дурака видит издалека.",
    "Будете мимо проходить - проходите.",
    "В каждой женщине должна быть своя безуминка.",
    "Все люди такие разные, только я один такой одинаковый!",
    "Всего, чего я не достиг, я не достиг сам.",
    "Где пиво - там и Родина.",
    "Говорю, что думаю - поэтому молчу.",
    "Господи, сколько еще не сделано, а сколько еще предстоит не сделать.",
    "Две головы хорошо, но безопасный атом лучше.",
    "Долгожитель - не тот, кто долго живет, а тот, кто долго не умирает.",
    "Если вас наказали ни за что - радуйтесь: вы ни в чем не виноваты.",
    "Если глюк оказался вдруг, и не друг и не враг, а баг.",
    "Если супруги молчат, значит им есть что сказать друг другу.",
    "Если ты умнее всех - кто это поймет?",
    'Если я сказал: "Не брал", значит не отдам.',
    "Иногда приходиться прикинуться дурачком, чтобы не выглядеть идиотом.",
    "Мы привыкли быть наемниками - нас постоянно наемывают.",
    "На хорошей работе и сны хорошие видишь.",
    "Нашел свое место в жизни, а оно занято.",
    "Не бойтесь совершенства - оно вам не грозит.",
    "Не знаешь - молчи, знаешь - помалкивай!",
    "Не молчи на меня так!",
    "Не обижай слабого, если он сильнее тебя.",
    "Не понял сам - не дай понять другому.",
    "Не смотри на жизнь мрачнее, чем она на тебя!",
    "Не спеши, а то успеешь.",
    "Не торопитесь в Ад - без вас не начнут.",
    "Не хотите по-плохому, по-хорошему будет хуже.",
    "Невыносимых людей нет, есть узкие двери.",
    "Нелегка и неказиста жизнь простого программиста.",
];

let arrayWithSayingsEn = [
    "If you water it and it dies, it's a plant.",
    "Clothes make the man.",
    "Naked people have little or no influence on society.",
    "Life is ours to be spent, not saved.",
    "It is the only pleasure I have left."
];




en = document.getElementById("en");

function language() {
    if (en.innerHTML === "en") {
        sayings.innerHTML = arrayWithSayingsEn[Math.floor(Math.random() * arrayWithSayingsEn.length)];
        let audioLang = document.getElementById("audioLang");
        audioLang.play();
        en.innerHTML = "ru";
        arrayWithSayings = arrayWithSayingsEn;
    } else {
        sayings.innerHTML = arrayWithSayingsRu[Math.floor(Math.random() * arrayWithSayingsRu.length)];
        let audioLang = document.getElementById("audioLang");
        audioLang.play();
        en.innerHTML = "en";
        arrayWithSayings = arrayWithSayingsRu;
    }
}
  





function getRandomImg(arrayWithImages) {
    let randomImg =  arrayWithImages[Math.floor(Math.random() * arrayWithImages.length)]
    return images.setAttribute('src', randomImg);
}
let randomImg =  arrayWithImages[Math.floor(Math.random() * arrayWithImages.length)] 
images.setAttribute('src', randomImg);


function getRandomSaying(arrayWithSayings) {
    if (en.innerHTML === "en") {
        let randomSaying =  arrayWithSayingsRu[Math.floor(Math.random() * arrayWithSayingsRu.length)];
        audio.play();
        return sayings.innerHTML = randomSaying;
    } else if (en.innerHTML === "ru") {
        let randomSaying =  arrayWithSayingsEn[Math.floor(Math.random() * arrayWithSayingsEn.length)];
        audio.play();
        return sayings.innerHTML = randomSaying;
    }
}
let randomSaying = arrayWithSayings[Math.floor(Math.random() * arrayWithSayings.length)]
sayings.innerHTML = randomSaying;


// function play() {
//     let audio = document.getElementById("audio");
//     audio.play();
// }




