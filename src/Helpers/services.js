function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function getLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

export { setLocal, getLocal };
