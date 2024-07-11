<template>
    <div id="about">
        <div class="horizontal">
            <div class="icon"><img src="../assets/img/Selfie.jpg" alt="icon"></div>
            <div class="text half"><span>Hello there, this is Conny Kwong!<br>This is my personal website designed and written by myself.<br>You can know more about me (and maybe my dog?) here.<br>Enjoy!</span></div>
        </div>
        <div class="vertical">
            <div class="horizontal">
                <div class="photo hori"><img src="../assets/img/Robotic.jpg"></div>
                <div class="photo vert"><img src="../assets/img/Trophy.jpg"></div>
            </div>
        <div class="text"><span>I have interest in engineering since I was in high school.<br> I even won the first  runner-up in the <a href="https://www.eie.polyu.edu.hk/event/rcj2017/" target="_blank">EIE Robotic Challenge Junior 2017: Robot Hunter</a> competition organised by PolyU with my genius teammates (Marchi, Charles and Winnie, from left to right) and our tutor Sir Tony Chan in 2017.</span></div>
        </div>
        <div class="vertical">
            <div class="banner photo"><img src="../assets/img/Graduation.jpg" alt="graduation"></div>
            <div class="text"><span>I entered the Bachelor of Engineering programme from the <a href="https://www.ee.cityu.edu.hk/" target="_blank">Electrical Engineering</a> department of the City University of Hong Kong and decided my home major as Computer and Data Engineering in year 2. Finally, I graduated from my studies in 2024.</span></div>
        </div>
        <div class="vertical">
            <div class="text"><span>I have learnt C++, C,  Java, R, SAS, Java and assembly programming in my studies, but I also learnt Javascript myself.<br>That's why I am using vue.js to write this website!😉</span></div>
        </div>
    </div>
    <div id="hobby">
        <div class="vertical">
            <div class="text"><span>Other than being a programmer, I also have a lottttttttt of hobbies.</span></div>
        </div>
        <div class="horizontal reverse">
            <div class="text half"><span>Guess what, I learnt Chinese Opera since primary school!</span></div>
            <div class="photo hori half"><img src="../assets/img/Opera.jpg"></div>
        </div>
        <div class="vertical">
            <div class="horizontal">
                <div class="photo hori half"><img src="../assets/img/Band.jpg"></div>
                <div class="text half"><span>And of course I like singing a lot.<br>Thus, I formed a Japanese-Pop band with my friends in my University life.</span></div>
            </div>
            <div class="text"><span>You may also listen to this Cover (「Sincerely」 from the anime <b>Violet Evergarden</b>) if you are interested in my singing!<br>I also did the mixing and mastering myself.</span></div>
            <MusicPlayer />
        </div>
        <div class="horizontal">
            <div class="text"><span>I also love to listen to concerts!</span></div>
            <div class="horizontal slide">
                <img src="../assets/img/Concert1.jpg">
                <img src="../assets/img/Concert2.jpg">
                <!-- <img src="../assets/img/Concert3.jpg"> -->
            </div>
        </div>
        <div class="vertical">
            <div class="text"><span>And if you wonder, I have a Yoshire Terrier called Lavender.</span></div>
            <div class="icon"><img src="../assets/img/Dog.jpg"></div>
            <div class="text"><span>Cute huh? You may check out his life on <a href="https://www.instagram.com/lavender_the_yorkie/" target="_blank">instagram</a>.</span></div>
        </div>
    </div>
    <div id="Contact">
        <div class="vertical">
            <div class="text"><span>Guess you already have had a glance on who I am~ If you want to know more about me, you may also find my on <a href="https://www.linkedin.com/in/connykwong427/" target="_blank">LinkedIn</a> or find me through an email.</span></div>
            
        </div>
    </div>
</template>

<script>
import MusicPlayer from './MusicPlayer/MusicPlayer.vue'
export default {
    name: 'Content',
    components: {
        MusicPlayer
    }
} 
</script>

<style scoped>
#about, #hobby, #Contact{
    padding-top: 120px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 100px;
}

.horizontal {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between ;
    gap: 20px;
}

.vertical{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.icon {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
}

.banner {
    width: 100%;
    height: 300px;
}

.photo {
    max-height: 375px;
    border-radius: 25px;
    overflow: hidden;
}

.vert {
    aspect-ratio: 3/4;
}

.hori {
    aspect-ratio: 3/2;
}

.text {
    width: auto;
    max-width: 75%;
}

.horizontal > .half{
    width: 50%;
}

.slide {
    width: 65%;
    overflow-x: auto;
}
.slide > img {
    border-radius: 20px;
    max-height: 350px;
    aspect-ratio: 3/4;
}

@media only screen and (max-width: 1024px) {
    #about, #hobby, #Contact{
    padding-top: 60px; 
    gap: 60px;
    }

    .horizontal {
        width: 100%;
        gap: 20px;
        justify-content: center ;
    }

    .text {
        width: auto;
        max-width: 80%;
    }

    .slide {
        width: 65%;
    }
    .slide > img {
        max-height: 250px;
    }
}

@media only screen and (max-width: 600px) {
    #about, #hobby, #Contact{
        gap: 35px;
        padding-top: 30px;
    }

    .horizontal {
       flex-direction: column;
    }

    .horizontal > .half{
    width: 100%;
    }

    .horizontal.reverse {
        flex-direction: column-reverse;
    }

    .icon {
        width: 150px;
        height: 150px;
    }
    .banner {
        width: 100%;
        height: 200px;
    }

    .photo {
        max-height: 200px;
    }

    .slide {
        width: 80%;
        flex-direction: row;
    }
    .slide > img {
        max-height: 200px;
    }
}
</style>