pipeline {
    agent any
    environment {
        NODE_VERSION = '14' // Set the Node version to use
    }
    tools {
        nodejs "${NODE_VERSION}"
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
                    sh 'npm install' // Install necessary packages
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build' // Build the project
                }
            }
        }
        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint' // Check for code issues
                }
            }
        }
        stage('Unit Tests') {
            steps {
                script {
                    sh 'npm test' // Run unit tests
                }
            }
        }
        stage('Security Scan') {
            steps {
                script {
                    veracode('scan') // Run a security scan
                }
            }
        }
        stage('Deploy to Dev Environment') {
            steps {
                script {
                    echo 'Deploying to development environment...' 
                    // Add deployment commands here
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
