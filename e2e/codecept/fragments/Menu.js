const { I } = inject();

module.exports = {

  // insert your locators and methods here
  root: '#app > header',
  myBooksButton: '#my-books-button',
  adminButton: '#admin-button',
  addBook: '#add-book-button',

  navigateToMyBooksPage() {
    within(this.root, () => {
      I.click(this.myBooksButton)
    })
  },

  navigateToAdminPage() {
    within(this.root, () => {
      I.click(this.adminButton)
    })
  },

  navigateToAddBookPage() {
    within(this.root, () => {
      I.click(this.addBook)
    })
  }
}
