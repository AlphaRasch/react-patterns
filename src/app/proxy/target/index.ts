export type TargetData = Record<string, string>

const targetData: TargetData = { name: 'React' };

const proxyData = new Proxy(targetData, {
  get(target, prop: keyof typeof targetData) {
    alert(`Получение свойства: ${prop}`);
    return target[prop];
  },
  set(target, prop: keyof typeof targetData, value: string) {
    alert(`Изменение ${prop} на ${value}`);
    target[prop] = value;
    return true;
  }
});

export const getProxy = () => {
  return proxyData
}