const penizeText = document.getElementById('penize')
const obrazek = document.getElementById('obrazek')
const tralaleroTralala = document.getElementById('tralaleroTralala')
const bombombiniGusini = document.getElementById('bombombiniGusini')
const brrBrrPatapim = document.getElementById('brrBrrPatapim')
const trippiTroppi = document.getElementById('trippiTroppi')
const autoclicker13 = document.getElementById('autoclicker13')
const autoclicker14 = document.getElementById('autoclicker14')
const aura3x = document.getElementById('aurapoints3x')
const zastavitAutoclicker = document.getElementById('zastavitAutoclicker')

let penize = 0
obrazek.addEventListener('click', () => {
    penize += 1
    penizeText.innerHTML = `Počet aurapointů: ${penize}`
    console.log(penize)
});
tralaleroTralala.addEventListener('click', () => {
    if (penize >= 10) {
        penize -= 10
        obrazek.src = 'https://fbi.cults3d.com/uploaders/31101980/illustration-file/742d4826-51ab-47cb-87b4-0779a5b574f6/tralalero.jpg'
        penizeText.innerHTML = `Počet aurapointů: ${penize}`
    }
});
bombombiniGusini.addEventListener('click', () => {
    if (penize >= 30) {
        penize -= 30
        obrazek.src = 'https://static.wikia.nocookie.net/brainrotnew/images/e/e0/Bombombini_Gusini.png/revision/latest/scale-to-width-down/200?cb=20250325155049'
        penizeText.innerHTML = `Počet aurapointů: ${penize}`
    }
});
brrBrrPatapim.addEventListener('click', () => {
    if (penize >= 50) {
        penize -= 50
        obrazek.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoN58x5xuBbHjFCn6NcjmOONCqlVUtJbMvg&s'
        penizeText.innerHTML = `Počet aurapointů: ${penize}`
    }
});
trippiTroppi.addEventListener('click', () => {
    if (penize >= 70) {
        penize -= 70
        obrazek.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_bZvHNpgKh6x9_HWainVoOzz0nti72_aKw&s'
        penizeText.innerHTML = `Počet aurapointů: ${penize}`
    }
});
let interval13 = null;
let interval14 = null;

autoclicker13.addEventListener('click', () => {
    if (interval13 || interval14) return; 
    if (penize >= 40) {
        penize -= 40;
        interval13 = setInterval(() => {
            penize += 1;
            penizeText.innerHTML = `Počet aurapointů: ${penize}`;
        }, 333);
    }
});

autoclicker14.addEventListener('click', () => {
    if (interval13 || interval14) return; 
    if (penize >= 60) {
        penize -= 60;
        interval14 = setInterval(() => {
            penize += 1;
            penizeText.innerHTML = `Počet aurapointů: ${penize}`;
        }, 250);
    }
});

zastavitAutoclicker.addEventListener('click', () => {
    if (interval13) {
        clearInterval(interval13);
        interval13 = null;
        console.log("Autoclicker13 zastaven");
    }
    if (interval14) {
        clearInterval(interval14);
        interval14 = null;
        console.log("Autoclicker14 zastaven");
    }
});
