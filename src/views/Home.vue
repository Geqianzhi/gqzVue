<template>
  <section class="home">
        <div class="sidebar">
            <sidebar></sidebar>
        </div>
        <div class="content">
            <my-title :title="title" />
            <router-view></router-view>
        </div>       
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
    display: flex;

    .sidebar{
      width: 240px;
      height: 100%;
      overflow: auto;
      box-sizing: border-box;
      border-right:1px solid rgb(218, 214, 214);
    }
    .content{
      width: calc(100% - 240px);
      height:calc(100% - 48px);
    }
}
</style>