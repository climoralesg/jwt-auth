
# Token Auth

Api que permite la obtencion de una access token a partir de una llave maestra.




## Librerias

- express: ^4.18.0,
- jsonwebtoken: ^8.5.1



## Instalación

Pasos para la Instalación

```bash
  cd jwt-auth
  npm i
  npm run start
```


    
## Opciones de API

#### Crear un token

```
  GET /aplication/createtoken
```

#### Verificar la existencia de un token

```
  GET /aplication/verifytoken
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `access-token`      | `header` | **Requerido**. KEY-Token |


## Autor

- [@climoralesg](https://climoralesg.dev/)

