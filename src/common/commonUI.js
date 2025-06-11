import React from 'react';

/**
 * 响应消息展示组件 - 用于显示操作结果的状态消息
 * @param {boolean} success - 状态标识：true表示成功，false表示失败
 * @param {string} resLog - 需要显示的消息内容
 * @returns {JSX.Element} 返回带样式的消息容器
 */
export const ResponseMessage = ({ success, resLog }) => {
    return (
        <div
            style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: success ? "#e8f5e9" : "#ffebee",
                borderRadius: "6px",
                color: success ? "#2e7d32" : "#c62828",
                wordWrap: "break-word",  // 允许长单词换行
                whiteSpace: "pre-wrap"   // 保留空格但自动换行
            }}
        >
            {resLog}
        </div>
    );
}

/**
 * 通用卡片式布局容器组件
 * @typedef {Object} Props
 * @property {string} [title] - 可选标题文本，居中显示在卡片顶部
 * @property {React.ReactNode} children - 卡片内容主体
 */
export const FetchSquare = ({ title, children }) => {
    return (
        <div style={{
            width: "80vw",
            maxWidth: "800px",
            margin: "20px auto",
            padding: "30px",
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            backgroundColor: "white",
        }}>
            {title && <h2 style={{ textAlign: "center", marginBottom: "25px" }}>{title}</h2>}
            {children}
        </div>
    );
}

/**
 * 带标签的文本输入框组件
 * @typedef {Object} Props
 * @property {string} title - 输入框标题（显示为label）
 * @property {string} value - 输入框当前值（受控组件必需属性）
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - 输入变化回调函数
 */
export const InputLab = ({ title, value, onChange, type = "text" }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <label
                style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                }}
            >
                {title}
            </label>
            <input
                type={type}
                style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "16px",
                }}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}

/**
 * 可交互式按钮组件 - 支持悬浮放大/点击变色效果
 * @typedef {Object} Props
 * @property {string} title - 按钮显示文本（优先级高于children）
 * @property {React.MouseEventHandler} onClick - 点击事件回调
 */
export const FetchBtn = ({ title, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
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
                transition: "all 0.1s ease",
                transform: "scale(1)",
                transformOrigin: "center",
                boxSizing: "border-box"
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.backgroundColor = "#4285f4";
            }}
            onMouseDown={(e) => {
                e.target.style.backgroundColor = "#2a56c6";
            }}
            onMouseUp={(e) => {
                e.target.style.backgroundColor = "#4285f4";
            }}
        >
            {title}
        </button>
    );
}
