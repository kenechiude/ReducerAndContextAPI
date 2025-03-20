import { useState } from "react";
import { useData } from "../context/AppContext";

export default function AcctOperations() {
  const { balance, userName } = useData();

  const [depAmount, setDepAmount] = useState("");
  const [WithdrawAmt, setWithdrawAmt] = useState("");
  const [loanReqAmt, setLoanReqAmt] = useState("");

  return (
    userName && (
      <div className="acct-opr-div">
        <div>
          <h1 className="heading">🏦 Redux Bank App ⚛</h1>
          <h2>👋 Welcome Back, {userName}</h2>
          <span>{balance}</span>
        </div>

        <span>Your Account Operations</span>

        <div>
          <span>Deposit</span>
          <input
            type="text"
            value={depAmount}
            onChange={(e) => setDepAmount(e.target.value)}
          />
          <button>DEPOSIT</button>

          <span>Withdraw</span>
          <input
            type="text"
            value={WithdrawAmt}
            onChange={(e) => setWithdrawAmt(e.target.value)}
          />
          <button>WITHDRAW</button>

          <span>Request Loan</span>
          <input
            type="number"
            placeholder="Loan Amount"
            value={loanReqAmt}
            onChange={(e) => setLoanReqAmt(e.target.value)}
          />
          <button>REQUEST LOAN</button>
        </div>
      </div>
    )
  );
}
