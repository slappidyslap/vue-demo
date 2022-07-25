<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar__content">
                <div class="logo">Vue 3</div>
                <MyButton
                    @click="$router.push('/posts')"
                    class="posts__link"
                >
                    Посты
                </MyButton>
                <MyButton
                    @click="$router.push('/')"
                    class="main__link"
                >
                    Главное меню
                </MyButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: rgb(68, 193, 137);
    height: 50px;

    &__content {
        display: grid;
        column-gap: 10px;
        grid-template-columns: 6fr 1fr 1fr;

        align-items: center;
        height: 50px;
        font-size: 17px;
    }
}

.btn.posts__link {
    border: 0px;

    &:hover {
        background: none;
    }
}

.btn.main__link {
    border: 0px;

    &:hover {
        background: none;
    }
}
.container {
    max-width: 1000px;
    margin: 0 auto;
}
</style>
