<template>
    <div>
        <label>{{label}}</label>
        <input :value="value" :type="type" :placeholder="placeholder" @input="$emit('input',$event.target.value)"/>
    </div>
</template>
<script>
export default {
    props:['type','placeholder','label','value'],
}
</script>
<style>
    
</style>