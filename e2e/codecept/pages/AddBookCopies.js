const { I } = inject()

module.exports = {
  fields: {
    isbn: '#id_isbn',
  },
  submitButton: 'Submit',
  textFindBook: 'Find book by ISBN-13',
  textBookFound: 'Found! Go ahead, modify book template and save.',

  selectFirstResult() {
    I.waitForElement('.select2-results__option--highlighted')
    I.click('.select2-results__option--highlighted')
  },

  selectBook(bookISBN) {
    const bookSelect = { css: '[aria-labelledby=select2-id_book-container]' }
    I.waitForElement(bookSelect)
    I.click(bookSelect)
    I.fillField('.select2-search__field', bookISBN)
    this.selectFirstResult()
  },

  selectLibrary(libraryName) {
    const librarySelect = { css: '[aria-labelledby=select2-id_library-container]' }
    I.waitForElement(librarySelect)
    I.click(librarySelect)
    I.fillField('.select2-search__field', libraryName)
    this.selectFirstResult()
  },

  save() {
    I.click('Save')
  },
}
