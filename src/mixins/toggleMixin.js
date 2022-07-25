export default {
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

    mounted() {

    },
};
