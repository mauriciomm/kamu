const {
  By, until,
} = require('selenium-webdriver')

class AddBookCopies {
  constructor(driver) {
    this.driver = driver
    this.firstResultSelect2 = 'li[contains(@class, "select2-results__option--highlighted")]'
  }

  async selectBook(bookISBN) {
    await this.driver.wait(until.elementLocated(By.xpath('//span[@aria-labelledby="select2-id_book-container"]'))).click()
    await this.driver.wait(until.elementLocated(By.xpath('//input[@class="select2-search__field"]'))).sendKeys(bookISBN)
    await this.driver.wait(until.elementLocated(By.xpath(`//ul[@id="select2-id_book-results"]/${this.firstResultSelect2}`))).click()
  }

  async selectLibrary(name) {
    await this.driver.wait(until.elementLocated(By.xpath('//span[@aria-labelledby="select2-id_library-container"]'))).click()
    await this.driver.wait(until.elementLocated(By.xpath('//input[@class="select2-search__field"]'))).sendKeys(name)
    await this.driver.wait(until.elementLocated(By.xpath(`//ul[@id="select2-id_library-results"]/${this.firstResultSelect2}`))).click()
  }

  async save() {
    await this.driver.findElement(By.xpath('//input[@name="_save"]')).click()
  }
}

module.exports = AddBookCopies
