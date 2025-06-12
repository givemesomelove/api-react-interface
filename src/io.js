import { io } from 'socket.io-client';

class IO {
    constructor() {
        this.isConnected = false;
        this.state = "准备连接";
        this.socket = io('http://localhost:3000/room');

        this.socket.on("connect", () => {
            console.log("ws连接成功");
            this.isConnected = true;
            this.state = "连接成功";
            /// 通知所有js连接成功
            const event = new CustomEvent('connect', {});
            document.dispatchEvent(event);
        });

        this.socket.on("message", (data) => {
            console.log("Received:", data);

            // const event = new CustomEvent('message', data);
            // document.dispatchEvent(event);
        });

        this.socket.on("connect_error", (err) => {
            console.log("Connection failed:", err.message);
            this.isConnected = true;
            this.state = "断开连接";
            /// 通知所有js连接成功
            const event = new CustomEvent('disconnect', {});
            document.dispatchEvent(event);
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
const instance = IO.getInstance();
export default instance;