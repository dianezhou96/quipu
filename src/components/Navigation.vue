<template>
  <div class="navigation">
    Navigation
    <ul>
      <li v-for='(item, index) in navItems' :key='index'>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    navItems : Array,
  }
})
export default class Navigation extends Vue {
    navItems!: string[]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  background-color: lightgreen;
  width: 20%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
