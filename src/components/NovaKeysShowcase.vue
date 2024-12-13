<template>
    <div id="novakeys-showcase-container">
        <h4>Watch the NovaKeys showcase video.</h4>

        <div class="video-container w-45vw w-min-250 ratio ratio-16x9 mx-auto">
            <iframe src="https://www.youtube.com/embed/OzfXaMN4d34?vq=1080" 
                    title="Novakeys Showcase Video" 
                    frameborder="0" 
                    allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NovaKeysShowcase',
}
</script>

<style scoped>
#novakeys-showcase-container {
    width: 45vw;
    min-width: 300px;
    height: fit-content;
    padding: 25px;
    background-color: White;
    border-radius: 5px;
    margin-inline: auto;
}

iframe {
    border: 9px solid #462e9e;
    border-radius: 3px;
}

h4 {
    font-weight: 900;
    font-size: 220%;
    margin-bottom: 40px;
    margin-top: 0px;
    color: #462e9e;
    text-align: left;
}

.video-container {
    background-color: #462e9e !important;
    border-radius: 3px;
    padding-bottom: 57.3% !important;
    height: 0 !important;
}

@media (max-width: 1400px) {
    .video-container {
        padding-bottom: 58% !important;
    }
}

@media (max-width: 700px) {
    .video-container {
        padding-bottom: 59.2% !important;
    }
}

@media (max-width: 380px) {
    #novakeys-showcase-container {
        border-radius: 0px;
        width: 101vw;
        min-width: 200px;
        margin-left: -14%;
        padding-block: 40px;
        padding-inline: 15%;
    }

    iframe {
        width: 80vw;
    }

    .video-container {
        width: 80vw;
        margin-inline: 0px !important;
        padding-bottom: 61% !important;
    }

    main {
        padding-inline: 20% !important;
    }
}
</style>