const contentvue = {

    //Myskill-isi//
    my1: 'HTML',
    my2: 'CSS',
    my3: 'JavaScript',

    //artikel//
    ar1_jdl: 'Belajar HTML 1',
    ar1_pnls: 'Sukir Santoso',
    ar1_tgl:'30 oktober 2021'
}
const vm = new Vue({
    el: ".bg",
    data: contentvue
})

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


