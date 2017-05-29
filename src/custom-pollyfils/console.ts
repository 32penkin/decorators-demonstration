console.log = function(...args: any[]) {
  this.apply(console, args);
  const event = new CustomEvent('log', {detail: args});
  document.dispatchEvent(event);
}.bind(console.log);

