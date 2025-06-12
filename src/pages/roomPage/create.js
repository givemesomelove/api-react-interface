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

    io.socket.emit('message', {
      userId: formData.userId
    });
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
