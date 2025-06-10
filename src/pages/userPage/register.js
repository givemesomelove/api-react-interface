import React, { useState } from "react";
import { fetchPost } from "../../request";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isSuccess, setIsSuccess] = useState(null);
  const [resLog, setResLog] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, resLog } = await fetchPost("/user/register", formData);
    setIsSuccess(success);
    setResLog(resLog);
  };

  return (
    <div
      style={{
        width: "80vw",
        maxWidth: "800px",
        margin: "20px auto",
        padding: "30px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>用户注册</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
            }}
          >
            用户名
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "16px",
            }}
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
            required
          />
        </div>
        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
            }}
          >
            密码
          </label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "16px",
            }}
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#4285f4",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#3367d6")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4285f4")}
        >
          立即注册
        </button>
      </form>
      {resLog && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor:
              !isSuccess
                ? "#ffebee"
                : "#e8f5e9",
            borderRadius: "6px",
            color:
            !isSuccess
                ? "#c62828"
                : "#2e7d32",
          }}
        >
          {resLog}
        </div>
      )}
    </div>
  );
};

export default Register;
