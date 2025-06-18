import React, { useState, useEffect } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";
import roomWs from '../../roomWs';

const Clear = () => {
    const onClick = () => {
        roomWs.sendMessage("clearRooms", {});
    }

    return (
        < FetchSquare title="清空房间">
            <FetchBtn title="清空" onClick={onClick} />
        </FetchSquare>
    );
};

export default Clear;
