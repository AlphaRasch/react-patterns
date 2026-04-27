const targetData = { name: 'React' };

const proxyData = new Proxy(targetData, {
  get(target, prop) {
    alert(`Получение свойства: ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    alert(`Изменение ${prop} на ${value}`);
    target[prop] = value;
    return true;
  }
});

export const getProxy = () => {
  return proxyData
}