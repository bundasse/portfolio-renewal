<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)
const navOn = ref(true)
function mobileNavOn(e) {
        navOn.value = !navOn.value
        e.currentTarget.classList.toggle('on')
}
onMounted(() => {
    if(window.innerWidth < 576){
        navOn.value = false
    }
})
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
        <div class="navLeft">
            <h1>로고</h1>
            <ul class="navList">
                <li><router-link to="/">처음으로</router-link></li>
                <li><router-link to="/profile">프로필</router-link></li>
                <li><router-link to="/portfolio">포트폴리오</router-link></li>
                <li><router-link to="/contact">연락처</router-link></li>
            </ul>
        </div>
        <div class="toggle">
            <input type="checkbox" name="btnToggle" id="btnToggle">
            <label for="btnToggle"></label>
        </div>
        <button class="mobileNavButton" @click="mobileNavOn">
            <span v-for="e in 3" :key="e"></span>
        </button>
    </div>
    <ul class="mobileNavList" v-if="navOn">
            <li><router-link to="/">처음으로</router-link></li>
            <li><router-link to="/profile">프로필</router-link></li>
            <li><router-link to="/portfolio">포트폴리오</router-link></li>
            <li><router-link to="/contact">연락처</router-link></li>
    </ul>
</template>

<style lang="scss">
.navBar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
}
.navLeft{
    display: flex;
    align-items: center;
    gap:80px;
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

.mobileNavButton{
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
.mobileNavButton.on{
	span:first-child{ top:19px; transform:rotate(45deg);}
	span:last-child{ top: 19px; transform:rotate(-45deg);}
}
.mobileNavList{
    display: none;
}
@media (max-width: 576px) {
    .navBar{
        padding: 10px 2%;
        position: relative;
        border-bottom: 1px solid seagreen;
        background-color: white;
        z-index: 3;
    }
    h1{
        display: none;
    }
    .navList{
        display: none;
    }
    .toggle{
        order:2;
    }
    .mobileNavButton{
        display: block;
        z-index: 2;
        order:-1;
    }
    .mobileNavList{
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        top:0px;
        height: 100%;
        padding: 120px 80px 0 20px;
        gap:40px;
        background-color: seagreen;
        z-index: 1;
    }
}
</style>
