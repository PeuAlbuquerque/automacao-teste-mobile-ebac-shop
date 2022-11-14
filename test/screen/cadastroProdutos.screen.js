class ProdutosScreen {

    get #produtos() { return $('id:products') }

    get #addProductButton() { return $('id:addProductButton') }

    get #addPhysicalProduct() { return $('android.view.ViewGroup') }

    get #addImage() { return $('id:addImageContainer') }

    get #addWordPressImage() { return $('id:textWPMediaLibrary') }

    get #selectImage() { return $('//android.widget.FrameLayout[11]') }

    get #done() { return $('id:menu_done') }

    get #returnToProduct() { return $('android.widget.ImageButton') }

    get #productTitle() { return $('id:editText') }

    get #describeProduct() { return $('android=new UiSelector().text("Describe your product")') }

    get #description() { return $('id:visualEditor') }

    get #returnToAddProduct() { return $('~Navigate up') }

    get #addPrice() { return $('android=new UiSelector().text("Add price")') }

    get #regularPrice() { return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText') }

    get #salePrice() { return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText') }

    get #taxStatus() { return $('id:product_tax_status') }

    get #taxStatusTaxable() { return $('android=new UiSelector().text("Taxable")') }

    get #taxClass() { return $('id:product_tax_class') }

    get #taxClassZeroRate() { return $('android=new UiSelector().text("Zero rate")') }

    get #inventory() { return $('android=new UiSelector().text("Inventory")') }

    get #SKU() { return $('id:edit_text') }

    get #stockStatus() { return $('id:spinner_edit_text') }

    get #setStockStatus() { return $('android=new UiSelector().text("In stock")') }

    get #publish() { return $('id:menu_done') }

    get #productPublished() { return $('android=new UiSelector().text("Product published")') }

    async goToaddProducts() {
        await this.#produtos.click()
        await this.#addProductButton.click()
        await this.#addPhysicalProduct.click()
    }

    async addImageProduct() {
        await this.#addImage.click()
        await this.#addWordPressImage.click()
        await this.#selectImage.click()
        await this.#done.click()
        await this.#returnToProduct.click()
    }

    async setProduct(titulo, descricao, preco, sale, SKU) {
        await this.#productTitle.setValue(titulo)
        await this.#describeProduct.click()
        await this.#description.setValue(descricao)
        await this.#returnToAddProduct.click()
        await this.#addPrice.click()
        await this.#regularPrice.setValue(preco)
        await this.#salePrice.setValue(sale)
        await this.#taxStatus.click()
        await this.#taxStatusTaxable.click()
        await this.#taxClass.click()
        await this.#taxClassZeroRate.click()
        await this.#returnToAddProduct.click()
        await this.#inventory.click()
        await this.#SKU.setValue(SKU)
        await this.#stockStatus.click()
        await this.#setStockStatus.click()
        await this.#returnToAddProduct.click()
    }

    async publishProduct() {
        await this.#publish.click()
        return await this.#productPublished.getText()
    }

}

module.exports = new ProdutosScreen