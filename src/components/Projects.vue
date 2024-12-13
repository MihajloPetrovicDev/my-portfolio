<template>
    <HeaderBar />
    <main>
        <section class="mb-140">
            <h3 class="fw-bold mt-90 mb-5">Projects</h3>
            <p class="fs-6 w-800 w-max-100 mx-auto">
                Over the years, I’ve worked on a variety of projects that range from small, functional apps to more complex systems. 
                These smaller projects were stepping stones in learning different technologies and approaches, each contributing to the skills I apply today. 
                When I was in middle school I created two complete games in C# Unity, with some complex AI components. There were also a few unfinished games, 
                where I explored new game mechanics and AI, refining my skills in C#. During high school I developed numerous small web and desktop applications. 
                These include school apps, blog pages, and calculators, as well as more interesting projects like an anti-bullying blog site built in plain PHP 
                for a competition. Other apps were created in C# .NET and PHP, such as commercial applications and rental apps. While some were simple, others 
                were more feature-rich, but none were particularly professional or large-scale, mostly small tools and prototypes.           
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                However, the most significant project I've worked on is <span class="color-purple">NovaKeys</span>, a fully-featured digital marketplace that is by far my most complex and professional 
                work to date.
            </p>
        </section>

        <section class="mb-140">
            <h3 class="fw-bold mb-5">NovaKeys - A Full-Fledged Digital Marketplace</h3>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Seller Features:</span> Sellers can create products with detailed information, and then create listings for those products. This separation makes the process easier to manage and offers a more streamlined buying experience for customers.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Referral System:</span> Influencers can earn a 5% commission, and their viewers get a 5% discount, making the platform self-marketing. This is a key part of the incentive system that helps grow the user base by offering a payment method that opens up many customers who didn't have the ability to purchase due to the lack of payment options, which would make the influencers conversion rates a lot higher.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Discount Codes:</span> Apart from referral codes, discount codes also exist and will be distributed by the platform to attract sales.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Bank and PayPal Withdrawals:</span> Sellers can choose how they wish to withdraw their earnings, either through bank transfers or PayPal, adding flexibility to the platform’s financial system.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Top-Up System:</span> Users can top up their accounts by paying at any physical exchange office or bank. The funds are credited to the user’s account once the payment is confirmed. Once the funds are credited to the user's account, they can use them to make purchases and get products instantly.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Localized and International Payment Options:</span> Novakeys primarily serves the Serbian market, providing localized payment methods, bridging the gap for users who typically would not have access to digital marketplaces due to limited payment options. Also, NovaKeys supports international payments through credit and debit cards.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Automatic Emails:</span> Automated emails notify both users and sellers about key actions, such as orders, account notifications, and other relevant platform activities.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Cart System:</span> NovaKeys features both a guest and an authenticated cart. Users can use the cart system to add, remove, modify the quantity and purchase products, applying either referral or discount codes to their orders.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Multilingual Support:</span> The platform supports Serbian and English languages, allowing users to interact in their preferred language.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Multi-Currency Support:</span> EUR, RSD, and USD currencies are supported for seamless international transactions.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Dashboard:</span> Sellers have access to a complete dashboard to view their funds, pending funds, sales history, listings with keys, and the ability to modify those keys, seller inbox and more, helping them stay on top of their business.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Legal Compliance:</span> Novakeys includes fully customizable Terms of Service, Privacy Policy, and Refund Policy, ensuring compliance with legal standards and providing clarity to both users and sellers.
            </p>
        </section>

        <section class="mb-140">
            <h3 class="fw-bold mb-5">Technologies Used - NovaKeys</h3>
            <p><span class="color-purple">Frontend:</span> &nbsp; HTML, CSS, JavaScript</p>
            <p><span class="color-purple">Backend:</span> &nbsp; PHP, Laravel</p>
            <p><span class="color-purple">Database:</span> &nbsp; MariaDB</p>
            <p><span class="color-purple">Tools:</span> &nbsp; Postman, Git, OWASP ZAP</p>
        </section>

        <section>
            <NovaKeysShowcase />
        </section>
    </main>
    <FooterBar />
</template>

<script>
import HeaderBar from './Header.vue';
import FooterBar from './Footer.vue';
import NovaKeysShowcase from './NovaKeysShowcase.vue';

export default {
    name: 'ProjectsPage',
    components: {
        HeaderBar,
        FooterBar,
        NovaKeysShowcase,
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