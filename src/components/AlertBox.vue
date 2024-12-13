<template>
    <div :class="['alert-box', isSuccess ? 'alert-box-success' : 'alert-box-fail']" id="alert-box">
        <p id="alert-box-text">{{ text }}</p>
        <button id="alert-box-close-btn" @click="deleteAlertBox"><span class="material-symbols-outlined">close</span></button>
    </div>
</template>

<script>
export default {
    name: 'AlertBox',
    props: {
        text: {
            type: String,
            required: true,
        },
        isSuccess: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        async deleteAlertBox() {
            let alertBox = document.getElementById('alert-box');

            alertBox.style.display = 'none';
        }
    }
}
</script>

<style>
.alert-box {
    width: 700px;
    max-width: 80vw;
    height: fit-content;
    margin-inline: auto;
    border-radius: 5px;
    margin-top: 60px;
    display: flex;
}

.alert-box-success {
    background-color: #aeaeff;
    border: 3px solid #462e9e;
}

.alert-box-fail {
    background-color: #ffaeae;
    border: 3px solid #9e2e2e;
    color: #381717;
}

#alert-box-text {
    width: 590px;
    text-align: left;
    margin-left: 50px;
    margin-top: 19px;
    margin-bottom: 19px;
}

#alert-box-close-btn {
    background-color: #462e9e00;
    border: none;
    padding-top: 5px;
}
</style>