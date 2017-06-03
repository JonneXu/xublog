<template>
	<div>
		{{username}}敬请期待
	</div>
</template>

<script >
  import { bus } from '../bus.js'
	export default{
	    data(){
	        return {
	            username: ''
          }
      },
    created() {
      bus.$on('id-selected',(data) => {
        this.username = data[1]
      })
    }
  }
</script>
<style >

</style>
