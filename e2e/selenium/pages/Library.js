const BookList = require('../fragments/BookList')
const BookDetail = require('../fragments/BookDetail')

class Library {
  constructor(driver) {
    this.driver = driver
    this.bookListFragment = new BookList(driver)
    this.bookDetailFragment = new BookDetail(driver)
  }

  async openBookPopUpInfo(bookName) {
    await this.bookListFragment.openBookPopUpInfo(bookName)
  }

  async borrowBook() {
    await this.bookDetailFragment.borrow()
  }

  async closePopUpInfo() {
    await this.bookDetailFragment.closePopUpInfo()
  }
}

module.exports = Library
