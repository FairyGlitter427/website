<template>
    <footer>
        <div id="footer">
            <p>This is the footer</p>
            <p>© 2024</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}  
</script>

<style scoped>
footer {
    width: 100%;
    height: auto;
    background-color: var(--background-color-dark);
    padding: 10px 0;
}

#footer {
    display: flex;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>