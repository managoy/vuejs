<template>
    <select name="dropdown" v-model="selectedOption" id="dropdown" v-on:change="optionChanged">
        <option value="null" disabled>Please select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>
</template>

<script>

    export default {
        name: "Dropdown",

        data:function(){
            return {
                selectedOption: null,
            }
        },
        methods:{
            optionChanged: function(value){
                this.$emit('update:option', this.selectedOption);
            }
        }
    }
</script>

<style scoped>

</style>