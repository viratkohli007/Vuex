<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>clicks : {{ clicks }} </p>
        <p>clicks : {{ clicks }} </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed : {
            ...mapGetters([
                'doubleCounter',
                'clicks'
            ]),
            clickss(){
                return this.$store.state.counter
            }
        }
            // counter(){
            //     return this.$store.getters.doubleCounter;
            // },
            // clicks(){
            //     return this.$store.getters.clicks;
            // }
        
    }
</script>