<template>
  <!--分页-->
  <div v-if="pages.length > 0" class="paging">
    <span v-on:click="goToFirstPage" v-if="current_page > 1">首页</span>
    <span v-on:click="goToPrevPage" v-if="current_page > 1">上一页</span>
    <ul>
      <li v-for="index in pages" v-bind:key="index">
        <span v-bind:class="{'on' : index == current_page}" v-on:click="goToPage(index)">{{index}}</span>
      </li>
    </ul>
    <span v-on:click="goToNextPage" v-if="current_page < last_page">下一页</span>
  </div>
</template>

<script>
export default {
  props: ['current_page', 'last_page', 'buttonMaxCount'],
  computed: {
    pages() {
      if (this.last_page <= 1) {
        return [];
      }
      const pages = [];
      const buttonLeftCount = Math.floor(this.buttonMaxCount / 2);
      let firstPage = this.current_page - buttonLeftCount;
      let lastPage = this.current_page + buttonLeftCount;

      if (firstPage < 1) {
        lastPage = lastPage + 1 - firstPage;
      }
      if (lastPage > this.last_page) {
        firstPage = firstPage + this.last_page - lastPage;
      }

      firstPage = firstPage > 1 ? firstPage : 1;
      lastPage = lastPage < this.last_page ? lastPage : this.last_page;

      for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    goToFirstPage() {
      this.goToPage(1);
    },
    goToPrevPage() {
      const page = this.current_page - 1;
      if (page <= 0) {
        return;
      }
      this.goToPage(page);
    },
    goToNextPage() {
      const page = this.current_page + 1;
      if (page > this.last_page) {
        return;
      }
      this.goToPage(page);
    },
    goToPage(number) {
      this.$emit('goToPage', number);
    },
  },
};
</script>
<style lang="css" scoped>
.paging {
  display: inline-block;
  float: right;
  text-align: center;
  padding: 70px 32px 60px 0;
  font-size: 0;
}

.paging > span {
  text-decoration: none;
  font-size: 12px;
  display: inline-block;
  border: 1px solid #eeeeee;
  width: 60px;
  line-height: 30px;
  height: 30px;
  margin-right: 10px;
}

.paging > span:hover {
  color: #fff;
  background-color: #4389ff;
}

.paging ul {
  display: inline-block;
  vertical-align: top;
}

.paging ul li {
  float: left;
  border: 1px solid #eee;
  margin-right: 10px;
}

.paging ul li span {
  display: inline-block;
  width: 46px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 12px;
}

.paging ul li span:hover,
.paging ul li span.on {
  background-color: #4389ff;
  color: #fff;
}
</style>
