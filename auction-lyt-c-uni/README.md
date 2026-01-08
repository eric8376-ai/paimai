# 鹭易通拍卖平台 - 静态HTML版本

这是从uni-app小程序转换而来的静态HTML版本。

## 转换说明

### 单位换算
- 小程序使用 `rpx` 单位,HTML版本使用 `px` 单位
- 换算比例: `2rpx ≈ 1px`
- 例如: `32rpx` → `16px`

### 目录结构

```
html/auction-lyt-c-uni/
├── css/
│   ├── base/
│   │   ├── variables.css    # CSS变量定义
│   │   └── reset.css        # CSS重置和基础样式
│   └── components/          # 组件样式
│       ├── tabbar.css
│       ├── lots-card.css
│       ├── auction-card.css
│       └── investment-card.css
├── pages/
│   └── index/
│       ├── index.html       # 首页HTML
│       └── index.css        # 首页样式
└── images/                  # 图片资源
```

### 已完成页面

#### 首页 (index)
- **路径**: `pages/index/index.html`
- **功能**:
  - 搜索框
  - 使用指南横幅
  - 资产招商列表(4个示例项)
  - 标的物列表(6个示例项,2列网格布局)
  - 拍卖会列表(4个示例项)
  - 底部TabBar导航

### 样式特性

1. **CSS变量**: 使用 `variables.css` 中定义的CSS变量
   - 主题色: `--primary: #CC2131`
   - 字体大小: `--font-size-base: 14px`
   - 间距: `--spacing-4: 16px`
   - 圆角: `--radius-md: 8px`

2. **响应式设计**:
   - 移动端优先
   - 使用flex和grid布局
   - 媒体查询适配小屏幕(≤375px)

3. **交互效果**:
   - 卡片hover效果
   - 链接过渡动画
   - 平滑滚动

### 模拟数据

所有页面使用静态模拟数据,替代了原小程序的API调用:

**资产招商数据示例**:
```javascript
{
  title: "某市中心商业房产招商项目",
  startPrice: "580",
  communityName: "万达广场"
}
```

**标的物数据示例**:
```javascript
{
  title: "某市思明区湖滨北路房产一处",
  type: 1,  // 1:房产, 2:机动车, 3:股权, 4:债权, 5:土地
  state: 0, // 0:即将开始, 1:拍卖中, 2-5:已结束
  startPrice: "380",
  beginTime: "2025-01-15 10:00"
}
```

**拍卖会数据示例**:
```javascript
{
  title: "一月房产专场拍卖会",
  modality: 2,  // 1:线上同步拍, 2:线上网络拍, 3:线下拍
  state: 1,     // 0:即将开始, 1:正在进行, 2:已结束
  startPrice: "3800",
  beginTime: "2025-01-10 10:00"
}
```

### ✅ 已完成的所有页面

#### 1. 首页 (index)
- **路径**: `pages/index/index.html`
- **功能**: 搜索框、使用指南、资产招商/标的物/拍卖会列表、底部TabBar导航

#### 2. 拍卖会
- **列表页**: `pages/auction/list/index.html` - 拍卖会列表,支持搜索筛选
- **详情页**: `pages/auction/detail/index.html` - 拍卖会详情,展示标的列表

#### 3. 标的物
- **列表页**: `pages/lots/list/index.html` - 标的物列表,支持筛选
- **详情页**: `pages/lots/detail/index.html` - 标的物详情,支持出价、查看竞价记录

#### 4. 资产招商
- **列表页**: `pages/investment/list/index.html` - 资产招商列表
- **详情页**: `pages/investment/detail/index.html` - 资产招商详情

#### 5. 个人中心
- **个人中心**: `pages/info/index.html` - 用户信息展示、功能菜单
- **我的参拍**: `pages/info/myLots/index.html` - 参拍记录(报名/参拍/成交/结束)
- **我的关注**: `pages/info/myAttention/index.html` - 关注的标的物
- **通知消息**: `pages/info/message/index.html` - 消息通知列表
- **我的资料**: `pages/info/myInfo/index.html` - 用户资料编辑
- **我的认证**: `pages/info/myAuthentication/index.html` - 实名认证

#### 6. 登录
- **登录页**: `pages/login/index.html` - 手机号登录/验证码登录

### 页面统计
- **总页面数**: 14个
- **HTML文件**: 14个
- **CSS文件**: 18个(页面CSS + 组件CSS)
- **代码行数**: 约5000+行

### 浏览器兼容性

- Chrome/Edge (推荐)
- Firefox
- Safari
- 移动端浏览器

### 如何使用

1. 直接在浏览器中打开 `pages/index/index.html`
2. 或使用本地服务器(如Live Server)预览
3. 确保网络连接正常,以加载在线图片资源

### 注意事项

1. 图片资源使用在线URL,需要网络连接
2. 图标使用简单的emoji或文本替代,可替换为图标字体库
3. 所有链接为相对路径,需要根据实际部署调整
4. 底部导航栏目前为静态展示,未实现页面切换功能

### 主要交互功能

#### 1. 标签页切换
- 标的物详情页:拍卖公告、竞拍须知、标的介绍、竞价记录
- 资产招商详情页:竞拍须知、标的介绍
- 我的参拍:报名中、参拍中、已成交、已结束
- 通知消息:全部、拍卖消息、系统消息

#### 2. 弹窗功能
- 通知消息详情弹窗(底部滑出)
- 性别选择弹窗(居中显示)
- Toast提示反馈

#### 3. 倒计时功能
- 标的物详情页包含实时倒计时

#### 4. 表单验证
- 身份证号格式验证(18位)
- 手机号格式验证
- 必填项验证

### 后续优化建议

1. **性能优化**
   - 图片懒加载
   - CSS/JS压缩
   - 静态资源CDN

2. **功能增强**
   - 对接真实后端API
   - 添加用户认证
   - 实现实时出价功能
   - WebSocket推送消息

3. **体验优化**
   - 添加骨架屏
   - 优化加载动画
   - 增加错误提示
   - 图片预览功能

## 版本信息

- **版本号**: v1.0.0
- **转换日期**: 2025年1月
- **原始项目**: auction-lyt-c-uni (uni-app小程序)
- **转换方式**: 手动转换,严格遵守 2rpx = 1px 标准
- **完成度**: 100% (所有页面已完成)

---

© 2025 鹭易通拍卖平台. All rights reserved.
