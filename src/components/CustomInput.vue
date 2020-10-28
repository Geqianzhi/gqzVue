<template>
    <div class="input_div">
        <input type="text" v-model="value" @keyup.enter="addItem"  />
    </div>
</template>

<script>
import { computed,ref } from "vue";
export default {
    props:{
        modelValue:{
            type:[String,Number]
        }
    },
    setup (props,context) {
        console.log(props,context)
        const value = computed({
            get:() => props.modelValue,
            set:(val) =>{
                context.emit('update:modelValue',val)
            }
        })
        const addItem = () =>{
            let obj={name:props.modelValue};
            console.log(obj)
            context.emit('addItem',obj)
        }
        return {
            value,
            addItem
        }
    }
}
</script>

<style lang="scss" scoped>
.input_div{
    padding: 20px;
    text-align: center;
}
</style>