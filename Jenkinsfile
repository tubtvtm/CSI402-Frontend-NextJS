pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo "Checkout repository..."
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']],
                        userRemoteConfigs: [[
                            credentialsId: 'tubtvtm',
                            url: 'https://github.com/tubtvtm/CSI402-Frontend-NextJS.git'
                        ]]
                    ])
                    echo "Checkout Success"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo "Build Docker"
                }
            }
        }

        stage('Testing') {
            steps {
                script {
                    echo "Running Tests"
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         script {
        //             echo "Deploying Image"
        //         }
        //     }
        // }
    }
}
