<template>
    <HeaderBar />
    <div id="content">
        <main>
            <section class="mb-140">
                <h3 class="fw-bold mt-90 mb-5">Education</h3>

                <p class="mb-1 fs-5">High School of Electrical Engineering "Rade Končar" (2020-2024)</p>
                <p class="mt-1 fs-6 color-purple">Electrotechnician of Information Technologies</p>

                <p class="mt-4 mb-1 fs-5">MEF University (2024-Now)</p>
                <p class="mt-1 fs-6 color-purple">Applied Information Technologies</p>
            </section>

            <section class="mb-140">
                <h3 class="fw-bold mb-5">Skills</h3>

                <p><span class="color-purple">Frontend:</span> &nbsp; HTML, CSS, JavaScript, Vue.js, Bootstrap</p>
                <p><span class="color-purple">Backend:</span> &nbsp; PHP, Laravel, C#, .NET</p>
                <p><span class="color-purple">Databases:</span> &nbsp; MySQL, MariaDB, Microsoft SQL Server</p>
                <p><span class="color-purple">Tools:</span> &nbsp; Postman, Git, OWASP ZAP</p>
            </section>

            <section class="mb-140">
                <h3 class="fw-bold mb-5">More About Me</h3>

                <p class="fs-6 w-800 w-max-100 mx-auto">
                    I am a passionate and driven full-stack developer currently pursuing a degree in Applied Information Technologies at MEF University. 
                    I began my journey into development at a young age, learning through self-driven projects and academic coursework. 
                    My education at the High School of Electrical Engineering "Rade Končar" laid the foundation for my knowledge of information technologies, 
                    and since then, I’ve been continuously expanding my skill set. In my early years, I created games using C# in Unity, exploring AI and game 
                    mechanics. These experiences sparked my interest in programming, and over the years, I’ve developed a range of web and desktop applications. 
                    From simple school apps and calculators to more complex projects like an anti-bullying blog site and an online music platform, I’ve always 
                    been eager to explore new technologies and refine my craft. The highlight of my development journey so far has been the creation of NovaKeys, 
                    a digital marketplace that combines a variety of features, including localized payment options, multi-language support, referral system and 
                    more. With NovaKeys, I’ve gained significant experience working with complex backend systems, databases, and building user-centric platforms.
                    What excites me most about development is the ability to create meaningful solutions that make a real-world impact. I’m particularly 
                    passionate about building scalable and user-friendly applications, and I’m always eager to learn new technologies and improve my skills.
                    As I continue to work on NovaKeys and other projects, my goal is to keep growing as a developer and collaborate with teams to create 
                    innovative products that meet real user needs. I'm looking for opportunities where I can contribute my skills, learn from experienced 
                    developers, and take on new challenges.
                </p>
            </section>
        </main>
    </div>
    <FooterBar />
</template>

<script>
import HeaderBar from './Header.vue';
import FooterBar from './Footer.vue';

export default {
    name: 'AboutMe',
    components: {
        HeaderBar,
        FooterBar,
    },
};
</script>

<style scoped>
    @media (max-width: 300px) {
        h3 {
            font-size: 32px;
        }
    }
</style>