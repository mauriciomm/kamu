exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--headless', '--disable-gpu', '--window-size=800,600'],
        },
      },
    },
  },
  include: {
    I: './steps_file.js',
    adminPage: './pages/Admin.js',
    addBookPage: './pages/AddBook.js',
    addBookCopiesPage: './pages/AddBookCopies.js',
    booksPage: './pages/Books.js',
    bookDetailsPage: './pages/BookDetails.js',
    changeRegionPage: './pages/ChangeRegion.js',
    libraryPage: './pages/Library.js',
    loginPage: './pages/Login.js',
    myBooksPage: './pages/MyBooks.js',
    bookDetailFragment: './fragments/BookDetail.js',
    bookListFragment: './fragments/BookList.js',
    menuFragment: './fragments/Menu.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js'],
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
    },
  },
  tests: './*_test.js',
  name: 'codecept',
}
