export type Events = "helloMessageEvent"

export type TEventEmitter = {
  events: Record<Events, ((data?: any) => void)[]>,
  on: (event: Events, callback: (data?: any) => void) => void,
  emit: (event: Events, data: any) => void,
  off: (event: Events, callback: (data?: any) => void) => void,
}

const EventEmitter: TEventEmitter = {
  events: Object.create(Object),
  // Подписка на событие
  on(event: Events, callback: () => void) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  // Отправка события
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  },
  // Отписка от события
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
};

export default EventEmitter;
