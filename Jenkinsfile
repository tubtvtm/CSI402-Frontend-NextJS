pipeline {
    agent any
    
   stages{
        stage('clone') {
            steps{
                print "Checkout"
                Checkout({
                    $class: 'GitSCM',
                    branches: [[name: '*/main']]
                    userRemoteConfigs : [ [
                        credentialsId: 'tubtvtm',
                        url: 'https://github.com/tubtvtm/CSI402-Frontend-NextJS.git'
                    ]]
                })
            }
            print "Checkout Success"

    }
    } 

    stages{
        stage('Build') {
            steps{
                print "Build Docker" 

            }
        }
    }

    // stages{
    //     stage('Deploy Image') {
    //         steps{
    //             print "Deploy"

    //         }
    //     }
    // }

    stages{
        stage('Testing') {
            steps{
                print "Test"

            }
        }
    }
    
}