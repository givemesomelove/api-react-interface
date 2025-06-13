import React, { useState, useEffect } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";
import io from '../../io';

const useIoState = () => {
    const [state, setState] = useState("")

    const handleStateUpdate = () => {
        console.log("房间刷新");

        const block = (response) => {
            const { success } = response;
            if (!success) {
                setState(response.data.message)
            } else {
                const { roomList, roomPlayerList, success } = response.data;

                const roomStr = roomList.map(obj => JSON.stringify(obj)).join("\n\n");
                const playerStr = roomPlayerList.map(obj => JSON.stringify(obj)).join("\n\n");
                setState(`房间列表:\n${roomStr}\n\n玩家列表:\n${playerStr}`)
            }
        };

        io.sendMessage("getAllRooms", {}, block);
    };

    useEffect(() => {
        handleStateUpdate();
        document.addEventListener('roomStateUpdate', handleStateUpdate);
        return () => {
            document.removeEventListener('roomStateUpdate', handleStateUpdate);
        };
    }, [])

    return state;
}

const FindAll = () => {
    const resLog = useIoState();

    return (
        < FetchSquare title="房间总览">
            {resLog && <ResponseMessage {...{ success: true, resLog: resLog }} />}
        </FetchSquare>
    );
};

export default FindAll;
