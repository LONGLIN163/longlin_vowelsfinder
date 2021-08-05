# Just need to follow this readme to run all.

## run service - BE

```bash
$ cd service
$ npm install
$ npm start
```
Server will run at: http://localhost:3000/

## run client and send request - FE

```bash
$ cd cliect
$ npm install
$ npm start
```
Select **yes**, The client webpage will be open **http://localhost:3001/** or **your network**.

Send **"post"** request **on the client page** directly.

## run frontend-test

start test:
```bash
$ cd client
$ npm test
```
check and generate coverage:
```bash
$ npm run coverage
```
**Notice:** This test only covers a simple async post request test(no dom testing). Test file is in the **utils** folder. 
