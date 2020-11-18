<template>
    <p class="words">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name:"words",
    setup () {       
        return {}
    }
}
</script>

<style lang="scss" scoped>
.words{
    font-size: 14px;
    color:#333;
    line-height: 24px;
}
</style>