const { By, until } = require('selenium-webdriver')

class BookList {
  constructor(driver) {
    this.driver = driver
  }

  async borrow() {
    await this.driver.wait(until.elementLocated(By.css('div.modal-book__actions-buttons > button.borrow'))).click()
  }

  async return() {
    await this.driver.wait(until.elementLocated(By.css('div.modal-book__actions-buttons > button.return'))).click()
  }

  async closePopUpInfo() {
    await this.driver.wait(until.elementLocated(By.css('button.modal-book__close'))).click()
  }
}

module.exports = BookList
