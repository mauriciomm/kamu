// require('chromedriver');
const chai = require('chai')

const { expect } = chai
const {
  Builder, By, logging,
} = require('selenium-webdriver')

const chrome = require('selenium-webdriver/chrome')

const AddBookCopiesPage = require('../pages/AddBookCopies')
const AddBookPage = require('../pages/AddBook')
const AdminPage = require('../pages/Admin')
const BookDetailsPage = require('../pages/BookDetails')
const BooksPage = require('../pages/Books')
const ChangeRegionPage = require('../pages/ChangeRegion')
const LibraryPage = require('../pages/Library')
const LoginPage = require('../pages/Login')
const MenuFragment = require('../fragments/Menu')
const MyBooksPage = require('../pages/MyBooks')

// logging.installConsoleHandler()
// logging.getLogger('webdriver.http').setLevel(logging.Level.ALL)

describe('User Jorneys', () => {
  let driver
  let bodyText
  let addBookPage
  let addBookCopiesPage
  let adminPage
  let bookDetailsPage
  let booksPage
  let changeRegionPage
  let libraryPage
  let loginPage
  let menuFragment
  let myBooksPage

  before(async () => {
    driver = await new Builder()
      .forBrowser('chrome')
      // .setChromeService(
      //   new chrome.ServiceBuilder()
      //     .enableVerboseLogging()
      //     .setStdio('inherit'),
      // )
      .setChromeOptions(
        new chrome.Options().headless(),
      )
      .build()

    addBookPage = new AddBookPage(driver)
    addBookCopiesPage = new AddBookCopiesPage(driver)
    adminPage = new AdminPage(driver)
    booksPage = new BooksPage(driver)
    bookDetailsPage = new BookDetailsPage(driver)
    changeRegionPage = new ChangeRegionPage(driver)
    libraryPage = new LibraryPage(driver)
    loginPage = new LoginPage(driver)
    menuFragment = new MenuFragment(driver)
    myBooksPage = new MyBooksPage(driver)
  })

  beforeEach(async () => {
    await driver.get('http://localhost:8000')
  })

  it('UJ1 - Borrow and return a book', async () => {
    const bookName = 'Advanced Analytics with Spark'
    const libraryName = 'Recife'

    await loginPage.sendForm()

    await changeRegionPage.selectLibrary(libraryName)

    await libraryPage.openBookPopUpInfo(bookName)
    await libraryPage.borrowBook()
    await libraryPage.closePopUpInfo()

    await menuFragment.navigateToMyBooksPage()

    await myBooksPage.openBookPopUpInfo(bookName)
    await myBooksPage.returnBook()
    await myBooksPage.closePopUpInfo()


    await driver.navigate().refresh()

    bodyText = await driver.findElement(By.id('content')).getText()
    expect(bodyText).to.not.have.string(bookName)

    await menuFragment.navigateToAdminPage()

    await adminPage.logOut()

    // bodyText = await driver.findElement(By.id('content')).getText()
    // bodyText = await driver.wait(until.elementLocated(By.id('content'))).getText()
    // expect(bodyText).to.have.string('Logged out')
  })

  // eslint-disable-next-line jest/no-focused-tests
  it.only('UJ2 - Add and Delete book from Library', async () => {
    const bookISBN = '0134757599'

    await loginPage.sendForm()

    await menuFragment.navigateToAddBookPage()

    await addBookPage.searchBookByISBN(bookISBN)

    const info = await driver.findElement(By.xpath('//li[@class="info"]')).getText()
    expect(info).to.equal('Found! Go ahead, modify book template and save.')

    const idISBN = await driver.findElement(By.xpath('//*[@id="id_isbn"]')).getAttribute('value')
    expect(idISBN).to.equal(bookISBN)

    await addBookPage.save()

    await adminPage.navigateToHome()
    await adminPage.navigateToAddBookCopiesPage()

    await addBookCopiesPage.selectBook(bookISBN)
    await addBookCopiesPage.selectLibrary('Recife')
    await addBookCopiesPage.save()

    await adminPage.navigateToHome()
    await adminPage.navigateToBooksPage()

    await booksPage.searchBook(bookISBN)
    await booksPage.selectBook(bookISBN)

    await bookDetailsPage.delete()

    // info = await driver.findElement(By.xpath('//li[@class="success"]')).getText()
    // expect(info).to.equal('Found! Go ahead, modify book template and save.')

    await adminPage.logOut()
  })

  after(() => driver && driver.quit())
})


// it.only('Should access BCC UFBA website', async () => {
//   await driver.get('https://bcc-ufba.github.io')
//   const bodyText = await driver.findElement(By.tagName('body')).getText()
//   expect(bodyText).to.have.string('Bacharelado em Ciência da Computação')
// })
