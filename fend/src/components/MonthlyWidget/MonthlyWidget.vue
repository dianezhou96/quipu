<template>
  <div class="monthly-widget">
    <h1 class="title">Monthly Widget</h1>
    <h3 class="section-header">Select month</h3>
    <input v-model="month" type="month" />
    <MonthlyExpenses v-if="month" :month="month" />
    <CategoricalBudgets v-if="month" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MonthlyExpenses from "./MonthlyExpenses.vue";
import CategoricalBudgets from "./CategoricalBudgets.vue";

@Options({
  components: { MonthlyExpenses, CategoricalBudgets },
})
export default class MonthlyWidget extends Vue {
  month = null;
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
