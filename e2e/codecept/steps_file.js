
// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login(username, password) {
      this.fillField('username', username)
      this.fillField('password', password)
      this.click('Log in')
    },
    selectRecifeLibrary() {
      this.waitForText('Recife')
      this.click('#content > div > ul > div:nth-child(5)')
    },
    openBookInfo(bookName, bookInfo) {
      this.click(locate('.book-info').withText(bookName))
      this.waitForText(bookInfo)
    },
    borrowBook() {
      this.click(locate('button').inside('.modal-book'))
      this.waitForText('Borrowed with:', 2)
    },
    returnBook() {
      this.waitForText('Borrowed with:', 2)
      this.click(locate('button').inside('.modal-book'))
    },
    closePopUp() {
      this.click(locate('button').inside(locate('div').withAttr({ role: 'dialog'})))
    },
  })
}
