<template>
    <div>
        <ul>
            <li v-for="(e,index) in list" :key="index">
                <slot  :item="e"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default:()=> []
        }
    },
    setup (props,context) {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>