const { By, Key } = require('selenium-webdriver')

const { expect } = require('chai')

class Admin {
  constructor(driver) {
    this.driver = driver
  }

  async searchBookByISBN(bookISBN) {
    await this.driver.findElement(By.id('id_isbn')).sendKeys(bookISBN, Key.RETURN)
  }

  async validateInformationFound(bookISBN) {
    const idISBN = await this.driver.findElement(By.xpath('//*[@id="id_isbn"]')).getAttribute('value')
    expect(idISBN).to.equal(bookISBN)
  }

  async save() {
    await this.driver.findElement(By.xpath('//input[@name="_save"]')).click()
  }
}

module.exports = Admin
