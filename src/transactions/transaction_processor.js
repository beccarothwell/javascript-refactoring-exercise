function processTransactions(transactions) {
  if (transactions === undefined) {
    throw new Error("Undefined collection of transactions");
  }

  const transactionCountObj = transactions.reduce(
    (transactionsCount, transaction) => {
      return {
        ...transactionsCount,
        [transaction]: (transactionsCount[transaction] || 0) + 1,
      };
    },
    {}
  );

  const sortByAmountThenName = Object.entries(transactionCountObj).sort(
    (a, b) => {
      return b[1] - a[1] || a[0] > b[0] || -(a[0] < b[0]);
    }
  );

  return sortByAmountThenName.map((arr) => arr.join(" "));
}

module.exports = processTransactions;
