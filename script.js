

  document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPauseButton');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const currentTimeElement = document.getElementById('currentTime');
    const totalTimeElement = document.getElementById('totalTime');
    const progressBar = document.getElementById('progressBar');
    const volumeButton = document.getElementById('volumeButton');
    const volumeIcon = document.getElementById('volumeIcon');
    const volumeControl = document.getElementById('volumeControl');
  
    let isPlaying = false;
    let isMuted = false;
  
    // Function to format time
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  
    // Play/Pause toggle
    playPauseButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (isPlaying) {
        audio.pause();
        playPauseIcon.className = 'fas fa-play';
      } else {
        audio.play();
        playPauseIcon.className = 'fas fa-pause';
      }
      isPlaying = !isPlaying;
    });
  
    // Volume control
    volumeControl.addEventListener('input', function () {
      audio.volume = volumeControl.value;
      if (audio.volume === '0') {
        volumeIcon.className = 'fas fa-volume-mute';
      } else {
        volumeIcon.className = 'fas fa-volume-up';
      }
    });
  
    // Mute toggle
    volumeButton.addEventListener('click', function () {
      audio.muted = !audio.muted;
      isMuted = audio.muted;
      volumeIcon.className = isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
      volumeControl.value = isMuted ? '0' : audio.volume;
    });
  
    // Update time and progress
    audio.addEventListener('timeupdate', function () {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      currentTimeElement.textContent = formatTime(currentTime);
      totalTimeElement.textContent = formatTime(duration);
      progressBar.style.width = ((currentTime / duration) * 100) + '%';
    });
  
    // Set initial values
    volumeControl.value = audio.volume;
  });


  var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:1,
    loop:true,
    owlDots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



let navbarSearch = document.querySelector('.navbar-search');
let searchPopup = document.getElementById('search-popup');
let closeSearch =document.querySelector('.close-search');


navbarSearch.addEventListener('click', ()=>{
    searchPopup.classList.add('search_active')
});

closeSearch.addEventListener('click', ()=>{
    searchPopup.classList.remove('search_active')
})

let mobileNav =document.querySelector('.mobile-nav')
let barMenu = document.querySelector('.bar-menu')
let resCross = document.getElementById('res-cross')

barMenu.addEventListener('click', ()=>{
    mobileNav.classList.add('open')
})
resCross.addEventListener('click', ()=>{
    mobileNav.classList.remove('open')
})


let funFacts = document.querySelector('.fun-facts')
let msAnimated =document.querySelectorAll('.ms-animated')

window.addEventListener('scroll', function scroll(){
    if (this.scrollY > funFacts.offsetTop - funFacts.clientHeight) {
        for (let i = 0; i < msAnimated.length; i++) {
            const msAnimateds = msAnimated[i];
            let count = +msAnimateds.getAttribute('data-max')
            msAnimateds.innerHTML=0
            let k=0
            function rec(){
                msAnimateds.innerHTML= k
                if (msAnimateds.innerHTML < count) {
                    setTimeout(() => {
                        k++
                        rec()
                    }, 10);
                }
            }
            rec()
        }
        window.removeEventListener('scroll', scroll)
    }
})

const progressElement = document.getElementById('progress');
let scrollValue = 0;

function updateScrollPercentage() {
    const pos = document.documentElement.scrollTop || document.body.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollValue = Math.round((pos * 100) / calcHeight);
    progressElement.style.background = `conic-gradient(#007d3a ${scrollValue}%, #fff ${scrollValue}%)`;
}

// Initial update
updateScrollPercentage();

// Add scroll event listener
window.addEventListener('scroll', updateScrollPercentage);

// Optional: clean up event listener on unload
window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', updateScrollPercentage);
});