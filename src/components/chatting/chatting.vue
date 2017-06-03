<template>
	<div>
		{{username}}hello
	</div>
</template>

<script >
  import { bus } from '../bus.js'
	export default{
	    data(){
	        return {
	            username: '没进来！！！'
          }
      },
    created() {
	      let  chatThis =this
      bus.$on('id-selected',function (data) {
        chatThis.username = data[1]
      })
    }
  }
</script>
<style >

</style>
