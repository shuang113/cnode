<template>
    <div class="m-tab">
        <div class="type"><router-link to="/">首页</router-link></div>
        <div class="type"><router-link to="/">精华</router-link></div>
        <div class="type"><router-link to="/">分享</router-link></div>
        <div class="type"><router-link to="/">问答</router-link></div>
        <div class="type"><router-link to="/">招聘</router-link></div>
    </div>
</template>
<script>
 export default {}
</script>
<style lang="less" scoped>
.m-tab{
    height:45px;
    display: flex;
    justify-content: center;
    align-items:center;
    text-align:center;
    color:#fff;
    background-color:#2196f3;
    font-size:110%;
    letter-spacing: 2px;
    a{
        color:#fff;
        &::after{
            bottom:-1px;
            background-color:#fff;
        }
    }
    .type{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100%;
        position: relative;
        z-index:1;
    }
}
</style>