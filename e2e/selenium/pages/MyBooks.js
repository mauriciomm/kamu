const BookList = require('../fragments/BookList')
const BookDetail = require('../fragments/BookDetail')

class MyBooks {
  constructor(driver) {
    this.driver = driver
    this.bookListFragment = new BookList(driver)
    this.bookDetailFragment = new BookDetail(driver)
  }

  async openBookPopUpInfo(bookName) {
    await this.bookListFragment.openBookPopUpInfo(bookName)
  }

  async returnBook() {
    await this.bookDetailFragment.return()
  }

  async closePopUpInfo() {
    await this.bookDetailFragment.closePopUpInfo()
  }
}

module.exports = MyBooks
