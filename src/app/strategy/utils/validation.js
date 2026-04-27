export const ValidationStrategies = {
  required: (value) => 
    value ? null : 'Это поле обязательно',
  email: (value) => 
    /\S+@\S+\.\S+/.test(value) ? null : 'Некорректный email',
  minLength: (length) => (value) => 
    value.length >= length ? null : `Минимум ${length} символов`,
};
