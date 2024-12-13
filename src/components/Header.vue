<template>
    <div id="header">
        <div id="links-container">
            <router-link to="/" class="header-item">Home</router-link>
            <router-link to="/about-me" class="header-item">About Me</router-link>
            <router-link to="/projects" class="header-item">Projects</router-link>
            <router-link to="/contact-me" class="header-item">Contact Me</router-link>
        </div>
    </div>
    <div id="header-placeholder"></div>
</template>

<script>
export default {
    name: 'HeaderBar',
}
</script>

<style scoped>
#header {
    background-color: #462e9e;
    height: 70px;
    display: flex;
    width: 100%;
    position: absolute !important;
    top: 0px;
    left: 0px;
}

#header-placeholder {
    height: 70px;
}

#links-container {
    display: flex;
    width: fit-content;
    margin-inline: auto;
    margin-top: 22px;
    gap: 40px;
}

.header-item {
    color: #f3f3fd;
    text-decoration: none;
    font-size: 100%;
    font-weight: 500;
    user-select: none;
}

.header-item:hover {
    color: #b7a7ff;
    cursor: pointer;
}

.router-link-active {
    color: #b7a7ff;
}

@media (orientation: portrait) {
    #header {
        position: fixed !important;
    }
}

@media (max-width: 450px) {
    .header-item {
        font-size: 14px;
    }

    #links-container {
        gap: 30px;
        margin-top: 24px;
    }
}

@media (max-width: 330px) {
    .header-item {
        font-size: 12px;
    }

    #links-container {
        gap: 20px;
        margin-top: 27px;
    }
}
</style>