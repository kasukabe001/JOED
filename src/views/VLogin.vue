<template>
  <div class="app-dialog-row w600p">
    <div class="w30" id="auth-logo">
      <img src="@/assets/JOED5logo.png" alt="[JOED5]">
    </div>
    <div class="w70" id="auth">
      <div class="title">{{Title}}</div>

      <div>
        <label>
          パスワード :
          <el-badge value="パスワードが違います" :hidden="!LoginFailed">
            <input type="password" v-model="Password" id="password-entry-box" @keyup.13="PerformAuthentication" :disabled="StateLess" />
          </el-badge>
        </label>
      </div>

      <div>
          <el-button type="primary" style="float: right" @click="PerformAuthentication">ログイン</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewLogin',
  data () {
    return ({
      Password: '',
      LoginFailed: false
      // StateLess: false
    })
  },
  created () {
    // 認証が設定の有無を確認
    this.$store.dispatch('password/Authenticate', { PasswordString: '' }).catch(_ => {})
  },
  computed: {
    Title () {
      return this.$store.getters['system/ApplicationName'] +
        ' version ' +
        this.$store.getters['system/ApplicationVersion']
    },
    StateLess () { return !this.$store.getters['password/isPasswordRequired'] }
  },
  methods: {
    PerformAuthentication () {
      this.$store.dispatch('password/Authenticate', { PasswordString: this.Password })
        .then(() => this.$router.push({ name: 'list' }))
        .catch(() => { this.LoginFailed = true })
    }
  }
}
</script>

<style lang="sass">
#auth-logo
  display: flex
  flex-direction: row
  justify-content: space-around
  img
    width: 100px
    height: 100px
    padding: 10px
#auth
  display: flex
  flex-direction: column
  justify-content: space-around
  margin: 0 3rem
  div
    margin: 0.3rem 0
  div:first-child
    margin-top: 0
  div:last-child
    margin-bottom: 0
</style>
