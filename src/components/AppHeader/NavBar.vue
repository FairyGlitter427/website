<template>
    <nav id="nav-bar">
        <a href="../About">About</a>
        <a href="../Resume">Resume</a>
        <a href="#footer">Contact</a>
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
</style>