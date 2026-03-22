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

        stage('Cleanup Old Containers') {
            steps {
                sh 'sudo docker rm -f backend-container frontend-container || true'
            }
        }

        stage('Run Backend Container') {
            steps {
                sh 'sudo docker run -d --name backend-container -p 5001:5000 backend-app'
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh 'sudo docker run -d --name frontend-container -p 3001:80 frontend-app'
            }
        }
    }
}