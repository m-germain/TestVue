<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action class="box">
              <div class="field">
                <label for class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" placeholder="e.g. bsmith" class="input" required />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" placeholder="*******" class="input" required />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <!---div class="field">
                <label for class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div-->
              <div class="field">
                <button @click="login" class="button is-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";

@Component({
  computed: {
    ...mapGetters("auth", [
      "authenticating",
      "authenticationError",
      "authenticationErrorCode"
    ])
  },
  methods: {
    ...mapActions("auth", ["login"])
  }
})
export default class Login extends Vue {
  private username = "";
  private password = "";

  handleLogin() {
    if (this.username != "" && this.password != "") {
      //this.login({ username: this.username, password: this.password });
      this.password = "";
    }
  }
}
</script>
