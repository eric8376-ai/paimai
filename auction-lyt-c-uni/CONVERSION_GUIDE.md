# uni-app 到静态HTML转换指南

本文档说明如何将uni-app小程序页面转换为静态HTML页面。

## 转换步骤

### 1. 分析小程序页面结构

#### 1.1 查看页面配置
从 `pages.json` 获取页面列表和导航配置:

```json
{
  "path": "pages/index/index",
  "style": {
    "navigationBarTitleText": "鹭易通拍卖平台"
  }
}
```

#### 1.2 分析页面组件
识别页面使用的组件:
- 页面自身组件 (如 `pages/index/index.vue`)
- 公共组件 (如 `components/tabBar.vue`)
- 列表卡片组件 (如 `components/lotsCard/index.vue`)

### 2. HTML结构转换

#### 2.1 模板语法转换

**uni-app/Vue语法** → **HTML语法**

```vue
<!-- 小程序 -->
<view class="container">
  <text>{{title}}</text>
</view>
```

```html
<!-- HTML -->
<div class="container">
  <span>静态标题文本</span>
</div>
```

#### 2.2 常用标签映射

| uni-app | HTML | 说明 |
|---------|------|------|
| view    | div  | 容器 |
| text    | span | 文本 |
| image   | img  | 图片 |
| input   | input | 输入框 |
| button  | button | 按钮 |
| scroll-view | div | 滚动容器 |

#### 2.3 属性绑定转换

```vue
<!-- 小程序 -->
<image :src="imageUrl" />
<input v-model="keyword" />
<view @tap="handleClick">点击</view>
```

```html
<!-- HTML -->
<img src="static-image-url.jpg" />
<input type="text" placeholder="静态提示" />
<div onclick="window.location.href='target.html'">点击</div>
```

### 3. 样式转换 (SCSS → CSS)

#### 3.1 单位换算

**小程序rpx → HTML px**
- 换算公式: `px = rpx / 2`
- 示例:
  - `32rpx` → `16px`
  - `48rpx` → `24px`
  - `100vw` → `100%` 或 `100vw`

#### 3.2 SCSS变量替换

```scss
// 小程序SCSS
$base-color: #CC2131;
background: $base-color;
padding: 32rpx;
```

```css
/* HTML CSS */
background: var(--primary);
padding: 16px;
```

#### 3.3 常用样式转换

| SCSS | CSS | 说明 |
|------|-----|------|
| `display: flex` | `display: flex` | 保持不变 |
| `@mixin name()` | 手动展开 | 移除mixin |
| `$variable` | `var(--variable)` | 变量语法 |
| `&.class` | `.parent.class` | 嵌套选择器 |
| `// 注释` | `/* 注释 */` | 单行注释 |

### 4. 数据和逻辑处理

#### 4.1 移除小程序API

```javascript
// 小程序代码 - 移除
uni.navigateTo({ url: '/pages/detail/index' })
uni.request({ url: '/api/data' })
uni.getSystemInfoSync()
```

```html
<!-- HTML - 静态链接 -->
<a href="detail/index.html">详情</a>
```

#### 4.2 静态数据替换

```javascript
// 小程序 - 动态数据
data() {
  return {
    list: []
  }
},
onLoad() {
  this.getList()
}
```

```html
<!-- HTML - 静态数据 -->
<div class="list">
  <div class="item">静态项目1</div>
  <div class="item">静态项目2</div>
  <div class="item">静态项目3</div>
</div>
```

### 5. 组件转换示例

#### 5.1 简单组件

**小程序组件** (`components/tabBar.vue`):
```vue
<template>
  <view class="tabbar">
    <view v-for="item in list" :key="item.id">
      {{item.name}}
    </view>
  </view>
</template>
```

**HTML静态版本**:
```html
<div class="tabbar">
  <div class="tab-item">首页</div>
  <div class="tab-item">拍卖会</div>
  <div class="tab-item">标的物</div>
</div>
```

#### 5.2 卡片组件

**小程序组件** (`components/lotsCard/index.vue`):
```vue
<view class="lots-card" @tap="toDetail">
  <image :src="data.cover" />
  <text>{{data.title}}</text>
</view>
```

**HTML静态版本**:
```html
<a href="detail.html" class="lots-card">
  <img src="cover.jpg" alt="标题">
  <div class="title">静态标题</div>
</a>
```

### 6. 目录组织

#### 6.1 推荐结构

```
html/
├── css/
│   ├── base/           # 基础样式
│   ├── components/     # 组件样式
│   └── pages/          # 页面样式
├── js/
│   ├── components/     # 组件JS(如需)
│   └── utils/          # 工具函数
├── pages/              # 页面HTML
│   ├── index/
│   ├── auction/
│   └── lots/
├── images/             # 图片资源
└── index.html          # 入口页面
```

#### 6.2 文件命名

- 页面文件: `index.html`, `list.html`, `detail.html`
- 样式文件: 与页面同名 `index.css`
- 组件样式: 按组件名 `tabbar.css`, `card.css`

### 7. 最佳实践

#### 7.1 保持一致性

- 统一使用CSS变量
- 统一的命名规范 (BEM或小写-连字符)
- 一致的目录结构

#### 7.2 响应式设计

```css
/* 移动端优先 */
.container {
  padding: 16px;
}

/* 大屏幕适配 */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

#### 7.3 可访问性

```html
<!-- 使用语义化标签 -->
<header>
  <nav>导航</nav>
</header>
<main>
  <article>文章内容</article>
</main>
<footer>
  页脚信息
</footer>

<!-- 图片添加alt属性 -->
<img src="photo.jpg" alt="商品图片">

<!-- 表单添加label -->
<label for="search">搜索</label>
<input id="search" type="text">
```

#### 7.4 性能优化

- 压缩CSS和JS文件
- 优化图片大小和格式
- 使用CDN加速静态资源
- 添加懒加载属性: `<img loading="lazy">`

### 8. 测试检查清单

- [ ] 页面布局正确显示
- [ ] 文字大小和间距合适
- [ ] 链接跳转正常
- [ ] 图片加载显示
- [ ] 移动端适配良好
- [ ] 不同浏览器兼容性
- [ ] 无控制台错误

### 9. 常见问题

#### Q: 如何处理小程序条件编译?
A: 选择目标平台的代码,移除其他平台的条件判断。

```vue
<!-- #ifdef H5 -->
<h5平台代码</h5平台代码>
<!-- #endif -->
```

#### Q: 如何处理动态class?
A: 直接写出最终的class名称。

```vue
<!-- 小程序 -->
<view :class="['item', {active: isActive}]">

<!-- HTML -->
<div class="item active">
```

#### Q: 列表数据如何处理?
A: 手动展开列表项,通常提供3-6个示例数据。

#### Q: 如何处理路由跳转?
A: 使用HTML的 `<a>` 标签或 JavaScript的 `window.location.href`。

### 10. 工具推荐

- **编辑器**: VS Code
- **浏览器**: Chrome DevTools
- **测试**: Live Server (VS Code插件)
- **格式化**: Prettier
- **压缩**: CSSNano, UglifyJS

---

## 快速参考

### 转换命令模板

```bash
# 1. 创建页面目录
mkdir -p pages/your-page

# 2. 复制并转换HTML
# 手动编辑页面文件

# 3. 创建样式文件
# 按比例转换rpx到px

# 4. 测试页面
# 在浏览器中打开预览
```

### 转换时间估算

- 简单页面: 30-60分钟
- 中等页面: 1-2小时
- 复杂页面: 2-4小时

### 注意事项

1. 保持原设计稿的视觉效果
2. 优先考虑移动端体验
3. 使用语义化HTML标签
4. 确保代码可维护性
5. 添加必要的注释说明
