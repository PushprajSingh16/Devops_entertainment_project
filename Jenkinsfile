pipeline {
    agent any

    stages {
        stage('Build Backend Image') {
            steps {
                sh 'docker build -t backend-app ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t frontend-app ./frontend'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}