<template>
  <div id="app">
    <Navigation :navItems="['NavItem1', 'NavItem2', 'NavItem3']" />
    <MonthlyWidget />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation.vue";
import MonthlyWidget from "./components/MonthlyWidget/MonthlyWidget.vue";

@Component({
  components: {
    HelloWorld,
    Navigation,
    MonthlyWidget,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100%;
}
</style>
