# Template - API Node.js
> RESTful API template with NodeJS, Express and Mongoose to personal use

See the API's [documentation](https://marlonfurtado.github.io/api-nodejs/).

## <a name="stack"> </a>Stack
<ul>
<li>Node.js</li>
<li>Express</li>
<li>Mongoose</li>
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
│  │  ├─ model.js
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
npm run lint # lint using ESLint
```


## Run local example
> We assume you have pre-installed the [stack](#stack).

Run the server in development mode.

```bash
$ npm run dev
Express server listening on http://0.0.0.0:9000, in development mode
```

> Note that creating and authenticating users needs a master key (which is defined in the `.env` file. *Talk with admin!*)


 ### I. Sign In:
```bash
curl -X POST http://0.0.0.0:9000/api/auth -i -u admin@email.com:qwerty -d "access_token=MASTER_KEY_HERE"
```


 ### II. Create a user (sign up):

```bash
curl -X POST http://0.0.0.0:9000/api/users -i -d "name=test&email=test@example.com&password=qwerty&role=admin&access_token=MASTER_KEY_HERE"
```

Sign in (I) or sign up (II), it will return something like:
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

Use `npm run lint`! :shipit:
  #  
A RESTful API generated by [generator-rest](https://github.com/diegohaz/generator-rest) and adapted by [Marlon Furtado](http://www.marlonfurtado.com.br).  
For more informations see the [docs](https://marlonfurtado.github.io/api-nodejs/).
