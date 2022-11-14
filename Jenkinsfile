pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/PeuAlbuquerque/automacao-teste-mobile-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Credenciais do browserstack') {
            steps {
                browserstack('d267f0f5-9fe2-4abc-b2a0-09a9ae5e9bdd') {
    // some block
}
            }
        }
        stage('Executar testes') {
            steps {
                bat 'npm run test'
            }
        }
    }
}

