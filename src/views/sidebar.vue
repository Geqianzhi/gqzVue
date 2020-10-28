<template>
    <div class="siderbar">
        <ul>
            <li v-for="(e,index) in routerList" :key="index" @click.stop="showul(index)">
                <router-link class="parent"  :to="{name:e.name}">{{e.label}}</router-link>
                <ul v-if="e.children&&indexList[index]">
                    <li  class="children" @click.stop>
                        <p v-for="(e2,index2) in e.children" :key="index2"   >
                            <router-link class="children" :to="{name:e2.name}">{{e2.label}}</router-link>
                        </p>
                    </li>
                </ul>
            </li>

        </ul>
    </div>
</template>

<script>
    import {childrenRouters} from '../router'
    export default {
        name:"sidebar",
        data(){
           return{
                routerList:[],
                indexList:{}
           }
        },
        created(){
            this.routerList = childrenRouters;
            this.routerList.forEach((e,index)=>{
                if(e.children){
                    this.indexList[index] = false;
                }
            })
        },
        methods:{
            showul(index){
                console.log(index);
                this.indexList[index] = !this.indexList[index]
            }
        }
    }
</script>

<style lang="scss" scoped>
.siderbar{
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0 16px;
    box-sizing: border-box;
    ul{
        width: 100%;
        li{
            width: 100%;
            line-height: 48px;
            cursor: pointer;
            border-bottom: 1px solid rgb(218, 214, 214);
            &:hover{
                border-bottom-color: rgb(4, 0, 255);
            }
            .router-link-active{
                color:rgb(4, 0, 255);
            }
            p .router-link-active{
                color: rgb(22, 32, 255);
            }
            a{
                display: block;
            }
            p{
               a{
                   margin-left: 32px;
               }
            }
            .parent{
                font-size: 18px;
                font-weight: bold;
            }
            .children{
                font-size: 14px;

            }
        }
    
    }
}
</style>