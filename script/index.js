let swiperContainer = document.querySelector('.advertise_ct')
let swiper = new Swiper('.advertise_ct', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay: 3500,},
    centeredSlides : true,
})

let swiperContainer01 = document.querySelector('.content_01')
let swiper01 = new Swiper('.content_01', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay: 4000,},
    centeredSlides : true,
})