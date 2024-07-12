<template>
    <nav id="nav-bar">
        <a href="#about">About</a>
        <a href="#hobby">Hobby</a>
        <a href="#contact">Contact</a>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
    msg: String
  }
}
</script>

<style scoped>
#nav-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
}
#nav-bar a {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--text-color);
    padding: 10px 20px;
    background-color: transparent;
    transition: all 0.5s ease-out;
}
#nav-bar a:hover {
    color: var(--text-color-hover);
	transition: all 0.25s ease-in;
}

@media only screen and (max-width: 1024px){
    #nav-bar{
        column-gap: 0px;
    }
    #nav-bar a {
    padding: 5px 20px;
    }
}
@media only screen and (max-width: 600px){
    #nav-bar a {
    font-size: 1rem;
    padding: 0px 10px;
    }
}
</style>