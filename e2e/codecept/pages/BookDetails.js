const { I } = inject()

module.exports = {
  delete() {
    I.click('Delete')
    I.wait('Yes, I\'m sure')
    I.click('Yes, I\'m sure')
    I.wait('The book "Refactoring (Martin Fowler)" was deleted successfully.')
  },
}
