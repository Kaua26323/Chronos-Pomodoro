let timeoutId;

self.onmessage = function (event) {
  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  if (timeoutId) clearTimeout(timeoutId);

  if (!activeTask || !secondsRemaining) return;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  function tick() {
    const nowDate = Date.now();
    const countDownSeconds = Math.ceil((endDate - nowDate) / 1000);

    if (countDownSeconds >= 0) {
      self.postMessage(countDownSeconds);
      timeoutId = setTimeout(tick, 1000);
    } else {
      self.postMessage(0);
    }
  }

  tick();
};
