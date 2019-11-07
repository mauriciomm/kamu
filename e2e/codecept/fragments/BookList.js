const { I } = inject()

module.exports = {

  // insert your locators and methods here
  root: '.book-list',

  openBookPopUpInfo(bookName) {
    within(this.root, () => {
      I.click(locate('.book-info').withText(bookName))
    })
  },
}
