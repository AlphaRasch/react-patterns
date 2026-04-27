import { useState } from 'react';
import { Button, Form, FormColumn, Input, Title, Wrapper } from './styles'
import { ValidationStrategies } from './utils/validation'

export const Strategy = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = null;
        
        // Стратегия 1
        if (name === 'email') {
            error = ValidationStrategies.required(value) || ValidationStrategies.email(value);
        }
        // Стратегия 2
        if (name === 'password') {
            error = ValidationStrategies.required(value) || ValidationStrategies.minLength(6)(value);
        }
        // Добавляем любые
        
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.email && !errors.password) {
            console.log('Отправка данных:', formData);
        }
    };

    return (
        <Wrapper>
            <Title>Strategy</Title>
            <Form onSubmit={handleSubmit}>
                <FormColumn>
                    <Input name="email" onChange={handleChange} placeholder="Email" />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </FormColumn>
                <FormColumn>
                    <Input name="password" type="password" onChange={handleChange} placeholder="Пароль" />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </FormColumn>
                <Button type="submit">Отправить</Button>
            </Form>
        </Wrapper>
    )
}