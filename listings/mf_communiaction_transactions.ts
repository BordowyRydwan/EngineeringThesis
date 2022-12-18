ngOnInit(): void {
  this.invoices = this.transaction.invoices?.items!;
  const customEvent = new CustomEvent('reveal-upload');
  window.dispatchEvent(customEvent);
}

ngOnDestroy(): void {
  const customEvent = new CustomEvent('hide-upload');
  window.dispatchEvent(customEvent);
  window.removeEventListener('file-upload' as keyof WindowEventMap, this.addInvoiceEvent);
}

addInvoiceEvent = (evt: Event) => {
  const { detail } = <CustomEvent>evt || {};
  this.addInvoice(detail);
}