<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div
        class="popup"
        v-if="isShow"
        @click.stop="hidePopup"
    >
        <div @click.stop class="popup__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MyPopup',
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hidePopup() {
            this.$emit('update:isShow', false);
        },
    },
};
</script>

<style lang="scss" scoped>
.popup {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba($color: #000000, $alpha: 0.5);
    display: flex;
}
.popup__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    max-width: 300px;
    padding: 30px;
    border: 1px solid rgb(41, 119, 84);
}
</style>
