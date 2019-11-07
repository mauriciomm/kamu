const { By, until } = require('selenium-webdriver')

class ChangeRegion {
  constructor(driver) {
    this.driver = driver
  }

  async selectLibrary(name) {
    await this.driver.wait(until.elementLocated(By.name(name))).click()
  }
}

module.exports = ChangeRegion
