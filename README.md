### Instructions to run the service
Run the following commands to build and start the project
1. npm run build
2. npm run start


### Test the enpoint
With the following instructions you will be able to test the encode and the decode enpoints, with a good and a bad flow

## Using Postman
In Postman import the collection FINN.postman_collection.json and the environment file FINN.postman_environment.json
Once you have the serice running use each request to test encode and decode and its different edge cases with the response errors. 
Hint: Both files are in a folder named postman

## Using curl
Test each endpoint and edge case coping and pasting the commands on your terminal
### Encode
## Good flow
```
curl --location 'localhost:3000/encode' \
--header 'Content-Type: application/json' \
--data '{
    "url":"https://www.finn.com/de-DE/subscribe?campaign=autoabo&utm_source=google&utm_medium=cpc&utm_campaign=SB|DE|P|Subs|Intent|FINN&gad_source=1&gclid=CjwKCAiA8Lu9BhA8EiwAag16b3--hoLy9VNckCpZ--O0oD9kHYseSKNlHFek3L5WtD1tnH1RyA7KgBoCtksQAvD_BwE"
}'
```
## Bad flows
```
curl --location 'localhost:3000/encode' \
--header 'Content-Type: application/json' \
--data '{
    "url":"invalid"
}'
```
```
curl --location 'localhost:3000/encode' \
--header 'Content-Type: application/json' \
--data '{
    "url":http:
}'
```
## Decode
## Good flow
```
curl --location 'localhost:3000/decode' \
--header 'Content-Type: application/json' \
--data '{
    "url":"http://short.est/aHR0cH"
}'
```
## Bad flows
```
curl --location 'localhost:3000/decode' \
--header 'Content-Type: application/json' \
--data '{
    "url":"http://short.est/NOTFOUND"
}'
```



### Project scripts
### Tests
1. npm run test

