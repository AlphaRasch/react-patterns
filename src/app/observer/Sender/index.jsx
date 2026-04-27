import { useState } from 'react';
import EventEmitter from '../utils/event-bus';
import { Button, Input } from './styles';

export const Sender = () => {
    const [message, setMessage] = useState("")

    const sendMessage = () => {
        EventEmitter.emit('helloMessageEvent', { message: message });
    };

    return (
        <>
            <Input value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={sendMessage}>Отправить сообщение</Button>
        </>
    )
};
