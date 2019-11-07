const {
  I, loginPage, changeRegionPage, libraryPage,
} = inject()

const url = 'http://localhost:8000'
const bookName = 'Advanced Analytics with Spark'

Given('I am logged in as an user', () => {
  I.amOnPage(url)
  loginPage.sendForm(process.env.USERNAME, process.env.PASSWORD)
})

Given('I choose an library', () => {
  changeRegionPage.selectLibrary('Recife')
})

When('I click on a book', () => {
  libraryPage.openBookPopUpInfo(bookName)
})

Then('I can borrow it', () => {
  libraryPage.borrowBook()
})
