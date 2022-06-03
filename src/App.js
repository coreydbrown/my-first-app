import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "udemy",
      amount: 24.99,
      date: new Date(2022, 6, 1),
    },
    {
      id: "e2",
      title: "father's day gifts",
      amount: 80.0,
      date: new Date(2022, 6, 5),
    },
    {
      id: "e3",
      title: "rent",
      amount: 905.0,
      date: new Date(2022, 7, 1),
    },
    {
      id: "e4",
      title: "groceries",
      amount: 106.27,
      date: new Date(2022, 4, 29),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
