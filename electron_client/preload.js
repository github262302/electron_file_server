const { contextBridge } = require("electron");
const Server = require("..\\electron_service\\main");
const server = new Server();
console.log("preload");
contextBridge.exposeInMainWorld("service", {
    Notification: () => {
        new Notification("准备好");
    },

    start: () => server.start(),
    close: () => server.close(),
    checkState: () => server.checkState(),
    checkAddress: () => server.checkAddress(),
});

window.addEventListener("DOMContentLoaded", () => {});
