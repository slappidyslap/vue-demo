<template lang="">
  <button>
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
  width: 100%;
  background: none;
  border: 1px solid rgb(68, 193, 137);
  color: rgb(68, 193, 137);
  padding: 9px;
  transition: 500ms;

  &:hover {
    background-color: rgb(54, 151, 107);
    color: white;
  }
}
</style>
