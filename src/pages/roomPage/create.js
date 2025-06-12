import React, { useState } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";

const Create = () => {
  const [formData, setFormData] = useState({
    userId: "",
  });

  const [responseData, setResponseData] = useState({
    success: null,
    resLog: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();


    const { success, resLog } = await fetchPost("/user/register", formData);
    setResponseData({ success, resLog });
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
      {responseData.resLog && <ResponseMessage {...responseData} />}
    </FetchSquare>
  );
};

export default Create;
