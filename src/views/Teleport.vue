<template>
    <div class="teleport">
        <button @click="open=true">弹出模态框</button>
        <!-- 追加到body上 -->
        <teleport to="body">
            <section v-if="open" class="model">
                <div>追加到body上的元素</div>
                <div><button @click="open=false">关闭</button></div>
            </section>
        </teleport>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    },
}
</script>

<style lang="scss" scoped>
    .model{
        width: 200px;
        height: 200px;
        border:1px solid #eee;
        position: absolute;
        left:0;
        right: 0;
        bottom: 0;
        top:0;
        margin: auto;
    }

</style>