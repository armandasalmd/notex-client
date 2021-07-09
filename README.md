## Website links

- LIVE (production branch): ✅ https://notex-app.com ✅
- DEV (staging branch): 🚧 http://notex-client.herokuapp.com 🚧
- LOCAL: http://localhost:3000

## Backend server links

- Notex Main
    - PURPOSE: Core server for authentication, accounts, notes management 
    - HOST: https://notex-api.herokuapp.com
    - REVERSE PROXY HOST: https://notex-app.com/api
- Nexus
    - PURPOSE: Everything that has to do with `articles` including search
    - HOST: https://notex-nexus.herokuapp.com
    - REVERSE PROXY HOST: https://notex-app.com/nexus

## Description

ReactJs application. This repository is used to build docker image. Docker container starts `nginx` server which servers static react files and allows `reverse proxy` for backend servers `Notex Main` and `Nexus`.

**LIVE** application container is deployed to **Azure DevOps**

**DEV** application container is deployed to **Heroku** (includes CI build so can run tests etc)

## Landing preview
![image](https://user-images.githubusercontent.com/17089888/125075958-305d7400-e0b7-11eb-9304-31fe71f504b9.png)
