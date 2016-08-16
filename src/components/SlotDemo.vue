<template>
    <div>
	    <h1>This is my component 1</h1>
	    <slot name="one">
		    如果没有分发内容1
	    </slot>
	    <h1>This is my component 2</h1>
	    <slot name="two">
		    如果没有分发内容2
	    </slot>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
</style>
<script>

    export default{

    }
</script>
