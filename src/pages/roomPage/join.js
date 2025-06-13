import React, { useState } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";
import io from '../../io';

const Join = () => {

    const [formData, setFormData] = useState({
        userId: "",
        roomId: "",
    });

    const [responseData, setResponseData] = useState({
        success: null,
        resLog: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const roomId = formData.roomId;
        const userData = {
            id: formData.userId,
            username: "新用户",
            avatar: 0,
        }

        io.sendMessage("joinRoom", { roomId, userData }, (response) => {
            const { success } = response;
            const resLog = success? "加入房间成功" : `加入房间失败:${response.message}`;
            setResponseData({
                ...responseData,
                success,
                resLog,
            });
        });
    };

    return (
        < FetchSquare title="加入房间">
            <InputLab title="用户Id" value={formData.userId} onChange={(e) =>
                setFormData({
                    ...formData,
                    userId: e.target.value,
                })
            } />
            <InputLab title="房间Id" value={formData.roomId} onChange={(e) =>
                setFormData({
                    ...formData,
                    roomId: e.target.value,
                })
            } />
            <FetchBtn title="加入" onClick={handleSubmit} />
            {responseData.resLog && <ResponseMessage {...responseData} />}
        </FetchSquare>
    );
};

export default Join;
