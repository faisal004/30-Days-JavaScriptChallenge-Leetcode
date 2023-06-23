class EventEmitter {
  callbacks = [];

  subscribe(event, cb) {
    if (!Array.isArray(this.callbacks[event])) {
      this.callbacks[event] = [];
    }

    this.callbacks[event].push(cb);

    return {
      unsubscribe: () => {
        const eventCallbacks = this.callbacks[event];

        if (eventCallbacks.length > 0) {
          const index = eventCallbacks.indexOf(cb);
          if (index !== -1) {
            eventCallbacks.splice(index, 1);
          }
        }

        if (eventCallbacks.length === 0) {
          delete this.callbacks[event];
        }
      }
    };
  }

  emit(event, args = []) {
    if (Array.isArray(this.callbacks[event])) {
      return this.callbacks[event].map(cb => cb(...args));
    }
    return [];
  }
}
