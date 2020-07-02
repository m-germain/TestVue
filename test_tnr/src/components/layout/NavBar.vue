<template>
  <b-navbar class="is-dark">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://backoffice-preprod.onestock-retail.com/dist/images/logo_onestock.png?1590659038"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item>
          <b-tag type="is-info" size="is-medium">Préprod</b-tag>
        </b-navbar-item>
        <b-navbar-item class="is-size-5">Bonjour, {{username}}</b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button rounded class="button is-light">
              <b-icon pack="fas" icon="account" size="is-small"></b-icon>
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  //@Prop() private msg!: string;

  get username(): string {
      return this.$store.state.username;
  }
}
</script>

<style scoped>
</style>
