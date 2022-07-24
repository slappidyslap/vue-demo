<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
    <input :value="modelValue" @input="updateInput" class="inp" type="text">
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        modelValue: [String, Number],
    },
    data() {
        return {

        };
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
.inp {
  margin-bottom: 5px;
  max-width: 100%;
  border: 1px solid rgb(68, 193, 137);
  padding: 10px 15px;
  background: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid rgb(54, 151, 107);
  }
}
</style>
