const { I } = inject()

module.exports = {
  fields: {
    isbn: '#id_isbn',
  },
  submitButton: 'Submit',
  textFindBook: 'Find book by ISBN-13',
  textBookFound: 'Found! Go ahead, modify book template and save.',

  searchBookByISBN(bookISBN) {
    I.waitForText(this.textFindBook)
    I.waitForElement(this.fields.isbn)
    I.fillField(this.fields.isbn, bookISBN)
    I.click(this.submitButton)
  },

  validateInformationFound(bookISBN) {
    I.see(this.textBookFound)
    I.seeElement(locate(this.fields.isbn).withAttr({ value: bookISBN }))
  },

  save() {
    I.click('Save')
  },
}
