const menuBtn = document.querySelector('.menu-btn');
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const menuMobile = document.querySelector(".mobile-menu");
const fade = document.querySelector(".mobile-fade");


mobileNavButton.addEventListener("click", () => {
    menuMobile.classList.toggle('menu--open');
    // menuBtn.classList.toggle('menu-btn--active');
    mobileNavIcon.classList.toggle("active");
    fade.classList.toggle("mobile-fade--open");
});

fade.onclick = function () {
    fade.classList.toggle("mobile-fade--open");
    mobileNavIcon.classList.toggle("active");
    menuMobile.classList.toggle("menu--open");
    // menuBtn.classList.toggle("menu-btn--active");
    // mobileNav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
    console.log('fade clicked!!!');
    
};



/* ---------------  SWIPER  -----------------------*/ 
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    // Responsive breakpoints
    breakpoints: {
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-left",
        prevEl: ".swiper-button-right",
    },
});


// Google Map
let map;

async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");

    // Portimao 37.23075968858662, -8.630812684579121
    map = new Map(document.getElementById("map"), {
        center: { lat: 37.2306, lng: -8.6308 },
        zoom: 14,
        styles: [
            {
                featureType: "administrative",
                elementType: "all",
                stylers: [
                    {
                        saturation: "-100",
                    },
                ],
            },
            {
                featureType: "administrative.province",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: 65,
                    },
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: "50",
                    },
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        saturation: "-100",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "all",
                stylers: [
                    {
                        lightness: "30",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "all",
                stylers: [
                    {
                        lightness: "40",
                    },
                ],
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        hue: "#ffff00",
                    },
                    {
                        lightness: -25,
                    },
                    {
                        saturation: -97,
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    {
                        lightness: -25,
                    },
                    {
                        saturation: -100,
                    },
                ],
            },
        ],
    });
}

initMap();
