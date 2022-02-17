# Server
## Nodejs
1. Open terminal in Server folder
2. type ```npm start```
3. The PORT: 4000 will be open. 

## Postman
1. Set url: http://localhost:4000/route
2. Set POST 
3. Go to >body>raw and select JSON
4. Set the data test as follow. In route must be a number. 
```JSON
{
    "ruta": {
        "street": "Hollywood St.",
        "route": 55,
        "direction": "SOUTH"
    }
    
}
```
