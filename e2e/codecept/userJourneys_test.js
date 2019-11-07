Feature('User Journeys')

const url = 'http://localhost:8000'
const bookName = 'Advanced Analytics with Spark'
const bookISBN = '0134757599' // Martin Fowler - Refactoring

Scenario('UJ1 - Borrow and return a book', (I, loginPage, changeRegionPage, libraryPage, menuFragment, myBooksPage, adminPage) => {
  I.amOnPage(url)
  loginPage.sendForm(process.env.USERNAME, process.env.PASSWORD)

  changeRegionPage.selectLibrary('Recife')

  libraryPage.openBookPopUpInfo(bookName)
  libraryPage.borrowBook()
  libraryPage.closePopUpInfo()

  menuFragment.navigateToMyBooksPage()

  myBooksPage.openBookPopUpInfo(bookName)
  myBooksPage.returnBook()
  myBooksPage.closePopUpInfo()

  I.refreshPage()
  I.dontSee(bookName)

  menuFragment.navigateToAdminPage()

  adminPage.logOut()
})

Scenario('UJ2 - Add and Delete book from Library', (I, loginPage, menuFragment, addBookPage, adminPage, addBookCopiesPage, booksPage, bookDetailsPage) => {
  I.amOnPage(url)
  loginPage.sendForm(process.env.USERNAME, process.env.PASSWORD)

  menuFragment.navigateToAddBookPage()

  addBookPage.searchBookByISBN(bookISBN)
  addBookPage.validateInformationFound(bookISBN)
  addBookPage.save()

  adminPage.navigateToHome()
  adminPage.navigateToAddBookCopiesPage()

  addBookCopiesPage.selectBook(bookISBN)
  addBookCopiesPage.selectLibrary('Recife')
  addBookCopiesPage.save()

  adminPage.navigateToHome()

  adminPage.navigateToBooksPage()

  booksPage.searchBook(bookISBN)
  booksPage.selectBook(bookISBN)

  bookDetailsPage.delete()

  adminPage.logOut()
})
