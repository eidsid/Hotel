const header = document.querySelector('.header'),
    menu_btn_open = header.querySelector('.menubtn .open'),
    menu_btn_close = header.querySelector('.menubtn .close');


[menu_btn_open, menu_btn_close].forEach(el => {
    el.addEventListener('click', () => {
        menu_stats();
    });
})

header.querySelectorAll('nav ul li').forEach((el) => {
    el.addEventListener('click', () => {
        menu_stats();
    })
})

let menu_stats = () => {
    [menu_btn_open, menu_btn_close, header].forEach(el => {
        el.classList.toggle('active');
    })

}

const guestscount_container = document.querySelector('.banner .banner-content .guests .guests_count ');

let guests = 1;
let guests_count_increase = guestscount_container.querySelector('.updown .up');
let guests_count_decrease = guestscount_container.querySelector('.updown .down');

guests_count_increase.addEventListener('click', () => {

    if (guests >= 10) {
        guests = 10;
    } else { guests += 1; }
    guests_count_fun(guests);

})
guests_count_decrease.addEventListener('click', () => {

    if (guests <= 0) {
        guests = 0;

    } else { guests -= 1; }
    guests_count_fun(guests);

})

let guests_count_fun = (guests) => {
    guestscount_container.querySelector('input').value = guests;
}


let offercontainer = document.querySelector('.offer-container'),
    card = document.querySelectorAll('.offer-container .card');


card.forEach(el => {
    const card_open = el.querySelector('.open-layer'),
        card_footer = el.querySelector('.card-footer'),
        card_close = card_footer.querySelector(' .close');

    card_open.addEventListener('click', () => {
        card_footer.classList.add('active');
    })

    card_close.addEventListener('click', () => {
        card_footer.classList.remove('active');
    })
})

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');

    }
}
document.querySelector('.top').addEventListener('click', () => {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

})