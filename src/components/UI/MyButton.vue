<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'MyButton',
};
</script>
<style scoped lang="scss">
.btn {
  margin-bottom: 5px;
  background: none;
  border: 1px solid rgb(68, 193, 137);
  color: rgb(41, 119, 84);
  padding: 9px;
  border-radius: 5px;
  transition: 500ms;

  &:hover {
    background-color: rgb(54, 151, 107);
    color: white;
  }
}
</style>
