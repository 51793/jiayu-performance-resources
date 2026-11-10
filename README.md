# 伽鱼 · 免 Root 性能资源站

无依赖的静态商品展示页，包含免 Root 性能方案介绍、8 个卡网商品、分类筛选、商品详情弹窗、复制链接、直接跳转和樱花飘落效果。

## 在线访问

- 固定网址：https://51793.github.io/jiayu-performance-resources/
- GitHub 仓库：https://github.com/51793/jiayu-performance-resources

请直接分享 GitHub Pages 地址，不要使用 TinyURL 等短链接服务。第三方短链接可能插入预览页、广告页或安全提示，造成“被拦截”的错觉。

## 安全说明

- 页面全程使用 HTTPS，由 GitHub Pages 提供 HSTS。
- 页面不加载第三方脚本、统计代码、外链字体或远程图片。
- 已使用内容安全策略限制脚本、样式、图片和嵌入来源。
- 外部商品地址使用 `noopener noreferrer`，不会向卡网传递当前页面来源。
- 支付和发货在第三方卡网完成，其页面安全与售后规则由该平台负责。

## 使用方式

直接双击 `index.html` 即可预览，也可以将本项目部署到任意静态托管平台。

商品点击后会先打开详情弹窗，用户可以选择：

- 复制完整卡网商品链接；
- 直接在新标签页打开卡网商品页。

## 修改商品

商品数据集中在 `app.js` 顶部的 `PRODUCTS` 数组中：

```js
{
  id: "mfr45y",
  category: "module",
  categoryLabel: "性能模块",
  code: "iQOO",
  title: "伽鱼性能模块",
  subtitle: "开启 iQOO 满血 models",
  price: "9.99",
  referencePrice: "19.99",
  tags: ["iQOO 适配", "自动发货", "模块资源"],
  description: "商品介绍",
  url: "https://gtq.oopb.cn/item/mfr45y"
}
```

可用分类：

- `module`：性能模块
- `toolbox`：工具箱 / 教学
- `guide`：视频教学

价格、名称和说明根据 2026 年 11 月 10 日的卡网页面整理，实际信息以卡网下单页为准。

## 文件说明

- `index.html`：页面结构与商品详情弹窗
- `styles.css`：深紫樱花玻璃风、响应式布局与樱花动画
- `app.js`：商品数据、筛选、弹窗、复制链接与樱花生成
- `assets/logo.jpg`：伽鱼角色头像
- `assets/reward-code.jpg`：原赞赏码备份，当前页面未使用
