const {
  By, until,
} = require('selenium-webdriver')

class Admin {
  constructor(driver) {
    this.driver = driver
  }

  async logOut() {
    const logoutButton = '//a[contains(@href, "/admin/logout/")]'
    await this.driver.wait(until.elementLocated(By.xpath(logoutButton))).click()
  }

  async navigateToHome() {
    const homeButton = '//a[contains(@href, "/admin/")]'
    await this.driver.wait(until.elementLocated(By.xpath(homeButton))).click()
  }

  async navigateToAddBookCopiesPage() {
    const addBookCopiesButton = '//a[contains(@href, "/admin/books/bookcopy/add/")]'
    await this.driver.wait(until.elementLocated(By.xpath(addBookCopiesButton))).click()
  }

  async navigateToBooksPage() {
    const addBookCopiesButton = '//a[contains(@href, "/admin/books/book/")]'
    await this.driver.wait(until.elementLocated(By.xpath(addBookCopiesButton))).click()
  }
}

module.exports = Admin
