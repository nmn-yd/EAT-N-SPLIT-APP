import { useState } from "react";

function BillForm({ selectedFriend, onBillPayment }) {
  const [totalBill, setTotalBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [billPayer, setBillPayer] = useState("-");
  const friendExpense = totalBill ? totalBill - yourExpense : "";

  function handleBilling(e) {
    e.preventDefault();
    if (!totalBill || !yourExpense) return;

    if (billPayer === "+") {
      onBillPayment(friendExpense);
    } else if (billPayer === "-") {
      onBillPayment(-yourExpense);
    }
  }

  return (
    <div className="form">
      <form className="input-form" onSubmit={handleBilling}>
        <h2>SPLIT A BILL WITH {selectedFriend.name.toUpperCase()}</h2>
        <label>Bill Value:</label>
        <input
          value={totalBill}
          type="number"
          id="bill-value"
          name="bill-value"
          onChange={(e) => setTotalBill(Number(e.target.value))}
          required
        />

        <label>Your Expense:</label>
        <input
          value={yourExpense}
          type="number"
          id="your-expense"
          name="your-expense"
          onChange={(e) =>
            setYourExpense(
              Number(e.target.value) > totalBill
                ? yourExpense
                : Number(e.target.value)
            )
          }
          required
        />

        <label>{selectedFriend.name}&apos;s Expense:</label>
        <input
          value={totalBill - yourExpense}
          type="number"
          id="antony-expense"
          name="antony-expense"
          disabled
          required
        />
        <label>Select an option:</label>
        <select
          id="options"
          name="options"
          onChange={(e) => {
            console.log(typeof e.target.value);
            console.log(e.target.value);
            setBillPayer(e.target.value);
          }}
        >
          <option value="-">{selectedFriend.name}</option>
          <option value="+">You</option>
        </select>
        <button className="button-89" role="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BillForm;
