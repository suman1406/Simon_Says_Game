    let gameseq = [];
    let userseq = [];
    let btns = ["yellow", "red", "purple", "green"];

    let started = false;
    let level = 0;

    let h2 = document.querySelector("h2");

    document.addEventListener("keypress", function () {
        if (started == false) {
            started = true;
            levelup();
        }
    });

    function gameFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");
        }, 150);
    }

    function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function () {
            btn.classList.remove("userflash");
        }, 150);
    }

    function levelup() {
        userseq = [];
        level++;
        h2.innerText = `Level ${level}`;
        let random = Math.floor(Math.random() * 4);
        let randcolor = btns[random];
        let randbtn = document.querySelector(`.${randcolor}`);
        gameseq.push(randcolor);
        gameFlash(randbtn);
    }

    function checkAns(indx) {
        console.log("curr level : ", level);

        if (userseq[indx] === gameseq[indx]) {
            if (userseq.length === gameseq.length) {
                setTimeout(levelup, 1000);
            }
        } else {
            h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = "white";
            }, 100);
            reset();
        }
    }

    function btnPress() {
        let btn = this;
        userFlash(btn);
        usercolor = btn.getAttribute("id");
        userseq.push(usercolor);
        checkAns(userseq.length - 1);

    }

    let allbtns = document.querySelectorAll(".btn")
    for (btn of allbtns) {
        btn.addEventListener("click", btnPress);
    }

    function reset() {
        started = false;
        gameseq = [];
        userseq = [];
        level = 0;

    }
