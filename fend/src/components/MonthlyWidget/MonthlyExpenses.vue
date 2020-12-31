<template>
  <div class="monthly-expenses">
    <h2 class="section-header">Monthly Expenses</h2>
    <div class="add-expense">
      <input type="text" placeholder="Input expense name..." />
      <input type="text" placeholder="Estimated amount" />
      <input type="submit" value="Add" />
    </div>
    <ul class="expenses-list">
      <li v-for="expense in selectedMonthlyExpenses" :key="expense.id">
        <input type="text" :placeholder="'Expense name: ' + expense.name" />
        <input
          type="text"
          :placeholder="'Estimated amount: $' + expense.amountEstimated"
        />
        <input class="edit" type="submit" value="Edit" />
        <input
          v-if="expense.amountActual"
          type="text"
          :placeholder="'Actual amount: ' + expense.amountActual"
        />
        <input v-else type="text" placeholder="Enter actual amount" />
        <input type="submit" value="Submit" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Watch, Component, Prop, Vue } from "vue-property-decorator";
import {
  monthlyExpenses,
  MonthlyExpenseFields,
} from "../../mockData/monthlyExpenses";

//@Options({
//  props: {
//    month: String,
//  },
//  computed: {
//    //selectedMonthlyExpenses: function() {
//    //  return monthlyExpenses[this.month];
//    //},
//  },
//  watch: {
//    month: function() {
//      console.log('month')
//    }
//  }
//})

@Component
export default class MonthlyExpenses extends Vue {
  @Prop() month!: string;
  //selectedMonthlyExpenses!: MonthlyExpenseFields[];
  get selectedMonthlyExpenses(): MonthlyExpenseFields[] {
    return monthlyExpenses[this.month];
  }

  @Watch('month')
  test(): void {
    console.log('test')
  }
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
