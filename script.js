const musicPlayer = document.querySelector('.music-video-player')
console.log(musicPlayer);
const toggleMusicPlayerOn = document.querySelector('.music-files')
console.log(toggleMusicPlayerOn);

toggleMusicPlayerOn.addEventListener('click', function(){
    musicPlayer.classList.add('active')
    console.log(musicPlayer)
})