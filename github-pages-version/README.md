# 🚀 GitHub Pages 部署说明

## ✅ 为什么选择 GitHub Pages？

Netlify 部署一直失败，GitHub Pages 是更好的选择：
- **完全免费**
- **部署简单**
- **稳定可靠**
- **支持 HTTPS**

## 📁 文件结构

```
github-pages-version/
├── index.html              # 主页面
└── README.md               # 本说明文件
```

## 🎯 部署步骤

### 步骤1：创建 GitHub 仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名：`blue-whale-payment`
4. 描述：`蓝鲸支付测试系统`
5. 选择 "Public"
6. 不要勾选 "Add a README file"
7. 点击 "Create repository"

### 步骤2：上传文件
1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将 `index.html` 文件拖拽到上传区域
3. 在 "Commit changes" 中输入：`Initial commit`
4. 点击 "Commit changes"

### 步骤3：启用 GitHub Pages
1. 进入仓库设置 (Settings)
2. 左侧菜单选择 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"
5. 点击 "Save"

### 步骤4：等待部署
- 等待几分钟，GitHub Pages 会自动部署
- 部署完成后，会显示绿色勾号
- 获得公网地址：`https://用户名.github.io/blue-whale-payment`

## 🧪 测试功能

部署成功后，您应该能看到：
1. **蓝鲸支付测试系统标题**
2. **部署状态成功信息**
3. **系统信息显示**
4. **回调地址配置**
5. **测试功能按钮**
6. **实时时间显示**

## 🔗 回调地址配置

页面会自动生成回调地址：
- **异步回调地址 (notifyUrl)**: `https://用户名.github.io/blue-whale-payment/api/pay/notify`
- **同步返回地址 (returnUrl)**: `https://用户名.github.io/blue-whale-payment/payPage/success.html`

### 配置到蓝鲸支付后台
1. 复制上面的回调地址
2. 登录蓝鲸支付后台
3. 找到回调地址配置
4. 粘贴对应的地址
5. 保存配置

## 🔧 如果遇到问题

### 1. 页面无法访问
- 检查仓库是否为 Public
- 等待几分钟让 GitHub Pages 部署完成
- 检查 Settings → Pages 中的部署状态

### 2. 回调地址不正确
- 确保使用完整的 HTTPS 地址
- 不要使用 HTTP 地址
- 检查地址是否包含正确的路径

### 3. 功能按钮不工作
- 检查浏览器控制台是否有错误
- 确保 JavaScript 已启用
- 刷新页面重试

## 🎉 部署成功标志

- ✅ 页面正常显示
- ✅ 所有功能按钮工作
- ✅ 回调地址正确生成
- ✅ 时间实时更新
- ✅ 域名正确显示

---

**现在请按照步骤部署到 GitHub Pages！**
