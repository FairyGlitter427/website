<template>
    <div class="music-player">
        <div class="music-player__controls">
            <button @click="playAudio">
                <font-awesome-icon icon="fa-solid fa-play" />
                <span>{{playText}}</span>
            </button>
        </div>
    </div>
</template>

<script>
import bgm from '../../assets/audio/Kuna-Sincerely.mp3'

export default {
    name: 'MusicPlayer', 
    data() {
        return {
        audio: new Audio(bgm),
        playText: 'Play'
        }
    },
    methods: {
        playAudio() {
            this.audio.volume = 0.2;
            if (this.audio.paused) {
                this.audio.play();
                this.playText = 'Pause';
            } else {
                this.audio.pause();
                this.playText = 'Play';
            }
        }
    }
}
</script>

<style scoped>
font-awesome-icon{
    font-size: 1rem;
    height: 20px;
    width: 20px;
}
</style>