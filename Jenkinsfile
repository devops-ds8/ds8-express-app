pipeline {
    agent any

    stages {        
        stage('Test') {
            steps {
                sh "$YARN_PATH/yarn install --frozen-lockfile"
                sh "$YARN_PATH/yarn test"
            }
        }
    }
}
