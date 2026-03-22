pipeline {
    agent any

    stages {
        stage('Build Backend Image') {
            steps {
                sh 'sudo docker build -t backend-app ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'sudo docker build -t frontend-app ./frontend'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'sudo docker compose up -d'
            }
        }
    }
}