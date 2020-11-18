<template>
    <div class="setup">
        <words>1.一个组件选项，在创建组件之前执行，一旦 props 被解析，并作为组合式 API 的入口点,也就是setup第一个参数</words>
        <words>2.{{name}}</words>
    </div>
</template>

<script>
import {toRefs} from 'vue'
    export default {
        name: "setup",
        props:{
            name:{
                type:String,
                default:'张三'
            },
            age:{
                type:String,
                default:'18'
            }
        },
        setup(prop,context){
            const {name,age} = toRefs(prop)
            return {
                name,
                age
            }
        }
    }
</script>

<style scoped lang="scss">
.setup{
    padding: 16px;
    box-sizing: border-box;
}
</style>