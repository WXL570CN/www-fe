<script>
export default {
  props: ['title'],
};
</script>
<template>
  <!-- 导航栏-->
  <div class="right-center">
    <ul id="nav-bar" v-cloak >
      <li content="myOrder">
        {{ title }}
      </li>
    </ul>
  </div>
</template>
