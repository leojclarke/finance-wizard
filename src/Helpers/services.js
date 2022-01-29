function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function getLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

function getTransaction(id, transactions) {
  console.log({ id });
  return transactions.find((transaction) => transaction.id === id);
}

export { setLocal, getLocal, getTransaction };
