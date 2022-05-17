
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,
    delay: 0
});

ScrollReveal().reveal('.tree1', { delay: 0, origin: 'left' });
ScrollReveal().reveal('.tree3', { delay: 0, origin: 'left' });
ScrollReveal().reveal('.tree2', { delay: 0, origin: 'right' });
ScrollReveal().reveal('.tree4', { delay: 0, origin: 'right' });
ScrollReveal().reveal('.moon', { delay: 0, origin: 'bottom' });
ScrollReveal().reveal('.navbar', { delay: 0, origin: 'top' });

//----------------------------------------//


var a = 0;
function isi() {
    if (a == 0) {
        a = 1;
        var elem = document.getElementById("skill1");
        var elem2 = document.getElementById("skill2");
        var elem3 = document.getElementById("skill3");
        var width = 0;
        var width2 = 0;
        var width3 = 0;
        var id = setInterval(frame, 50);
        var id2 = setInterval(frame2, 50);
        var id3 = setInterval(frame3, 50);
        function frame() {
            if (width >= 80) {
                clearInterval(id);
                a = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
        function frame2() {
            if (width2 >= 70) {
                clearInterval(id2);
                a = 0;
            } else {
                width2++;
                elem2.style.width = width2 + "%";
                elem2.innerHTML = width2 + "%";
            }
        }
        function frame3() {
            if (width3 >= 50) {
                clearInterval(id3);
                a = 0;
            } else {
                width3++;
                elem3.style.width = width3 + "%";
                elem3.innerHTML = width3 + "%";
            }
        }
    }
}


//------------------------------------------//


var i = 0;
var j = 0;
var txt = 'I am a Web Developer';
var txt1 = 'This is My Skill';
var speed = 50;

function tulis() {
    if (i < txt.length) {
        document.getElementById("desc").innerHTML += txt.charAt(i);
        i++;
        setTimeout(tulis, speed);
    }
}
function skill() {
    if (j < txt1.length) {
        document.getElementById("skill-tls").innerHTML += txt1.charAt(j);
        j++;
        setTimeout(skill, speed);
    }
}

//--------------------------------------------//


var main=document.getElementById('audio');
function mainkan() {
    main.play();
}
function berhenti() {
    main.pause();
}

//---------------------------------------------//

let app = Vue.createApp({
    data() {
        return {
            articles: {},
            markdown: null
        }
    },
    methods: {
        getArticleData() {
            axios
                .get(
                    "https://raw.githubusercontent.com/Shznnn/tekweb2022/main/main.json"
                )
                .then((res) => {
                    this.articles = res.data;
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() {
        this.getArticleData()
    }
})
app.mount('#app');