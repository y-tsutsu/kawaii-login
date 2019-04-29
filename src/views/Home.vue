<template>
  <div id="home">
    <lottie :options="heartLottie" :height="300" :width="300" :animCreated="handleAnimation"/>
    <el-card class="login-card">
      <div class="login-title">かわいいログイン</div>
      <el-form :model="loginForm">
        <el-form-item label="メールアドレス" prop="email">
          <el-input type="text" v-model="loginForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="パスワード" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-button type="primary" :loading="checking" @click="handleLogin">ログイン</el-button>
      </el-form>
    </el-card>
    <el-dialog :visible.sync="dialogVisible">
      <div class="login-title">Welcome!!💗</div>
      <lottie :options="confettiLottie" :height="300" :width="300" :animCreated="handleAnimation"/>
    </el-dialog>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue'
import * as heart from '@/assets/heart.json'
import * as confetti from '@/assets/confetti.json'

export default {
  name: 'Home',
  components: {
    Lottie
  },
  data () {
    return {
      checking: false,
      dialogVisible: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    heartLottie () {
      return { animationData: heart }
    },
    confettiLottie () {
      return { animationData: confetti }
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
    },
    handleLogin () {
      this.checking = true
      setTimeout(() => {
        this.checking = false
        this.dialogVisible = true
      }, 1000)
    }
  }
}
</script>

<style scoped>
.login-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
}
.login-card {
  max-width: 800px;
  margin: auto;
}
</style>
