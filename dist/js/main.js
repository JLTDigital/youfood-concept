const footerYear = document.getElementById('year'),
  carousel = document.getElementById('myCarousel'),
  galleryLightBox = document.getElementById('gallery'),
  modal = document.getElementById('videoModal'),
  video = document.getElementById('video-play');

const slider = document.querySelector('.slider');

 // Video Modal
 $(function () {
  // Auto Play Modal Video
  $(".video").click(function(){
    var theModal = $(this).data("target"),
      videoSRC =$(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function(){
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

// LightBox Init
$(galleryLightBox).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Slick Slider
$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});

// Carousel interval
carousel.setInterval({
  interval: 6000,
  pause: 'hover'
})

// Footer year
footerYear.innerText = new Date().getFullYear()
