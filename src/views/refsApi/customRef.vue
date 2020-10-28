<template>
    <input type="text"  v-model="value"/>
</template>

<script>
    import {customRef} from "vue";

    function useDebouncedRef(value, delay = 200) {
        let timeout;
        return customRef((track, trigger) => {
            return {
                get() {
                    track();
                    return value;
                },
                set(newValue) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        value = newValue;
                        trigger();
                    }, delay)
                }
            }
        })
    }

    export default {
        name: "customRef",
        setup(){
            return{
                value:useDebouncedRef(0)
            }
        }

    }
</script>

<style scoped>

</style>