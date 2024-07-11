<template>
    <header>
        <div id="header">
            <a class="logo" href=".."><Logo /></a>
            <NavBar class="nav-bar"/>
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue'
import NavBar from './NavBar.vue'

export default {
    name: 'Header',
    components: {
        Logo,
        NavBar
    },
    props: {
        msg: String
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
        return {
            lastScrollPosition: 0
        }
    },
    methods: {
        handleScroll() {
            const header = document.querySelector('header');
            const threshold = 100;
            const currentScrollPosition = window.scrollY + threshold;
            if (currentScrollPosition > this.lastScrollPosition) {
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
            this.lastScrollPosition = currentScrollPosition;
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    max-height: 80px;
    background-color: var(--primary-color);
    padding: 10px 0;
    z-index: 1000;
    position: fixed;
    transition: all 0.3s ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}

#header {
    display: flex;
    width: 100%;
    max-width: 1024px;
    max-height: 80px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:20px;
}

.logo ,.nav-bar{
    height: 100%;
    width: fit-content;
    max-height: 80px;
}

header.hide {
    transform: translateY(-100%);
    transition: all 0.3s ease;
}
@media only screen and (max-width: 1024px){
    .logo {
        padding-left: 20px;
        max-width: 280px;
    }
}
@media only screen and (max-width: 600px){
    header{
        max-height: 60px;
    }
    #header{
        max-height: 60px;
    }
    .logo {
        max-width: 200px;
    }
}

</style>