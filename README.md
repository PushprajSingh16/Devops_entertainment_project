---

# Dockerized Entertainment React Service

A containerized entertainment web application built using **React**, packaged with **Docker**, and deployed using **DevOps practices including CI/CD, Jenkins, and AWS**.

This project demonstrates how a modern web application can be developed, containerized, automated, and deployed using industry-standard DevOps tools.

---

# Project Overview

The **Dockerized Entertainment React Service** is a simple web-based entertainment application that displays a list of movies along with their ratings.

Instead of running the application directly on a system, it is **containerized using Docker**, which ensures portability and consistent execution across different environments.

The project also integrates **DevOps workflows** such as automated builds, container orchestration, and cloud deployment.

---

# Architecture Flow

```
![archi_dev](https://github.com/user-attachments/assets/archi_dev.png)

```

This architecture enables automated builds, container-based deployment, and scalable cloud infrastructure.

---

# Tech Stack

Frontend

* React.js
* Vite

Backend

* Node.js
* Express.js

DevOps Tools

* Docker
* Docker Compose
* Jenkins
* GitHub
* AWS EC2
* Kubernetes (planned)

---

# Features

* Simple entertainment UI displaying movie titles and ratings
* React-based frontend application
* Docker containerization
* Multi-container setup using Docker Compose
* CI/CD automation using Jenkins
* Cloud deployment on AWS EC2
* Scalable architecture with Kubernetes support (future enhancement)

---

# Project Structure

```
Dockerized-Entertainment-React-Service
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   └── server.js
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

# Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/yourusername/dockerized-entertainment-react-service.git
cd dockerized-entertainment-react-service
```

---

### Run Using Docker

Build Docker image

```bash
docker build -t react-entertainment-app .
```

Run container

```bash
docker run -p 3000:3000 react-entertainment-app
```

---

### Run Using Docker Compose

```bash
docker-compose up
```

Open browser:

```
http://localhost:3000
```

---

# CI/CD Pipeline

The project uses **Jenkins for Continuous Integration and Continuous Deployment**.

Pipeline Flow:

1. Developer pushes code to GitHub
2. Jenkins detects changes
3. Jenkins builds Docker image
4. Docker image is deployed to AWS EC2
5. Application becomes accessible through public IP

---

# Deployment

The application is deployed on **AWS EC2 using Docker containers**.

Steps followed:

1. Launch EC2 instance
2. Install Docker
3. Pull project repository
4. Build Docker image
5. Run container

Access application:

```
http://<EC2-PUBLIC-IP>:3000
```

---

# Future Improvements

* Kubernetes container orchestration
* Load balancing
* Monitoring using Prometheus and Grafana
* CI/CD enhancement using GitHub Actions

---

# Screenshots

(Add screenshots of your application UI here)

Example:

```

```

---
