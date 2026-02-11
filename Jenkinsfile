pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'christopherian2004/devops-backend'
        DOCKER_TAG = 'latest'
        KUBE_NAMESPACE = 'default'

    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Building...'
                git url: 'https://github.com/Ian32-del/devops--iaas.git' , branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ./app/backend"
            }
        }
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
                
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh "kubectl apply -f k8s/backend-deployment.yaml"
                sh "kubectl rollout restart deployment backend-deployment -n ${KUBE_NAMESPACE}"
            }
        }
    }
}