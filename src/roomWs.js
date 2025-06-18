const LzhWSClient = require("./lzhWSClient/lzhWSClient");

class RoomWS extends LzhWSClient {
    constructor() {
        super();

        this.connect("ws://localhost:3000/room");
    }

    initRouterMap() {
        this.on("connect", () => {
            console.log("ws连接成功");
            this.isConnected = true;
            this.postConnectStateUpdate();
        })

        this.on("connect_error", (err) => {
            console.log("ws连接失败：", err.message);
            this.isConnected = false;
            this.postConnectStateUpdate();
        })

        this.on("roomUpdate", (data) => {
            console.log("房间内容变化");
            this.postNotification("roomStateUpdate", {});
        })
    }

    postConnectStateUpdate() {
        this.postNotification("connectStateUpdate", {});
    }

    postNotification(name, data) {
        const event = new CustomEvent(name, data);
        document.dispatchEvent(event);
    }

    stateStr() {
        return this.isConnected ? "已连接" : "未连接";
    }
}

module.exports = new RoomWS();