<script setup>
import { ref } from 'vue'

const count = ref(0)
const navOn = ref(true)
function mobileNavOn(e) {
        navOn.value = !navOn.value
        e.currentTarget.classList.toggle('on')
}
window.addEventListener('resize',function () {
    if(window.innerWidth < 576){
        navOn.value = false
    }else{
        navOn.value = true
    }
})
</script>

<template>
    <div class="wrapper navBar">
        <h1>로고</h1>
        <ul class="navList" v-if="navOn">
            <li><router-link to="/">처음으로</router-link></li>
            <li><router-link to="/profile">프로필</router-link></li>
            <li><router-link to="/portfolio">포트폴리오</router-link></li>
            <li><router-link to="/contact">연락처</router-link></li>
        </ul>
        <div class="toggle">
            <input type="checkbox" name="btnToggle" id="btnToggle">
            <label for="btnToggle"></label>
        </div>
        <button class="mobileNav" @click="mobileNavOn">
            <span v-for="e in 3" :key="e"></span>
        </button>
    </div>
</template>

<style lang="scss">
.navBar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}
.navList{
    display: flex;
    gap:40px;
}
// toggle
#btnToggle{
  display: none;
}
.toggle label{
	display: block;
	position: relative;
	width: 40px;
	height: 24px;
	background: gray;
	border-radius: 40px;
	text-indent: -9999px;
	cursor: pointer;
}
.toggle label:after {
	content: '';
	position: absolute;
	top: 3px;
	left: 3px;
	width: 18px;
	height: 18px;
	background: #fff;
	border-radius: 50%;
	transition: 0.3s;
}
.toggle input:checked + label {
	background: lightcoral;
}
.toggle input:checked + label:after {
	left: calc(100% - 3px);
	transform: translateX(-100%);
}

.mobileNav{
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    span{
        display: block;
        position:absolute;
        left: 5px;
        top: 20px;
        width: 30px;
        height: 2px;
        background-color: black;
        transform:translate(0, -50%);
        transition:all 0.5s;
    }
    span:first-child{
        top: 8px;
    }
    span:last-child{
        top: 32px;
    }
    
}
.mobileNav.on{
	span:first-child{ top:19px; transform:rotate(45deg);}
	span:last-child{ top: 19px; transform:rotate(-45deg);}
}
@media (max-width: 576px) {
    .navBar{
        padding:2%;
    }
    .navList{
        position: absolute;
        left: 0;
        padding: 120px 80px 0 20px;
        height: 100%;
        flex-direction: column;
        top:0px;
        background-color: seagreen;
        z-index: -1;
    }
    .toggle{
        order:2;
    }
    .mobileNav{
        display: block;
        z-index: 1;
        order:-1;
    }
}
</style>
