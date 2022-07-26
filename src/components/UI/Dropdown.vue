<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
    <select :value="modelValue" @change="changeOption" class="dropdown">
        <option disabled value="">Выберите что-то из списка</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'drop-down',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeOption(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
.dropdown {
    background: white;
    border-radius: 5px;
    border: 1px solid rgb(68, 193, 137);
    padding: 9px;
    color: rgb(41, 119, 84);
    &:focus {

    outline: none;
  }
}
</style>
