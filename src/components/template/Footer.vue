<template>
    <footer class="footer">
        <div>
            Desenvolvido por:
            <strong>Pedro Paulo Travassos</strong>
            <img src="../../assets/img/trademark.png" alt />
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
    };
</script>

<style>
    footer {
        background-color: rgba(245, 245, 245, 0.473);
        grid-area: footer;
        border-top: dashed 1px black;
    }
    img {
        height: 100%;
        width: auto;
    }
    .footer {
        display: flex;
        justify-content: flex-end;
    }
</style>