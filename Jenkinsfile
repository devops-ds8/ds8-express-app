pipeline {
    agent any

    tools {
        nodejs 'Node 18'
    }

    stages {        
        stage('Test') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn install --frozen-lockfile'
                sh 'yarn test'
            }
        }
    }
}
