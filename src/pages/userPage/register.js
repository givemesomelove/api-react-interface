import React, { useState } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    < FetchSquare title="用户注册">
      <InputLab title="用户名" value={formData.username} onChange={(e) =>
        setFormData({
          ...formData,
          username: e.target.value,
        })
      } />
      <InputLab title="密码" value={formData.password} onChange={(e) =>
        setFormData({
          ...formData,
          password: e.target.value,
        })
      } />
      <FetchBtn title="立即注册" onClick={handleSubmit} />
      {responseData.resLog && <ResponseMessage {...responseData} />}
    </FetchSquare>
  );
};

export default Register;
