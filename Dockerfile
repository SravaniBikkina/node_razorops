global:
  runner:
    os_image: ubuntu

tasks:
  build-docker-image:
    steps:
      - checkout
      - docker/build:
          image: sravanibikkina/node
          dockerfile: Dockerfile
          context: .
