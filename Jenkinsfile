pipeline {
    agent any
    tools {
        nodejs 'NodeJS_14' // Use the Node.js installation name configured in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Mohancherukuri/CICD.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install' // Installs necessary packages
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    sh 'npm run build' // Builds the project
                }
            }
        }
        
        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint' // Runs code linting
                }
            }
        }
        
        stage('Unit Tests') {
            steps {
                script {
                    sh 'npm test' // Runs unit tests
                }
            }
        }
        
        stage('Security Scan') {
            steps {
                script {
                    // Assuming Veracode CLI is installed and set up on the Jenkins agent
                    // Replace 'veracode scan' with your actual Veracode CLI command if needed
                    sh 'veracode scan' // Adjust this line as per your Veracode configuration
                }
            }
        }
        
        stage('Deploy to Dev Environment') {
            steps {
                script {
                    echo 'Deploying to development environment...' 
                    // Add your actual deployment commands or scripts here
                }
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline complete'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
