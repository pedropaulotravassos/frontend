<template>
    <header class="header">
        <router-link to="/" class="logo">
            <img src="..\..\assets\img\logo.png" />
        </router-link>

        <UserDropdown />
    </header>
</template>

<script>
    import UserDropdown from "../user/dropdown/UserDropdown";
    export default {
        name: "Header",
        components: { UserDropdown },
        data() {
            return {
                showMenu: false,
            };
        },
    };
</script>

<style>
    header {
        background: linear-gradient(#90ee90, #d2ffa6e8);
        grid-area: header;
        border-bottom: dashed 2px #436e43f8;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-content: center;
    }
    .logo {
        height: 100%;
    }
</style>