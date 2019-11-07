const { I } = inject()

module.exports = {
  selectLibrary(name) {
    I.waitForText(name)
    I.click(`div[name=${name}]`)
  },
}
