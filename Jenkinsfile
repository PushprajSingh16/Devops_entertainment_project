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

        stage('Run Backend Container') {
            steps {
                sh 'sudo docker rm -f backend-container || true'
                sh 'sudo docker run -d --name backend-container -p 5000:5000 backend-app'
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh 'sudo docker rm -f frontend-container || true'
                sh 'sudo docker run -d --name frontend-container -p 3000:80 frontend-app'
            }
        }
    }
}