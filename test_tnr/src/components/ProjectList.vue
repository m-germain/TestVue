<template>
  <div class="container column is-10">
    <!--div class="section">
      <div class="box">
        <div class="header">
          <p class="card-header-title">Header</p>
        </div>
        <div class="card-content">
          <div class="content">Content</div>
        </div>
      </div>
      <br />

      <div class="card is-hidden1">
        <div class="card-header">
          <p class="card-header-title">Header</p>
        </div>
        <div class="card-content">
          <div class="content">Content</div>
        </div>
      </div>
      <br />
    </div-->
    <div class="header ">
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-quarter">
          <p class="title is-5  has-text-left">Header</p>
        </div>
      </div>
      
    </div>
    <div class="">
      <div class="columns is-multiline is-mobile">
        <div v-for="item in items" :key="item" class="column is-one-quarter">
          <div class="box">
            <!--div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div-->
            <div class="card-content">
              <div class="media">
                <!--div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://cms.intersport.fr/wp-content/uploads/2016/08/logo_is.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div-->
                <div class="media-content has-text-centered">
                  <p class="title is-4">Intersport</p>
                  <!--p class="subtitle is-6">un autre truc</p-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public items = [1, 2, 3, 4, 5, 6, 7];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
