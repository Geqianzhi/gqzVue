<template>
  <section class="home">
        <a-layout class="layout">
          <a-layout-sider width="240" collapsible @collapse="collapseClick">
            <a-menu
              v-model:openKeys="Menu.openKeys"
              v-model:selectedKeys="Menu.selectedKeys"
              mode="inline"
              theme="dark"
              @click="MenuClick"
              :inline-collapsed="collapsed"
            >            
              
              <template v-for="(item,index) in routes">
                  <a-sub-menu :key="item.path" v-if="item.hasOwnProperty('children')">
                    <template #title>
                      <span><MailOutlined /><span>{{item.label}}</span></span>
                    </template>                    
                    <a-menu-item v-for="(e,i) in item.children" :key="e.path">
                        <router-link :to="e.path">{{e.label}}</router-link>
                    </a-menu-item>                   
                  </a-sub-menu>
                  <a-menu-item :key="item.path" v-else>
                    <InboxOutlined />
                    <router-link :to="item.path" custom v-slot="{ navigate}">
                        <span @click="navigate">{{item.label}}</span>
                    </router-link>
                  </a-menu-item>
              </template>
              
           
            </a-menu>
          </a-layout-sider>
          <a-layout>
            <a-layout-header class="header">Header</a-layout-header>
            <a-layout-content>
              <router-view></router-view>
            </a-layout-content>
          </a-layout>
        </a-layout>
  </section>
</template>

<script>
import {ref,reactive} from 'vue'
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {childrenRouters} from '../router';
import {
  MailOutlined,
  InboxOutlined,
} from '@ant-design/icons-vue';

function Menus(){
    const Menu = reactive({
          selectedKeys:['1'],
          openKeys:['sub1'],
          preOpenKeys:['sub1']
    })
    function MenuClick({ item, key, keyPath }){
          // Menu.selectedKeys = [key]
    }
    return {
        Menu,
        MenuClick
    }
}


export default {
  name: "Home",
  components:{
    MailOutlined,
    InboxOutlined
  },
  setup(){
      const collapsed = ref(false);
      const route = useRoute();
      const title = computed(()=> `${route.name}`);
      const {Menu,MenuClick}  = Menus();
      const routes = ref([...childrenRouters])
      function collapseClick(collapse, type){
          collapsed.value = collapse
      }
      return{
          title,
          collapsed,
          Menu,
          MenuClick,
          routes,
          collapseClick
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
      .ant-layout-content{
        background-color: #fff;
      }
      .ant-menu-item > a {
          display: inline;
          color: #fff;
      }
    }
    .header {
        background-color: #eee;
        padding: 0;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        display: flex;
        align-items: center;
    }
   .header:hover {
        box-shadow: 0 -3px 5px rgba(0,0,0,0.25), 0 5px 7px rgba(0,0,0,0.22);
    }
}
</style>