<template>
  <div class="breadcrumbs">
    <a-breadcrumb>
      <a-breadcrumb-item>
        <a href="#/data-center/add-data">数据中心</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{title}}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
export default {
  props: ['title'],
};
</script>
<style lang="scss" scoped>
.breadcrumbs {
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
