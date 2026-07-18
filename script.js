// ==========================================
// PASSCODES
// ==========================================

const sisterPass = "CHIKUUU";
const bestiePass = "UNDERWORLD!!";

let currentUser = "";


// ==========================================
// SISTER DATA
// ==========================================

const sister = {

    name: "🎉 Happy Birthday Chikkuuuu ❤️",

    intro:
    "👑 Access Granted! Welcome Birthday Princess ❤️ Today is ALL about YOU!",

    letter:
    "Happy Birthday, Chikkuuuu! ❤️ Watching you grow up has been one of the greatest joys of my life. You'll always be my little baby no matter how old you get. I pray that Waheguru always protects you, keeps you healthy, happy and successful, and helps you achieve every dream you have. Thank you for being the best little sister anyone could ask for. Dada will always be by your side. I LOVE YOU ENDLESSLY. ❤️🥹",

    gifts:[

        {
            title:"🎁 Gift One ❤️",
            image:"images/sister1.jpeg",
            message:"Chikkuuuu, my little baby! ❤️ I wish you the happiest birthday ever. Keep smiling the way you always do because your smile lights up everyone's world. Dada loves you soooo much! 🥹❤️"
        },

        {
            title:"📸 Gift Two 💕",
            image:"images/sister2.jpeg",
            message:"Dada is always here for you—as your best friend, your elder sister, and your biggest supporter whenever you need me. ❤️ Keep following your heart, become really successful, and always stay happy and fulfilled in whatever you choose to do in life."
        },

        {
            title:"🎂 Gift Three 🎈",
            image:"images/sister3.jpeg",
            message:"Dada promises to bring you loads and loads of gifts once she's done paying all her uni fees 😂❤️. I pray to Waheguru for your good health, endless happiness, success, and a beautiful future. DADA LOVES YOU MORE THAN WORDS CAN EVER SAY! ❤️🥹"
        }

    ]

};


// ==========================================
// BEST FRIEND DATA
// ==========================================

const bestie = {

    name:"🎉 Happy 20th Birthday MERI JAAN 💜",

    intro:
    "💜 Best Friend Detected... Loading years of chaos... ██████████ 100% 😂",

    letter:
    "Happy 20th Birthday, my favourite human. 💜 Thank you for every laugh, every random conversation, every memory, and every moment we've shared. Thank you for making uni one of the best parts of my life. I honestly don't know what I would've done without you. I hope this year brings you all the happiness, success, love, and opportunities you deserve. Never forget how amazing, kind and beautiful you are. I LOVE YOU FOREVER. ❤️",

    gifts:[

        {
            title:"🎁 Gift One ❤️",
            image:"images/bestie1.jpeg",
            message:"Thank you for being such an amazing human being. ❤️ Thank you for just existing! Thank you for always making me laugh when I needed it the most. Life is genuinely better because you're in it.People say, You're my world. But clearly they haven't discovered the underworld... because that's where I found you. ❤️😌 I LOVEEE YOU! 🥹💜"
        },

        {
            title:"📸 Gift Two 💜",
            image:"images/bestie2.jpeg",
            message:"Thank you for creating memories that I'll cherish forever. Uni would've been so unbearable without you. You deserve the absolute best always, and I hope you get endless success, happiness, and everything you've ever wished for. I LOVEEE YOU MY UNDERWORLD! 😂❤️"
        },

        {
            title:"🎂 Gift Three ✨",
            image:"images/bestie3.jpeg",
            message:"FINALLYYY turning 20!! 🥳 Now I can finally get you onto all the fictional books I read 😂.Every fantasy book has a powerful Underworld Queen... turns out I already knew mine. I pray tujhe Manas mil jaaye iss saal 🤭... ek talking stage toh ho teri! Aur agar Manas nahi mila, then I hope you find someone who cherishes the ground you walk on and treats you exactly the way you deserve. ❤️ And remember, I'll always be here—your best friend first, and your elder sister whenever I need to switch roles. I LOVE YOU SO MUCH. 💜"
        }

    ]

};


// ==========================================
// PAGE SWITCHER
// ==========================================

function showPage(id){

    document.querySelectorAll(".page").forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}


// ==========================================
// LOGIN
// ==========================================

function checkPasscode(){

    const pass = document.getElementById("passcode").value;

    if(pass === sisterPass){

        currentUser = sister;

        document.body.className = "red";

    }

    else if(pass === bestiePass){

        currentUser = bestie;

        document.body.className = "purple";

    }

    else{

        document.getElementById("error").innerHTML =
        "🚨 Intruder Detected! Nice try 😂 Only birthday legends can enter.";

        return;

    }

    confetti({

        particleCount:200,
        spread:100

    });

    document.getElementById("welcomeTitle").innerHTML = currentUser.name;

    document.getElementById("welcomeText").innerHTML = currentUser.intro;

    showPage("welcomePage");

}


// ==========================================
// SHOW CAKE
// ==========================================

function showCake(){

    showPage("cakePage");

}
// ==========================================
// BLOW OUT THE CANDLES
// ==========================================

function blowCandles(){

    // Change cake image
    document.getElementById("cakeImage").src = "images/cake-off.png";

    // Confetti 🎉
    confetti({
        particleCount:250,
        spread:120,
        origin:{y:0.6}
    });

    // Wait then move to gifts
    setTimeout(function(){

        showPage("giftPage");

    },1800);

}



// ==========================================
// GIFTS
// ==========================================

let opened = [];

function openGift(number){

    // Don't count the same gift twice
    if(!opened.includes(number)){
        opened.push(number);
    }

    const gift = currentUser.gifts[number-1];

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popupImage").src = gift.image;

    document.getElementById("popupTitle").innerHTML = gift.title;

    document.getElementById("popupMessage").innerHTML = gift.message;

}



// ==========================================
// CLOSE GIFT
// ==========================================

function closePopup(){

    document.getElementById("popup").style.display = "none";

    // After opening all 3 gifts
    if(opened.length === 3){

        document.getElementById("finalLetter").innerHTML =
        currentUser.letter;

        showPage("letterPage");

    }

}



// ==========================================
// FINAL CELEBRATION
// ==========================================

function celebrate(){

    // BIG Confetti 🎉

    confetti({

        particleCount:300,

        spread:180,

        origin:{x:0.5,y:0.6}

    });

    setTimeout(function(){

        confetti({

            particleCount:200,

            angle:60,

            spread:90,

            origin:{x:0}

        });

        confetti({

            particleCount:200,

            angle:120,

            spread:90,

            origin:{x:1}

        });

    },400);

    setTimeout(function(){

        alert("❤️ Thank you for going through this little surprise. I hope your birthday is as amazing as you are! ❤️");

    },900);

}