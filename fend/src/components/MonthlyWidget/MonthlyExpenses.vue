<template>
  <div class="monthly-expenses">
    <h2 class="section-header">Monthly Expenses</h2>
    <div class="add-expense">
      <input
        v-model="expenseName"
        type="text"
        placeholder="Input expense name..."
      />
      <input
        v-model="amountEstimated"
        type="text"
        placeholder="Estimated amount"
      />
      <input
        type="submit"
        value="Add"
        v-on:click="addExpense(expenseName, amountEstimated)"
      />
    </div>
    <table class="expenses-table">
      <thead>
        <tr>
          <th v-for="key in expenseKeys" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in selectedMonthlyExpenses" :key="expense.id">
          <td v-for="key in expenseKeys" :key="key">
            {{ expense[key] }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <ul class="expenses-list">
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
    </ul> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  monthlyExpenses,
  MonthlyExpenseFields,
} from "../../mockData/monthlyExpenses";
import axios from "axios";

const expenseKeys = ["id", "name", "amountEstimated", "amountActual"];

@Component
export default class MonthlyExpenses extends Vue {
  @Prop() month!: string;
  get selectedMonthlyExpenses(): MonthlyExpenseFields[] {
    return monthlyExpenses[this.month];
  }
  async addExpense(expenseName: string, amountEstimated: string) {
    const post = {
      userId: 7,
      date: this.month,
      name: expenseName,
      estimated: amountEstimated,
      type: "monthly_expense",
    };
    return await axios.post("/monthly_widget", post);
  }
}
</script>

<style scoped lang="scss">
.monthly-expenses {
  display: flex;
  flex-direction: column;
}

.expenses-table {
  align-self: center;
}
// ul {
//   list-style-type: none;
//   padding: 0;

//   .edit {
//     margin-right: 10px;
//   }
// }
</style>
