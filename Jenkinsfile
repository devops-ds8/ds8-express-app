pipeline {
    agent any

    stages {        
        stage('Test') {
            steps {
                sh 'yarn install --frozen-lockfile'
                sh 'yarn test'
            }
        }
    }
}
