const {
  By, until, Key,
} = require('selenium-webdriver')

class Books {
  constructor(driver) {
    this.driver = driver
  }

  async searchBook(bookISBN) {
    await this.driver.wait(until.elementLocated(By.id('searchbar'))).sendKeys(bookISBN, Key.RETURN)
  }

  async selectBook(bookISBN) {
    await this.driver.wait(until.elementLocated(By.xpath(`//a[contains(text(), "${bookISBN}")]`))).click()
  }
}

module.exports = Books
