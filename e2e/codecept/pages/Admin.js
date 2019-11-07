const { I } = inject()

module.exports = {
  logOut() {
    const logOutLink = locate('a').withAttr({ href: '/admin/logout/' })
    I.waitForElement(logOutLink)
    I.click(logOutLink)
    I.waitForText('Logged out')
  },

  navigateToHome() {
    I.click('Home')
    I.waitForText('Kamu')
    I.waitForText('AUTHENTICATION AND AUTHORIZATION')
    I.waitForText('Recent actions')
  },

  navigateToAddBookCopiesPage() {
    const addBookCopiesLink = locate('a').withAttr({ href: '/admin/books/bookcopy/add/' })
    I.waitForElement(addBookCopiesLink)
    I.click(addBookCopiesLink)
  },

  navigateToBooksPage() {
    const booksLink = locate('a').withAttr({ href: '/admin/books/book/' })
    I.waitForElement(booksLink)
    I.click(booksLink)
  },
}
