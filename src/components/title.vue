<template>
    <header>
        {{title}}
    </header>
</template>

<script>
    export default {
        name:'title',
        props:{
            title:{
                type:String,
                default:"VUE"
            }
            
        }
    }
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    text-align: center;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    font-weight: bold;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(218, 214, 214);
}
</style>