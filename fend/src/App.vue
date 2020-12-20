<template>
  <Navigation :navItems="['NavItem1', 'NavItem2', 'NavItem3']"/>
  <MonthlyWidget/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import Navigation from './components/Navigation.vue';
import MonthlyWidget from './components/MonthlyWidget.vue';

@Options({
  components: {
    HelloWorld,
    Navigation,
    MonthlyWidget
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
