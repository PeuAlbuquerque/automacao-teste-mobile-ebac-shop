class LoginScreen {

    get #enterStoreAddress() { return $('id:button_login_store') }

    get #siteAddress() { return $('android.widget.EditText') }

    get #continueToLogin() { return $('id:bottom_button') }

    get #continueWithStore() { return $('id:login_site_creds') }

    get #username() { return $('android=new UiSelector().text("Username")') }

    get #password() { return $('android=new UiSelector().text("Password")') }

    get #continue() { return $('id:bottom_button') }

    get #typeYourPassword() { return $('id:login_enter_password') }

    get #twoFactorPassword() { return $('id:input') }

    get #continueToMyAccount() { return $('id:bottom_button') }

    async goTologin() {
        await this.#enterStoreAddress.click()
    }

    async setSiteAddress(url) {
        await this.#siteAddress.setValue(url)
        await this.#continueToLogin.click()
    }

    async setContinueWithStore() {
        await this.#continueWithStore.click()
    }

    async login(username, password) {
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }

    async setTypeYourPassword(password) {
        await this.#typeYourPassword.click()
        await this.#twoFactorPassword.setValue(password)
        await this.#continueToMyAccount.click()
    }
}

module.exports = new LoginScreen