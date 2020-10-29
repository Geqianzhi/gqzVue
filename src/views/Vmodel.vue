<template>
    <p>vue3.0移除了.sync修饰符，现在vue3.0的v-model相当于2.0中的v-model和.sync修饰符的结合体</p>
    <div>
        <custom-input v-model="text" @addItem="addItem"></custom-input>
        <myList v-model:list="list" >
            <template v-slot='{item}'>
                <span>{{item.name}}</span>
                <button @click="deleteItem(item)">删除</button>
                <button @click="addItem(item)">添加</button>
            </template>
        </myList>
    </div>
</template>

<script>
    import customInput from "../components/CustomInput";
    import myList from '../components/list';
    import { reactive,toRefs } from "vue";
    export default {
        components:{customInput,myList},
        setup(){
            const state  = reactive(
                {
                    text:'测试v-model',
                    list:[
                        {name:"vue2.6666666",id:1},
                        {name:"vue3.0",id:2},
                        {name:"react16.8",id:3}
                    ]
                }
            );
            function deleteItem(item){
                console.log(item);
                let index = state.list.findIndex(e => e.name===item.name);
                if(index>-1){
                    state.list.splice(index,1)
                }
            }
            function addItem(item){
                state.list.push({...item})
            }
            return{
                ...toRefs(state),
                deleteItem,
                addItem
            }
        }
    }
</script>

<style lang="scss" scoped>
button{
    margin: 8px;
}
</style>