const { I } = inject()

module.exports = {

  // insert your locators and methods here
  header: locate('div').withAttr({ role: 'dialog' }),
  info: '.modal-book',
  borrowButton: 'button',
  returnButton: 'button',
  closeButton: 'button',

  borrow() {
    within(this.info, () => {
      I.click(this.borrowButton)
    })
  },

  return() {
    within(this.info, () => {
      I.click(this.returnButton)
    })
  },

  close() {
    within(this.header, () => {
      I.click(this.closeButton)
    })
  },
}
