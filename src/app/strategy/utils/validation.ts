export const ValidationStrategies = {
  required: (value: string) => 
    value ? null : 'Это поле обязательно',
  email: (value: string) => 
    /\S+@\S+\.\S+/.test(value) ? null : 'Некорректный email',
  minLength: (length: number) => (value: string) => 
    value.length >= length ? null : `Минимум ${length} символов`,
};
