let body = document.querySelector("body");
let cross = document.querySelector(".cross");
// фронтальный погрузчик
let fpWrapper = document.querySelector(".frontpogr-describe_wrapper");
let frontpogrImg = document.querySelector(".frontpogr-img");
let frontpogrText = document.querySelector(".frontpogr .text");
// телескопический погрузчик
let tpWrapper = document.querySelector(".telepogr-describe_wrapper");
let telepogrImg = document.querySelector(".telepogr-img");
let telepogrText = document.querySelector(".telepogr .text");
// бульдозер
let buldozerWrapper = document.querySelector(".buldozer-describe_wrapper");
let buldozerImg = document.querySelector('.buldozer-img');
let buldozerText = document.querySelector('.buldozer .text');
// экскаватор-погрузчик
let expoWrapper = document.querySelector('.expo-describe_wrapper');
let expoImg = document.querySelector('.expo-img');
let expoText = document.querySelector('.expo .text');
// экскаватор
let excavatorWrapper = document.querySelector('.excavator-describe_wrapper');
let excavatorImg = document.querySelector('.excavator-img');
let excavatorText = document.querySelector('.excavator .text');
// каток
let katokWrapper = document.querySelector('.katok-describe_wrapper');
let katokImg = document.querySelector('.katok-img');
let katokText = document.querySelector('.katok .text');
// самосвал
let samosvalWrapper = document.querySelector('.samosval-describe_wrapper');
let samosvalImg = document.querySelector('.samosval-img');
let samosvalText = document.querySelector('.samosval .text');
// длинномер
let dlinomerWrapper = document.querySelector('.dlinomer-describe_wrapper');
let dlinomerImg = document.querySelector('.dlinomer-img');
let dlinomerText = document.querySelector('.dlinomer .text');
// фреза
let frezaWrapper = document.querySelector('.freza-describe_wrapper');
let frezaImg = document.querySelector('.freza-img');
let frezaText = document.querySelector('.freza .text');
// манипулятор
let manipulatorWrapper = document.querySelector('.manipulator-describe_wrapper');
let manipulatorImg = document.querySelector('.manipulator-img');
let manipulatorText = document.querySelector('.manipulator .text');
// автокран
let avtokranWrapper = document.querySelector('.avtokran-describe_wrapper');
let avtokranImg = document.querySelector('.avtokran-img');
let avtokranText = document.querySelector('.avtokran .text');
// гидромолот
let molotWrapper = document.querySelector('.molot-describe_wrapper');
let molotImg = document.querySelector('.molot-img');
let molotText = document.querySelector('.molot .text');

function bodyStyleShow() {
    body.style.overflowY = 'hidden';
    body.style.marginRight = '4px';
    cross.style.display = 'block';
}

function bodyStyleHide() {
    body.style.overflowY = 'auto';
    body.style.marginRight = '0px';
    cross.style.display = 'none';
}

cross.addEventListener('click', function () {
    fpWrapper.style.display = 'none';
    tpWrapper.style.display = 'none';
    buldozerWrapper.style.display = 'none';
    expoWrapper.style.display = 'none';
    excavatorWrapper.style.display = 'none';
    katokWrapper.style.display = 'none';
    samosvalWrapper.style.display = 'none';
    dlinomerWrapper.style.display = 'none';
    frezaWrapper.style.display = 'none';
    manipulatorWrapper.style.display = 'none';
    avtokranWrapper.style.display = 'none';
    molotWrapper.style.display = 'none';
    bodyStyleHide();
});

// фронтальный погрузчик

frontpogrImg.addEventListener("click", function () {
    fpWrapper.style.display = 'block';
    bodyStyleShow();
});

frontpogrText.addEventListener('click', function () {
    fpWrapper.style.display = 'block';
    bodyStyleShow();
});

// телескопический погрузчик

telepogrImg.addEventListener('click', function () {
    tpWrapper.style.display = 'block';
    bodyStyleShow();
});

telepogrText.addEventListener('click', function () {
    tpWrapper.style.display = 'block';
    bodyStyleShow();
});

// бульдозер

buldozerImg.addEventListener('click', function () {
    buldozerWrapper.style.display = 'block';
    bodyStyleShow();
});

buldozerText.addEventListener('click', function () {
    buldozerWrapper.style.display = 'block';
    bodyStyleShow();
});

// экскаватор-погрузчик

expoImg.addEventListener('click', function () {
    expoWrapper.style.display = 'block';
    bodyStyleShow();
});

expoText.addEventListener('click', function () {
    expoWrapper.style.display = 'block';
    bodyStyleShow();
});

// экскаватор

excavatorImg.addEventListener('click', function () {
    excavatorWrapper.style.display = 'block';
    bodyStyleShow();
});

excavatorText.addEventListener('click', function () {
    excavatorWrapper.style.display = 'block';
    bodyStyleShow();
});

// каток

katokImg.addEventListener('click', function () {
    katokWrapper.style.display = 'block';
    bodyStyleShow();
});

katokText.addEventListener('click', function () {
    katokWrapper.style.display = 'block';
    bodyStyleShow();
});

// самосвал

samosvalImg.addEventListener('click', function () {
    samosvalWrapper.style.display = 'block';
    bodyStyleShow();
});

samosvalText.addEventListener('click', function () {
    samosvalWrapper.style.display = 'block';
    bodyStyleShow();
});

// длинномер

dlinomerImg.addEventListener('click', function () {
    dlinomerWrapper.style.display = 'block';
    bodyStyleShow();
});

dlinomerText.addEventListener('click', function () {
    dlinomerWrapper.style.display = 'block';
    bodyStyleShow();
});

// фреза

frezaImg.addEventListener('click', function () {
    frezaWrapper.style.display = 'block';
    bodyStyleShow();
});

frezaText.addEventListener('click', function () {
    frezaWrapper.style.display = 'block';
    bodyStyleShow();
});

// манипулятор

manipulatorImg.addEventListener('click', function () {
    manipulatorWrapper.style.display = 'block';
    bodyStyleShow();
});

manipulatorText.addEventListener('click', function () {
    manipulatorWrapper.style.display = 'block';
    bodyStyleShow();
});

// автокран

avtokranImg.addEventListener('click', function () {
    avtokranWrapper.style.display = 'block';
    bodyStyleShow();
});

avtokranText.addEventListener('click', function () {
    avtokranWrapper.style.display = 'block';
    bodyStyleShow();
});

// гидромолот

molotImg.addEventListener('click', function () {
    molotWrapper.style.display = 'block';
    bodyStyleShow();
});

molotText.addEventListener('click', function () {
    molotWrapper.style.display = 'block';
    bodyStyleShow();
});