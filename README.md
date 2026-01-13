# corespeed-test-basic

基础 Docker 构建测试仓库，用于测试默认配置下的构建流程。

## 测试场景

| 参数 | 值 | 说明 |
|------|-----|------|
| `docker_file_path` | `Dockerfile` | 默认路径 |
| `context_path` | `` (空，表示根目录) | 默认上下文 |
| `build_args` | `{}` | 无构建参数 |
| `build_target` | `` | 无多阶段目标 |

## 预期行为

- 应该成功构建一个简单的 Node.js HTTP 服务
- 容器启动后在 8080 端口提供 HTTP 服务
- 访问 `/` 返回 `{"status": "ok", "test": "basic"}`
- 访问 `/health` 返回 `{"healthy": true}`

## 本地测试

```bash
docker build -t test-basic .
docker run -p 8080:8080 test-basic
curl http://localhost:8080/
```
