const header = document.querySelector(".header"),
    menu_btn_open = header.querySelector(".menubtn .open"),
    menu_btn_close = header.querySelector(".menubtn .close");
[menu_btn_open, menu_btn_close].forEach((e => { e.addEventListener("click", (() => { menu_stats() })) })), header.querySelectorAll("nav ul li").forEach((e => { e.addEventListener("click", (() => { menu_stats() })) }));
let menu_stats = () => {
    [menu_btn_open, menu_btn_close, header].forEach((e => { e.classList.toggle("active") }))
};
const guestscount_container = document.querySelector(".banner .banner-content .guests .guests_count ");
let guests = 1,
    guests_count_increase = guestscount_container.querySelector(".updown .up"),
    guests_count_decrease = guestscount_container.querySelector(".updown .down");
guests_count_increase.addEventListener("click", (() => { guests >= 10 ? guests = 10 : guests += 1, guests_count_fun(guests) })), guests_count_decrease.addEventListener("click", (() => { guests <= 0 ? guests = 0 : guests -= 1, guests_count_fun(guests) }));
let guests_count_fun = e => { guestscount_container.querySelector("input").value = e },
    offercontainer = document.querySelector(".offer-container"),
    card = document.querySelectorAll(".offer-container .card");
card.forEach((e => {
    const t = e.querySelector(".open-layer"),
        n = e.querySelector(".card-footer"),
        c = n.querySelector(" .close");
    t.addEventListener("click", (() => { n.classList.add("active") })), c.addEventListener("click", (() => { n.classList.remove("active") }))
})), window.onscroll = () => { document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? header.classList.add("sticky") : header.classList.remove("sticky") }, document.querySelector(".top").addEventListener("click", (() => { document.documentElement.scrollTop = 0 }));