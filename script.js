let animation = bodymovin.loadAnimation({
    container: document.querySelector('.chat-anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/chat.json' // lottie file path
  })


let animation2 = bodymovin.loadAnimation({
    container: document.querySelector('.message-anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/ios.json' // lottie file path
  })

let animation3 = bodymovin.loadAnimation({
    container: document.querySelector('.map-anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/map.json' // lottie file path
  })

let animation4 = bodymovin.loadAnimation({
    container: document.querySelector('.car-anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/car.json' // lottie file path
  })

let animation5 = bodymovin.loadAnimation({
    container: document.querySelector('.delivery-anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/delivery.json' // lottie file path
  })



  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.mobile-nav');

function myFunction(){
    console.log('clicked');
    mobileNav.style.display='flex';
}

function myFunc2(){
    console.log('closed')
    mobileNav.style.display='none'
}

function openWidget() {
    FreshworksWidget('open');
    }


