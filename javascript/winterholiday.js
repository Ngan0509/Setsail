const reviewList = [
    {
        image: '../assets/image/user-img-7.png',
        titleName: 'Holland Canals',
        desc: 'Sa etor aviues lmpedlt tes, vof ef nihc agem qupaios. Ai apvy',
        author: 'Ema Cooper',
    },

    {
        image: '../assets/image/user-img-4.png',
        titleName: 'Taipei',
        desc: 'Pe utor aviuas lwpadit tas, vut et nihc egam yubulas. Si euvy',
        author: 'Susan Day',
    },

    {
        image: '../assets/image/user-img-3.png',
        titleName: 'Kaohsiung',
        desc: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
        author: 'Roger Brooks',
    },

    {
        image: '../assets/image/user-img-2.png',
        titleName: 'Barcelona',
        desc: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy',
        author: 'James Fisher ',
    },

    {
        image: '../assets/image/user-img-6.png',
        titleName: 'Madrid',
        desc: 'Pe ator eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
        author: 'Sam Smith',
    },

    {
        image: '../assets/image/user-img-5.png',
        titleName: 'Tarragona',
        desc: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy',
        author: 'Carl Moore',
    },

];

const topReview = document.querySelector('#container__slider-slick');

window.addEventListener('DOMContentLoaded', function () {
    displayReview(reviewList);

    function displayReview(itemList) {
        let displayReviewList = itemList.map(function (item) {
            return `<div class="col l-4">
            <div class="container__top-review-child">
                <div class="container__top-review-child-img">
                    <img src="${item.image}" alt="${item.titleName}">
                </div>

                <div class="container__top-review-child-info">
                    <h4><a href="#">${item.titleName}</a></h4>

                    <div class="container__top-review-child-info-favour">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                    </div>

                    <p>${item.desc}</p>
                
                    <h6>${item.author}</h6>
                </div>
            </div>
        </div>`
        }).join('');

        topReview.innerHTML = displayReviewList;
    }

    $('#container__slider-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    })
})

$(document).ready(function () {
    $('#slider__slick-move').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    })

    let btnText = $('.slick-dots button');
    btnText.html('');

    $('#tourist__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite: true,
    })
})