import React, { useState } from "react";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";
import roomWs from '../../roomWs';

const Create = () => {
  const [formData, setFormData] = useState({
    userId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      _id: formData.userId,
      username: "新用户",
      avatar: 0,
    }
    roomWs.sendMessage("createRoom", { userData })
  };

  return (
    < FetchSquare title="新建房间">
      <InputLab title="用户Id" value={formData.userId} onChange={(e) =>
        setFormData({
          ...formData,
          userId: e.target.value,
        })
      } />
      <FetchBtn title="创建" onClick={handleSubmit} />
    </FetchSquare>
  );
};

export default Create;
