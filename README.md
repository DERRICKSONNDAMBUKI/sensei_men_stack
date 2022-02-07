# Sensei Men Stack
### dev
for the boostrap: https://startbootstrap.com/themes/clean-blog/

more about ejs: https://ejs.co/#docs

### install

```
npm i
```
### run

```
npm start
```

### install mongoDB on linux - parrot OS

#1
```
$ sudo apt-get install gnupg
```
#2
```
$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```
#3
```
$ echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main" | $ sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```
#4
```
$ sudo apt-get update
```
#5
```
$ sudo apt-get install -y mongodb-org
```
#6

####run
- start mongodb
```
$ sudo systemctl start mongod
```
if error
```
$ sudo systemctl daemon-reload
```
rerun

- verify that mongodb has started successfully
```
$ sudo systemctl status mongod
```
- stop mongoDB
```
$ sudo systemctl stop mongod
```
-restart mongDB
```
$ sudo systemctl restart mongod
```
- begin using mondoDB
```
$ mongosh
```
- remove mongoDB packages
```
$ sudo apt-get purge mongodb-org*
```
- remove data directories
```
$ sudo rm -r /var/log/mongodb
$ sudo rm -r /var/lib/mongodb
```

### for more querying 
https://docs.mongodb.com/manual/tutorial/query-documents/

### install mongo-express 
```
npm install -g mongo-express
```
By default config.default.js is used where the basic access authentication is admin:pass. This is obviously not safe, and there are warnings in the console.

If you installed it globally, you can immediately start mongo-express like this:
```
mongo-express --url mongodb://127.0.0.1:27017
```
Or if you want to use it as an administrator:
```
mongo-express --admin --url mongodb://127.0.0.1:27017
```
For help on configuration options:
```
mongo-express --help
```