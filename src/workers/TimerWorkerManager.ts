import type { TaskStateModel } from '@/models/TaskStateModel';

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;
  private isTerminated: boolean = false;

  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }

    return instance;
  }

  postMessage(message: TaskStateModel) {
    if (this.isTerminated) {
      throw new Error('Error: Cannot send message to a terminated Worker!');
    }

    this.worker.postMessage(message);
  }

  onmessage(callback: (e: MessageEvent) => void) {
    if (this.isTerminated) {
      throw new Error('Error: Cannot attach listener to a terminated Worker!');
    }
    this.worker.onmessage = callback;
  }

  terminate() {
    this.worker.terminate();
    this.isTerminated = true;
    instance = null;
  }
}
