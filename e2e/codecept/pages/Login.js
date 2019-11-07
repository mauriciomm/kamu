const { I } = inject()

module.exports = {
  fields: {
    username: 'username',
    password: 'password',
  },
  submitButton: 'Log in',

  sendForm(username, password) {
    I.fillField(this.fields.username, username)
    I.fillField(this.fields.password, secret(password))
    I.click(this.submitButton)
  },
}
