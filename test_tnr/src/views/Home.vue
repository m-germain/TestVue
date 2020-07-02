<template>
  <div class="home">
    <NavBar />
    <div class="container is-fullhd">
      <SectionHeader title="Yo les nazes :"/>
      <ProjectList/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/layout/NavBar.vue";
import SectionHeader from "@/components/layout/SectionHeader.vue";
import ProjectList from "@/components/ProjectList.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SectionHeader,
    ProjectList
    //HelloWorld
  }
};
</script>
