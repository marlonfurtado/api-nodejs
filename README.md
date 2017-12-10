# Express Template
> RESTful API template with NodeJS, Express and Mongoose to personal use

See the API's [documentation](DOCS.md).

## <a name="stack"> </a>Stack
<ul>
<li>NodeJS</li>
<li>Express</li>
<li>MongoDB</li>
</ul>

## Directory structure

### Overview

```
src/
├─ api/
│  ├─ auth/
│  ├─ user/
│  │  ├─ controller.js
│  │  ├─ index.js
│  │  ├─ index.test.js
│  │  ├─ model.js
│  │  └─ model.test.js
│  └─ index.js
├─ services/
│  ├─ express/
│  ├─ google/
│  ├─ jwt/
│  ├─ mongoose/
│  ├─ passport/
│  └─ response/
├─ app.js
├─ config.js
└─ index.js
```

## Commands

```bash
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
npm test # test using Jest
npm run test:unit # run unit tests
npm run test:integration # run integration tests
npm run coverage # test and open the coverage report in the browser
npm run lint # lint using ESLint
```


## Run local example
> We assume you have pre-installed the [stack](#stack).

Run the server in development mode.

```bash
$ npm run dev
Express server listening on http://0.0.0.0:9000, in development mode
```

Create a user (sign up):
> Note that creating and authenticating users needs a master key (which is defined in the `.env` file. *Talk with admin!*)

```bash
curl -X POST http://0.0.0.0:9000/api/users -i -d "email=test@example.com&password=123456&role=admin&access_token=MASTER_KEY_HERE"
```

It will return something like:
```bash
HTTP/1.1 201 Created
...
{
  "token": "GENERATED_TOKEN",
  "user": {
    "id": "58c2a275b80dff716c8a2efa",
    "name": "test",
    "email": "test@example.com",
    "createdAt":"2017-12-12T22:00:00.666Z"
  }
}
```

Now you can use the `'GENERATED_TOKEN'` to call user protected APIs and get a user.   

```bash
curl -X GET http://0.0.0.0:9000/api/users?access_token=GENERATED_TOKEN
```


  #  
A RESTful API generated by [generator-rest](https://github.com/diegohaz/generator-rest) and adapted by [Marlon Furtado](http://www.marlonfurtado.com.br).  
For more informations see the [docs](DOCS.md).