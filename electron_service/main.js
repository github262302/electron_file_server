var express = require("express");
const GetLocalIP = require("../electron_client/utils/GetIp");
const exStatic = require("express-static");
const path=require("path");
const router = require("./handle");
class Server {
    port = 13131;
    server;
    app;
    isRun=false
    constructor() {
        console.log("server:init");
        
        this.app = express().use(router)
            
            this.start()
    }
    start () {
         if(this.isRun)return
        this.server = this.app.listen(this.port, () => {
            this.isRun=true
            console.log(`Example app listening on port ${this.port}`);
        });
    }
    close() {
       
            this.server.close(e => {
                console.log(e);
                this.isRun=false
            });
     
    }
    checkState() {
        return this.isRun
    }
    checkAddress () {
        return `http://${GetLocalIP()}:${this.port}`
    }
}

module.exports = Server;
