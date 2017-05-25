<template>
	<div class="header">
	    <div class="header-left">
		<img class="mypic"  src="../../common/src/girl.jpg" border="1" />
		<div class="welcome">
			welcome!
		</div>
		</div>
	</div>
</template>

<script >

</script>
export default{

}
<style >
.header{
	background-color: #75D4BC;
}
.header-left{
	position: relative;
	 height:90%;
	 padding-left: 5%;
}
.mypic{
	position: relative;
	height: 100%;
	float: left;
}
.welcome{
	position: relative;
	float: left;
	height: 40px;
	line-height:40px;
  margin-top:30px;
	font-weight: 500;
  font-size:40px;
	font-family:"Times New Roman",Georgia,Serif;
}
</style>
