
import React, { useState } from "react";
import { fetchPost } from "../../request";
import { ResponseMessage, FetchSquare, InputLab, FetchBtn } from "../../common/commonUI";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [responseData, setResponseData] = useState({
    success: null,
    resLog: ""
  });

  const [token, setToken] = useState("");

  /// 点击提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, resLog, json } = await fetchPost("/user/login", formData);
    setResponseData({ success, resLog });
    setToken(json.token);
  };

  /// 复制token
  const handleCopyToken = () => {
    if (!token) return;
    navigator.clipboard.writeText(token);
    alert("复制成功:" + token);
  }

  return (
    <FetchSquare title="登录">
      <InputLab
        title="用户名"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <InputLab
        title="密码"
        type="password"
        value={formData.token}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <FetchBtn title="登录" onClick={handleSubmit} />
      {responseData.resLog && <ResponseMessage {...responseData} />}
      
      <div style={{ height: "30px" }}></div>
      
      <FetchBtn title="复制token" onClick={handleCopyToken} />
    </FetchSquare>
  );
};

export default Login;
