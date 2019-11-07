const { By, until } = require('selenium-webdriver')

class Menu {
  constructor(driver) {
    this.driver = driver
  }

  async navigateToMyBooksPage() {
    await this.driver.wait(until.elementLocated(By.id('my-books-button'))).click()
  }

  async navigateToAdminPage() {
    await this.driver.wait(until.elementLocated(By.id('admin-button'))).click()
  }

  async navigateToAddBookPage() {
    await this.driver.wait(until.elementLocated(By.id('add-book-button'))).click()
  }
}

module.exports = Menu
