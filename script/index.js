let swiperContainer = document.querySelector('.advertise_ct')
let swiper = new Swiper('.advertise_ct', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    autoplay:{delay: 3500,},
    
})

let swiperContainer01 = document.querySelector('.content_01')
let swiper01 = new Swiper('.content_01', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay:{delay: 4000,},
})

let swiperContainer02 = document.querySelector('.best_box')
let swiper02 = new Swiper('.best_box', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
})