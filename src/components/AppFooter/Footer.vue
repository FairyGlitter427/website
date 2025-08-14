<template>
    <footer>
        <div id="footer">
            <span>Email: <a href="mailto:Connykwong123@gmail.com">Connykwong123@gmail.com</a></span>
            <span>© {{ currentYear }} Conny Kwong</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear() // Dynamically get the current year
        };
    }
}  
</script>

<style scoped>
footer {
    width: 100%;
    height: auto;
    background-color: var(--background-color-dark);
    padding: 20px 0;
}

#footer {
    display: flex;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#footer > span {
    font-size: 1rem;
}

@media only screen and (max-width: 1024px) {
    #footer {
        padding: 10px 0;
        max-width: 100%;
    }
    #footer > span {
    padding: 0 20px;
    font-size: 0.8rem;
}
}

@media only screen and (max-width: 600px){

}
</style>