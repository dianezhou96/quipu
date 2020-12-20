<template>
  <div class="monthly-widget">
    This is the monthly widget
    <div>We might need a month selector</div>
    <input type='text' placeholder='Maybe input text boxes'/>
    <div>
      <input type='submit' value='And buttons too'>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})

export default class Navigation extends Vue {
    navItems!: string[]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.monthly-widget {
  flex-grow: 1;
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
