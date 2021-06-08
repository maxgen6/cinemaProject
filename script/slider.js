$(function () {
  $('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    prevArrow:  "<img src='./img/arrowpointingleft_87473.png' class='prev' alt='prev'>",
    nextArrow:  "<img src='./img/rightarrow_87483.png' class='next' alt='next'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})