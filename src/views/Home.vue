<template>
  <div id="home">
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      checking: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      this.checking = true
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
