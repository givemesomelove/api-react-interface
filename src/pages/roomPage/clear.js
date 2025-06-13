import React, { useState, useEffect } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";
import io from '../../io';

const Clear = () => {
    const onClick = () => {
        io.sendMessage("clearRooms", {});
    }

    return (
        < FetchSquare title="清空房间">
            <FetchBtn title="清空" onClick={onClick} />
        </FetchSquare>
    );
};

export default Clear;
