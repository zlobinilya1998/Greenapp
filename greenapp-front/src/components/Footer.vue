<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-links">
                <div class="footer-link" v-for="(nav,index) in navs" :key="index">
                    <p class="link-title" v-html="nav.title"/>
                    <div class="links-wrapper">
                        <a class="link-header" v-for="(link,index) in nav.links" :key="index" :href="link.href" v-html="link.title"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-divider"/>
        <div class="container">
            <p class="footer-copyright">Copyright © 2022</p>
        </div>
    </footer>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Footer extends Vue {
    navs = [
        {
            title: 'Контакты',
            links: [
                {title: 'Telegram', href: 'Telegram'},
                {title: 'Twitter', href: 'Twitter'},
                {title: 'Github', href: 'Github'},
            ]
        },
        {
            title: 'Контакты',
            links: [
                {title: 'Telegram', href: 'Telegram'},
                {title: 'Twitter', href: 'Twitter'},
                {title: 'Github', href: 'Github'},
            ]
        },
        {
            title: 'Контакты',
            links: [
                {title: 'Telegram', href: 'Telegram'},
                {title: 'Twitter', href: 'Twitter'},
                {title: 'Github', href: 'Github'},
            ]
        },
    ]
}
</script>

<style lang="scss" scoped>
.footer {
    background: #0C0C0C;
    padding: 25px 0 15px;
}
.footer-links {
    display: flex;
}
.footer-link {
    flex: 0 1 120px;
}
.links-wrapper {
    display: flex;
    flex-direction: column;
}
.link-title {
    color: var(--color-green);
}
.link-header {
    color: var(--color-white);
    text-decoration: unset;
    margin-bottom: 10px;
}
.footer-divider {
    height: 1px;
    background: #313131;
    margin: 25px 0;
}
.footer-copyright {
    color: var(--color-muted);
}
</style>
