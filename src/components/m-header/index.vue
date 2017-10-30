<template>
    <div class="m-header">
        <i class="icon-menu"></i>
        <h1>CNode社区</h1>
        <i class="icon-msg"></i>
        <span class="msg-count">0</span>
    </div>
</template>
<script>
 export default {}
</script>
<style lang="less" scoped>
.m-header{
    position: relative;
    display:flex;
    flex-direction: column;
    width:100%;
    height:70px;
    background-color:#2196f3;
    color:#fff;
    justify-content: center;
    align-items:center;
    box-shadow:0 1px 10px rgba(0,0,0,.2);
    i{
        position: absolute;
        z-index:1;
        display:inline-block;
        flex:1;
        width:25px;
        height:25px;
        &.icon-menu{
            left:20px;
            top:25px;
            background:url('~common/icons/icon-menu.svg') no-repeat;
            background-size:contain;
        }
        &.icon-msg{
            right:30px;
            top:23px;
            background:url('~common/icons/icon-msg.svg') no-repeat;
            background-size:contain;
        }
    }
    .msg-count{
        position: absolute;
        display:flex;
        justify-content: center;
        align-items:center;
        z-index:1;
        width:20px;
        height:20px;
        right:15px;
        top:18px;
        text-align:center;
        background-color:#ff4081;
        border-radius:10px;
        font-size:80%;
    }
    h1{
        flex:5;
        letter-spacing: 2px;
        transition:.3s ease-in-out;
        &:hover{
            transform:rotate(8deg);
            transition:.3s ease-in-out;
        }
    }
}
</style>