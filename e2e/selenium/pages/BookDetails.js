const {
  By, until, Key,
} = require('selenium-webdriver')

class BookDetails {
  constructor(driver) {
    this.driver = driver
  }

  async delete() {
    await this.driver.wait(until.elementLocated(By.className('deletelink'))).click()
    await this.driver.wait(until.elementLocated(By.xpath('//input[@type="submit"]'))).click()
  }
}

module.exports = BookDetails
