const setLocal = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

const getLocal = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export default (setLocal, getLocal);
