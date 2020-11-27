<template>
  <section class="home">
        <a-layout class="layout">
          <a-layout-sider width="240" :collapsible='true'>Sider</a-layout-sider>
          <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
          </a-layout>
        </a-layout>
  </section>
</template>

<script>
// @ is an alias to /src
import sidebar from './sidebar';
import myTitle from '../components/title';
import {computed} from 'vue';
import {useRoute} from 'vue-router';
export default {
  name: "Home",
  components:{sidebar,myTitle},
  setup(){
      const route = useRoute();
      const title = computed(()=> `${route.name}`);
      return{
          title
      }
  }
};
</script>
<style lang="scss" scoped>
.home{
    height: 100%;
    width: 100%;
    .layout{
      height: 100%;
      .ant-layout-header{
        background-color: #eee;
      }
      .ant-layout-content{
        background-color: #fff;
      }
    }
}
</style>