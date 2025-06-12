const { io } = require('socket.io-client');

class IO {
    constructor() {
        this.socket = io('http://localhost:3000/room');

        socket.on("connect", () => {
            console.log("ws连接成功");
            
        });

        socket.on("message", (data) => {
            console.log("Received:", data);
        });

        socket.on("connect_error", (err) => {
            console.log("Connection failed:", err.message);
            process.exit(1);
        });
    }

    /// 单例模式
    static getInstance() {
        if (!IO.instance) {
            IO.instance = new IO();
        }
        return IO.instance;
    }

    


}

module.exports = IO.getInstance();