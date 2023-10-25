const transactionResults = [];

function processTransactions(transactions) {
  if (transactions === undefined) {
    throw new Error("Undefined collection of transactions");
  }

  /*let transactionCount = {};

  const numberOfTransactions = transactions.length;

  for (var i = 0; i < numberOfTransactions; i++) {
    const transaction = transactions[i];
    transactionCount[transaction]
      ? (transactionCount[transaction] += 1)
      : (transactionCount[transaction] = 1);
  }*/

  let transactionCount = transactions.reduce(
    (transactionsCount, transaction) => {
      return {
        ...transactionsCount,
        [transaction]: (transactionsCount[transaction] || 0) + 1,
      };
    },
    {}
  );

  transactionCount = sortByAmountThenName(transactionCount);

  // Place them back in array for returning
  Object.keys(transactionCount).forEach(function (key, index) {
    transactionResults[index] = `${key} ${transactionCount[key]}`;
  });

  return transactionResults;
}

function sortByAmountThenName(transactionCount) {
  let sortedKeys = Object.keys(transactionCount).sort(function sortingFunction(
    itemOne,
    itemTwo
  ) {
    return (
      transactionCount[itemTwo] - transactionCount[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  let sortedResults = {};
  for (let objectKey of sortedKeys) {
    sortedResults[objectKey] = transactionCount[objectKey];
  }

  return sortedResults;
}

module.exports = processTransactions;
