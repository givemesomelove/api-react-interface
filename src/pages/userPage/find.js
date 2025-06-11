
import React, { useState } from "react";
import { fetchGet } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";

const Find = () => {
  const [formData, setFormData] = useState({
    username: "",
    token: "",
  });

  const [responseData, setResponseData] = useState({
    success: null,
    resLog: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, resLog } = await fetchGet("/user/userInfo", {username: formData.username}, formData.token);
    setResponseData({ success, resLog });
  };

  return (
    <FetchSquare title="用户信息查询">
      <InputLab 
        title="用户名" 
        value={formData.username} 
        onChange={(e) => setFormData({...formData, username: e.target.value})}
      />
      <InputLab 
        title="Token" 
        value={formData.token} 
        onChange={(e) => setFormData({...formData, token: e.target.value})}
      />
      <FetchBtn title="查询用户" onClick={handleSubmit} />
      {responseData.resLog && <ResponseMessage {...responseData} />}
    </FetchSquare>
  );
};

export default Find;
