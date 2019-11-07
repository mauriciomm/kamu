const { By, until } = require('selenium-webdriver')

class BookList {
  constructor(driver) {
    this.driver = driver
  }

  async openBookPopUpInfo(bookName) {
    const elementXpath = `.//h1[contains(text(), "${bookName}")]`
    await this.driver.wait(until.elementLocated(By.xpath(elementXpath))).click()
  }
}

module.exports = BookList
