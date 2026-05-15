# Docker Spring Boot Technical task

- Spring Boot (Java Backend)
- HTML / CSS / JavaScript Frontend
- Docker
- GitHub Actions 
- Amazon Web Services EC2 Deployment
- GHCR (GitHub Container Registry)

## Features
-  Dockerized Spring Boot application
-  Frontend served from Spring Boot static folder
-  REST API endpoint
-  GitHub Actions 
-  Automatic Docker image build and push to GHCR
-  Deployable on AWS EC2


## Project Structure

```
src
└── main
    ├── java
    │   └── com/example/springbootdocker
    │       ├── SpringBootDockerApplication.java
    │       └── ApiController.java
    │
    └── resources
        └── static
            ├── index.html
            ├── style.css
            └── app.js
```


## AWS EC2 Deployment

### Pull Image

docker pull ghcr.io/samedovresul/docker_spring_task/spring-app:latest

### Run Container

docker run -d \
  --name spring-app \
  -p 80:8080 \
  ghcr.io/samedovresul/docker_spring_task/spring-app:latest


## Project url link

- [http://13.60.44.103/](http://13.60.44.103/)