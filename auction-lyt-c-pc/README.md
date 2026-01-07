# 鹭易通拍卖平台 - 静态HTML版本

这是从 Vue3 + TypeScript + Vite 项目还原的纯静态HTML版本。

## 项目结构

```
html/auction-lyt-c-pc/
├── index.html                 # 首页
├── README.md                  # 项目说明文档
├── css/                       # 样式文件目录
│   ├── style.css             # 公共样式
│   ├── index.css             # 首页样式
│   ├── targets.css           # 标的物页面样式
│   ├── auction.css           # 拍卖会页面样式
│   └── login.css             # 登录页面样式
├── js/                        # JavaScript文件目录
│   └── (待添加)
├── images/                    # 图片资源目录
│   └── (待添加)
└── pages/                     # 子页面目录
    ├── targets-list.html     # 标的物列表页
    ├── auction-list.html     # 拍卖会列表页
    ├── auction-hall.html     # 拍卖大厅页
    ├── login.html            # 登录页
    ├── notice-list.html      # 公告列表页
    ├── policy-list.html      # 政策法规页
    ├── help.html             # 帮助中心页
    ├── about.html            # 关于我们页
    └── investment.html       # 资产招商页
```

## 技术栈

- 纯HTML5 + CSS3
- 响应式设计
- 无需构建工具，可直接在浏览器中打开

## 页面说明

### 主要页面

1. **首页** (`index.html`)
   - 搜索功能
   - 登录入口
   - 政策法规和帮助中心
   - 拍卖公告
   - 热门标的
   - 拍卖会
   - 资产招商
   - 在线拍卖大厅

2. **标的物列表** (`pages/targets-list.html`)
   - 多维度筛选(类别、地区、状态)
   - 标的卡片展示
   - 分页功能

3. **拍卖会列表** (`pages/auction-list.html`)
   - 拍卖会活动展示
   - 拍卖会状态标签
   - 拍卖会详情入口

4. **拍卖大厅** (`pages/auction-hall.html`)
   - 实时竞价展示
   - 出价功能界面

5. **登录页** (`pages/login.html`)
   - 短信验证码登录
   - 图形验证码

### 辅助页面

6. **公告列表** (`pages/notice-list.html`)
   - 拍卖公告
   - 成交公告
   - 平台信息

7. **政策法规** (`pages/policy-list.html`)
   - 相关法律法规展示

8. **帮助中心** (`pages/help.html`)
   - 了解拍卖
   - 实名认证
   - 竞拍流程
   - 拍卖规则
   - 购房政策
   - 贷款政策

9. **关于我们** (`pages/about.html`)
   - 平台介绍

10. **资产招商** (`pages/investment.html`)
    - 招商信息展示

## 主题色系

- **主色调**: #CC2131 (红色)
- **页面背景**: #F9FAFB
- **警告色**: #FFAF1A
- **错误色**: #F33A3A
- **成功色**: #10A1AE
- **内容宽度**: 1400px

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或使用本地服务器:
   ```bash
   # 使用 Python
   python -m http.server 8000

   # 使用 Node.js
   npx serve

   # 使用 PHP
   php -S localhost:8000
   ```

3. 访问 `http://localhost:8000` 或 `http://127.0.0.1:8000`

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 从原项目转换说明

本静态HTML版本是从以下技术栈的Vue项目转换而来:
- Vue 3.3.4
- TypeScript 5.0.4
- Vite 4.3.9
- Element Plus 2.7.8
- Vue Router 4.2.2
- Pinia 2.1.3

所有组件都已转换为纯HTML+CSS实现,无需JavaScript框架。

## 后续完善建议

1. 添加更多页面详情页(标的物详情、拍卖会详情等)
2. 补充JavaScript交互功能
3. 添加更多示例数据和图片
4. 完善响应式布局
5. 添加表单验证功能

## 联系方式

- 客服专线: 0592-2612580
- 地址: 厦门市思明区厦禾路695号四层（君临宝邸）

---

**注意**: 这是一个静态演示版本,所有数据都是静态展示,没有后端交互功能。
