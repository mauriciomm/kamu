const {
  Key, By,
} = require('selenium-webdriver')

class LoginPage {
  constructor(driver) {
    this.driver = driver
  }

  async sendForm() {
    await this.driver.findElement(By.name('username')).sendKeys(process.env.USERNAME)
    await this.driver.findElement(By.name('password')).sendKeys(process.env.PASSWORD, Key.RETURN)
  }
}

module.exports = LoginPage
