<template>
  <div class="monthly-expenses">
    <h2 class="section-header">Monthly Expenses</h2>
    <div class="add-expense">
      <input type="text" placeholder="Input expense name..." />
      <input type="text" placeholder="Estimated amount" />
      <input type="submit" value="Add" />
    </div>
    <ul class="expenses-list">
      <li>
        <input type="text" placeholder="Expense name 1" />
        <input type="text" placeholder="Estimated amount" />
        <input class="edit" type="submit" value="Edit" />
        <input type="text" placeholder="Actual amount" />
        <input type="submit" value="Submit" />
      </li>
      <li>
        <input type="text" placeholder="Expense name 2" />
        <input type="text" placeholder="Estimated amount" />
        <input class="edit" type="submit" value="Edit" />
        <input type="text" placeholder="Actual amount" />
        <input type="submit" value="Submit" />
      </li>
      <li>
        <input type="text" placeholder="Expense name 3" />
        <input type="text" placeholder="Estimated amount" />
        <input class="edit" type="submit" value="Edit" />
        <input type="text" placeholder="Actual amount" />
        <input type="submit" value="Submit" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
  }
})

export default class MonthlyExpenses extends Vue {
}
</script>

<style scoped lang="scss">
.predicted-expenses {
    flex-grow: 1;
    padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;

  .edit {
    margin-right: 10px;
  }
}
</style>