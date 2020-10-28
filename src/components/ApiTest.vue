<template>
    
</template>

<script>
    import {reactive,customRef} from "vue";
    function  cRef(value) {
        return customRef((track,trigger)=>{
            return {
                get(){
                    track();
                    return value;
                },
                set(newValue){
                    value =  newValue;
                    trigger();
                }
            }
        })
    }
    export default {
        name: "ApiTest",
        setup(){
            let state = reactive({
                name:'shadow',
                age:18,
                like:"code"
            });
            return {
                state
            }
        }
    }
</script>

<style scoped lang="scss">

</style>