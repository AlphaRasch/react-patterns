import { useEffect, useState } from 'react';
import EventEmitter from '../utils/event-bus';

export const Listener = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleEvent = (data: { message: string }) => {
      setMessage(data.message);
    };

    // Подписываемся
    EventEmitter.on('helloMessageEvent', handleEvent);

    // Отписываемся при размонтировании
    return () => {
      EventEmitter.off('helloMessageEvent', handleEvent);
    };
  }, []);

  return <div>Сообщение: {message}</div>;
};
