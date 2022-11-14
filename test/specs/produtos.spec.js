const cadastroProdutosScreen = require("../screen/cadastroProdutos.screen");
const loginScreen = require("../screen/login.screen");

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let titulo = 'teste'
let descricao = 'teste'
let preco = 100
let salePreco = 50
let SKU = 'test'

describe('Fluxo cadastro de produtos', () => {

    it('Deve completar o fluxo de cadastro de produtos', async () => {
        await loginScreen.goTologin()
        await loginScreen.setSiteAddress(urlLoja)
        await loginScreen.setContinueWithStore()
        await loginScreen.login(usuario, senha)
        await loginScreen.setTypeYourPassword(senha)
        await cadastroProdutosScreen.goToaddProducts()
        await cadastroProdutosScreen.addImageProduct()
        await cadastroProdutosScreen.setProduct(titulo, descricao, preco, salePreco, SKU)

        expect (await cadastroProdutosScreen.publishProduct()).toEqual('Product published')
    });
});