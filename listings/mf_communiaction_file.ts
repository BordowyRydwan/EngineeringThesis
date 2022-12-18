ngOnInit(): void {
  window.addEventListener('reveal-upload' as keyof WindowEventMap, (customEvent: Event) => this.onReveal());
  window.addEventListener('hide-upload' as keyof WindowEventMap, (customEvent: Event) => this.onHide());
  window.addEventListener('clear-upload' as keyof WindowEventMap, (customEvent: Event) => this.onClear());
}

ngOnDestroy(): void {
  window.removeEventListener('reveal-upload' as keyof WindowEventMap, (customEvent: Event) => this.onReveal());
  window.removeEventListener('hide-upload' as keyof WindowEventMap, (customEvent: Event) => this.onHide());
  window.removeEventListener('clear-upload' as keyof WindowEventMap, (customEvent: Event) => this.onClear());
}

private onReveal(): void {
  this.visible = true;
  this.onClear();
}

private onHide(): void {
  this.visible = false;
  this.onClear();
}

private onClear(): void {
  this.file = undefined;
}