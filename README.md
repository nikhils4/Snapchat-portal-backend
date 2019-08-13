# Snapchat backend
Snapchat portal backend to be used to upload filters by the users.

<br>

#### Quadro backend

[![view docs](https://img.shields.io/badge/docs-view%20API%20documentation-orange.svg)](https://documenter.getpostman.com/view/6334076/SVYwJFwT?version=latest)

<br>

#### Directions to run
Run the following commands 

```bash

# To install dependencies
$ npm i

# To start the server
$ node api

```

<br>

#### Environment variables in `.env`

| Variable | Description |
|:--------:|:------------:|
| SECRET | JWT secret |
| SALT | Hash salt |
| MONGO_URI | MongoDB URI |
| CLOUD_NAME | Cloudinary DB details |
| API_KEY | API Key for Cloudinary |
| API_SECRET | API secret for Cloudinary |
