<template>
	<div class="about">
    <div class="aboutContent">
   <a href="https://github.com/JonneXu" class="aboutName">Github:   Jonne Xu</a>
    <div class = 'aboutEmail'>441694216@qq.com</div>
    </div>
	</div>
</template>

<script >

</script>
export default{

}
<style >
.about{
  margin:3px 0 0 20px;
  width: 80%;
  height: 400px;
  border: 1px solid #B8B891;
  border-radius: 2px;
  box-shadow: 1px 1px 1px #888888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.aboutContent{
  height: 100px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
}
  .aboutName{
    font-size: 30px;
  }
  .aboutEmail{
    margin-top: 20px;
    font-size:20px;
  }
</style>
