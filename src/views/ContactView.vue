<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser';

const mailSuccess = ref(false);
const form = ref();
function sendEmail() {
    emailjs.sendForm('service_hsa8g5f', 'template_f150vie', form.value, 'O6tORrpyEOpeDORY1')
  .then((result) => {
      console.log('SUCCESS!', result.text);
      mailSuccess.value = true

  }, (error) => {
      console.log('FAILED...', error.text);
      alert("메일 전송에 실패했습니다.")
  });
}
</script>

<template>
  <div class="wrapper">
    <h2 class="title">연락처</h2>
    <form ref="form" @submit.prevent="sendEmail">
      <div>
          <div class="sec2">
              <label for="user_name">이름<span>Name</span></label>
              <input type="text" name="name" id="user_name" required>
          </div>
          <div class="sec2">
              <label for="user_email">메일 주소<span>E-mail address</span></label>
              <input type="text" name="email" id="user_email" required>
          </div>
          <div class="sec1">
              <label for="message">메세지 내용<span>Message</span></label>
              <textarea id="message" name="message" required></textarea>
          </div>
      </div>
      <p v-if="mailSuccess" class="reply">메시지가 성공적으로 전송되었습니다. 1~2일 이내에 확인 후 답변드리겠습니다.</p>
      <button class="submit">전송</button>
    </form>
  </div>
</template>

<style>
</style>
