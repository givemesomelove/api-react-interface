import React, { useState } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";
import io from '../../io';

const Create = () => {
  const [formData, setFormData] = useState({
    userId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      id: formData.userId,
      username: "新用户",
      avatar: 0,
    }
    io.sendMessage("createRoom", { userData })
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
