import { io } from 'socket.io-client';

class IO {
    constructor() {
        this.isConnected = false;
        this.socket = io('http://localhost:3000/room');

        this.socket.on("connect", () => {
            console.log("ws连接成功");
            this.isConnected = true;
            this.postConnectStateUpdate();
        });

        this.socket.on("message", (data) => {
            console.log("Received:", data);
            this.handleMessage(data);

        });

        this.socket.on("connect_error", (err) => {
            console.log("Connection failed:", err.message);
            this.isConnected = true;
            this.postConnectStateUpdate();
        });
    }

    /// 单例模式
    static getInstance() {
        if (!IO.instance) {
            IO.instance = new IO();
        }
        return IO.instance;
    }

    /// 发送消息
    sendMessage(type, data, block) {
        /// type_时间生成一个key，用来标记此次请求
        const message = {
            type,
            data,
        };

        this.socket.emit("message", message, block);
    }

    /// 接收消息
    handleMessage(message) {
        const { type, data } = message;
        switch (type) {
            case "roomUpdate":
                this.postNotification("roomStateUpdate", {});
                break;
            default:
                break;
        }
    }

    /// 通知所有js连接状态更新
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

export default IO.getInstance();