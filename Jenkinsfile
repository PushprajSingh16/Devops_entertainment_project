pipeline {
    agent any

    stages {
        stage('Build Backend Image') {
            steps {
                bat 'docker build -t backend-app .\\backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                bat 'docker build -t frontend-app .\\frontend'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }
}