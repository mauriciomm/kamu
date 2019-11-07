const { I } = inject()

module.exports = {

  searchBar: '#searchbar',

  searchBook(bookISBN) {
    I.waitForElement(this.searchBar)
    I.fillField(this.searchBar, bookISBN)
    I.click('Search')
  },

  selectBook(bookISBN) {
    I.waitForText(bookISBN)
    I.click(bookISBN)
  },
}
