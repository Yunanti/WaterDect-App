function setSelect(keyword) {
  return {
    type: 'setSelect',
    payload: keyword,
  };
}

function setActivePage(keyword) {
  return {
    type: 'setActivePage',
    payload: keyword,
  };
}

export { setSelect, setActivePage };
