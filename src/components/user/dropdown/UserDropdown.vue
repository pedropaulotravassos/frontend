<template>
    <div class="user-dropdown" @click="showContent">
        <div class="user-button">
            <div class="user-dropdown-img">
                <UserAvatar :srcAvatar="user.avatar" />
            </div>
            <span class="d-none d-sm-block mr-2">{{user.name}}</span>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content" v-if="logged">
            <router-link to="/requests">
                <i class="fa fa-clipboard"></i> Pedidos
            </router-link>
            <router-link to="/admin">
                <i class="fa fa-cogs"></i> Administração
            </router-link>
            <a href @click.prevent="logout">
                <i class="fa fa-sign-out"></i> Sair
            </a>
        </div>
        <div class="user-dropdown-content" v-else :class="{visible:isVisible}">
            <SignIn @on-submmit="onClickChild"></SignIn>
        </div>
    </div>
</template>
<script>
    import UserAvatar from "./UserAvatar";
    import SignIn from "../auth/SignIn";
    export default {
        name: "UserDropdown",
        components: {
            UserAvatar,
            SignIn,
        },
        data() {
            return {
                user: {
                    name: "Sign-In/Sign-Up",
                    avatar: null,
                },
                logged: false,
                isVisible: false,
            };
        },
        methods: {
            showContent() {
                this.isVisible = !this.isVisible;
            },
            onClickChild(value) {
                console.log(value); // someValue
            },
        },
    };
</script>

<style>
    .user-dropdown {
        position: relative;
        height: 100%;
    }

    .user-button {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
        text-shadow: 0px 0px 5px black;
    }

    .user-dropdown:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .user-dropdown-img {
        margin: 0px 5px;
    }

    .user-dropdown-img > img {
        max-height: 37px;
        border-radius: 5px;
    }

    .user-dropdown-content {
        position: absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;

        border-radius: 0 0 5px 5px;
    }

    .user-dropdown:hover .user-dropdown-content {
        visibility: visible;
        opacity: 1;
    }

    .user-dropdown-content a {
        text-decoration: none;
        color: #000;
        padding: 10px;
    }

    .user-dropdown-content a:hover {
        text-decoration: none;
        color: #000;
        background-color: #ededed;
    }

    .visible {
        visibility: visible;
        opacity: 1;
    }
</style>
