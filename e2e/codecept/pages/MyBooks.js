const { I, bookDetailFragment, bookListFragment } = inject()

module.exports = {
  openBookPopUpInfo(bookName) {
    I.waitForText(bookName)
    bookListFragment.openBookPopUpInfo(bookName)
  },

  borrowBook() {
    bookDetailFragment.borrow()
  },

  returnBook() {
    bookDetailFragment.return()
  },

  closePopUpInfo() {
    bookDetailFragment.close()
  },
}
