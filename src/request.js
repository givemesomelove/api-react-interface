/// 请求是否成功
export const fetchSuccess = (response) => {
  return response && response.constructor.name === "Response" && response.ok;
};

/// 打印请求结果日志
export const fetchResLog = async (response) => {
  if (!response || response.constructor.name !== "Response")
    return "response发生了错误";

  // 克隆响应以允许重复读取body
  const clonedResponse = response.clone();
  const responseText = await clonedResponse.text();

  let str = ""
  if (response.ok) {
    str += "请求成功\n";
    str += "url:" + response.url + "\n";
    str += "状态码：" + response.status + "\n";
    /// 返回的json字符串
    str += "返回数据：" + responseText;
  } else {
    str += "请求失败\n";
    str += "url:" + response.url + "\n";
    str += "状态码：" + response.status + "\n";
    str += "错误信息：" + responseText;
  }
  return str;
};

/// 返回结果json
export const fetchJson = async (response) => {
  if (!response || response.constructor.name !== "Response")
    return "response发生了错误";

  // 克隆响应以允许重复读取body
  const clonedResponse = response.clone();
  const responseText = await clonedResponse.text();

  let json = {};
  if (response.ok) {
    try {
      json = JSON.parse(responseText);
    } catch (e) {
      console.error("response解析json失败", e);
    }
  }
  return json;
};

/**
 * 封装带认证的GET请求方法
 * @param {string} path - API端点路径
 * @param {Object} [params={}] - 查询参数
 * @param {string} [token] - 可选认证令牌
 * @returns {Promise<Response>}
 */
export const fetchGet = async (path, params = {}, token) => {
  const url = new URL(path, "http://localhost:3000");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(url.toString(), {
    method: "GET",
    headers,
  });

  const success = fetchSuccess(response);
  const resLog = await fetchResLog(response);
  const json = await fetchJson(response);
  return {
    success,
    resLog,
    json,
  };
};

/**
 * 封装带认证的POST请求方法
 * @param {string} path - API端点路径
 * @param {Object} [body={}] - 请求体数据
 * @param {string} [token] - 可选认证令牌
 * @returns {Promise<Response>}
 */
export const fetchPost = async (path, body = {}, token) => {
  const url = new URL(path, "http://localhost:3000");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(url.toString(), {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const success = fetchSuccess(response);
  const resLog = await fetchResLog(response);
  const json = await fetchJson(response);
  return {
    success,
    resLog,
    json,
  }
};
