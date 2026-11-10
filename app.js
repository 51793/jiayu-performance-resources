if (window.top !== window.self) {
  document.documentElement.style.visibility = "hidden";
}

const PRODUCTS = [
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
    description:
      "本商品性能工具模块资源，下单额外赠送多款专业性能优化辅助软件，全部资源整合打包发放。支付成功后，卡网页面会自动显示网盘下载链接。",
    url: "https://gtq.oopb.cn/item/mfr45y",
  },
  {
    id: "h6shwy",
    category: "guide",
    categoryLabel: "视频教学",
    code: "02",
    title: "视频教学 2.0 版",
    subtitle: "仅搭配资源的教学，非调度资源",
    price: "5.00",
    referencePrice: "",
    tags: ["视频教学", "激活方法", "自动发货"],
    description:
      "这是关于免 Root 性能工具箱的使用教学以及免 Root 调度的激活教学方法。本商品仅包含教学，不含调度资源本体。",
    url: "https://gtq.oopb.cn/item/h6shwy",
  },
  {
    id: "ew7gov",
    category: "toolbox",
    categoryLabel: "工具箱 / 教学",
    code: "2.0",
    title: "免 Root 性能工具箱 2.0",
    subtitle: "含完整教学 · 下单赠性能软件",
    price: "19.99",
    referencePrice: "30.00",
    tags: ["含教学", "赠优化软件", "组合资源"],
    description:
      "本商品包含全套免 Root 性能工具箱 2.0 资源与配套完整使用教学，零基础也能看懂操作步骤。下单额外赠送多款专业性能优化辅助软件，全部资源整合打包发放。",
    url: "https://gtq.oopb.cn/item/ew7gov",
  },
  {
    id: "9x9lqf",
    category: "toolbox",
    categoryLabel: "工具箱 / 教学",
    code: "1.0",
    title: "免 Root 性能工具箱 1.0",
    subtitle: "含完整教学 · 入门版本",
    price: "18.99",
    referencePrice: "30.00",
    tags: ["含教学", "赠优化软件", "入门版本"],
    description:
      "本商品包含全套免 Root 性能工具箱资源与配套完整使用教学，零基础也能看懂操作步骤。下单额外赠送多款专业性能优化辅助软件，全部资源整合打包发放。",
    url: "https://gtq.oopb.cn/item/9x9lqf",
  },
  {
    id: "lym9up",
    category: "toolbox",
    categoryLabel: "工具箱",
    code: "2.0",
    title: "免 Root 性能工具箱 2.0",
    subtitle: "无教学 · 老版本适配较少",
    price: "15.00",
    referencePrice: "28.00",
    tags: ["无教学", "老版本适配少", "自动发货"],
    description:
      "伽鱼免 Root 性能工具箱 2.0 无教学资源。该商品为老版本，适配机型相对较少，购买前请确认自己的手机型号和系统版本。",
    url: "https://gtq.oopb.cn/item/lym9up",
  },
  {
    id: "m5mjnk",
    category: "module",
    categoryLabel: "性能模块",
    code: "2.0",
    title: "伽鱼性能模块 2.0",
    subtitle: "适配多数机型 · 含配套教学",
    price: "29.88",
    referencePrice: "60.00",
    tags: ["多机型适配", "含教学", "赠优化软件"],
    description:
      "本商品包含全套伽鱼性能模块 2.0，适配市面大部分机型，并提供配套完整使用教学。下单额外赠送多款专业性能优化辅助软件，全部资源整合打包发放。",
    url: "https://gtq.oopb.cn/item/m5mjnk",
  },
  {
    id: "v6c2m7",
    category: "module",
    categoryLabel: "性能模块",
    code: "3.0",
    title: "伽鱼性能模块 3.0",
    subtitle: "小白推荐首选 · 含完整教学",
    price: "38.88",
    referencePrice: "88.00",
    tags: ["推荐", "含教学", "多机型适配"],
    description:
      "本商品包含全套伽鱼性能模块 3.0，适配市面大部分机型，并提供配套完整使用教学。零基础也能看懂操作步骤，下单额外赠送多款专业性能优化辅助软件。",
    url: "https://gtq.oopb.cn/item/v6c2m7",
    featured: true,
  },
  {
    id: "lkas78",
    category: "module",
    categoryLabel: "性能模块",
    code: "3.0+",
    title: "伽鱼性能模块 3.0",
    subtitle: "永久包更新 · 含完整教学",
    price: "58.88",
    referencePrice: "88.00",
    tags: ["永久包更新", "含教学", "长期版本"],
    description:
      "本商品包含全套伽鱼性能模块 3.0，适配市面大部分机型，并提供配套完整教学与永久包更新权益。下单额外赠送多款专业性能优化辅助软件。",
    url: "https://gtq.oopb.cn/item/lkas78",
    featured: true,
  },
];

const productGrid = document.querySelector("#productGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const productDialog = document.querySelector("#productDialog");
const dialogClose = document.querySelector("#dialogClose");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogPrice = document.querySelector("#dialogPrice");
const dialogReferencePrice = document.querySelector("#dialogReferencePrice");
const dialogDescription = document.querySelector("#dialogDescription");
const dialogTags = document.querySelector("#dialogTags");
const dialogUrl = document.querySelector("#dialogUrl");
const copyProductLink = document.querySelector("#copyProductLink");
const openProductLink = document.querySelector("#openProductLink");
const toast = document.querySelector("#toast");
const petalLayer = document.querySelector("#petalLayer");
const year = document.querySelector("#year");

let activeProduct = null;
let toastTimer;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderProducts() {
  const fragment = document.createDocumentFragment();

  PRODUCTS.forEach((product, index) => {
    const card = createElement("article", "product-card");
    card.dataset.category = product.category;
    card.style.setProperty("--card-delay", `${index * 45}ms`);
    if (product.featured) card.classList.add("is-featured");

    const button = createElement("button", "product-card-button");
    button.type = "button";
    button.dataset.productId = product.id;
    button.setAttribute("aria-label", `查看商品：${product.title}，${product.subtitle}`);

    const top = createElement("div", "product-card-top");
    const indexLabel = createElement("span", "product-index", String(index + 1).padStart(2, "0"));
    const category = createElement("span", "product-category", product.categoryLabel);
    const badge = createElement("span", "product-badge", product.featured ? "推荐" : "在售");
    if (!product.featured) badge.classList.add("is-muted");
    top.append(indexLabel, category, badge);

    const versionRow = createElement("div", "product-version-row");
    const version = createElement("span", "product-version", product.code);
    const stock = createElement("span", "product-stock");
    const stockDot = createElement("i");
    stock.append(stockDot, document.createTextNode(" 自动发货"));
    versionRow.append(version, stock);

    const title = createElement("h3", "product-title", product.title);
    const subtitle = createElement("p", "product-subtitle", product.subtitle);

    const tagRow = createElement("div", "product-tags");
    product.tags.slice(0, 3).forEach((tag) => {
      tagRow.appendChild(createElement("span", "", tag));
    });

    const footer = createElement("div", "product-card-footer");
    const priceWrap = createElement("div", "product-price");
    priceWrap.appendChild(createElement("small", "", "¥"));
    priceWrap.appendChild(createElement("strong", "", product.price));
    if (product.referencePrice) {
      priceWrap.appendChild(createElement("del", "", `¥${product.referencePrice}`));
    }
    const action = createElement("span", "product-action", "查看详情 ↗");
    footer.append(priceWrap, action);

    button.append(top, versionRow, title, subtitle, tagRow, footer);
    card.appendChild(button);
    fragment.appendChild(card);
  });

  productGrid.appendChild(fragment);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  } catch {
    return false;
  }
}

function openProductDialog(product) {
  activeProduct = product;
  dialogCategory.textContent = product.categoryLabel;
  dialogTitle.textContent = `${product.title} · ${product.subtitle}`;
  dialogPrice.textContent = `¥${product.price}`;
  dialogReferencePrice.textContent = product.referencePrice
    ? `参考价 ¥${product.referencePrice}`
    : "以卡网页面价格为准";
  dialogDescription.textContent = product.description;
  dialogUrl.textContent = product.url;
  openProductLink.href = product.url;
  dialogTags.replaceChildren(
    ...product.tags.map((tag) => createElement("span", "", tag)),
  );

  if (typeof productDialog.showModal === "function") {
    productDialog.showModal();
  } else {
    productDialog.setAttribute("open", "");
  }
}

function closeProductDialog() {
  if (typeof productDialog.close === "function") {
    productDialog.close();
  } else {
    productDialog.removeAttribute("open");
  }
}

productGrid.addEventListener("click", (event) => {
  const cardButton = event.target.closest("[data-product-id]");
  if (!cardButton) return;
  const product = PRODUCTS.find((item) => item.id === cardButton.dataset.productId);
  if (product) openProductDialog(product);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll(".product-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

copyProductLink.addEventListener("click", async () => {
  if (!activeProduct) return;
  const copied = await copyText(activeProduct.url);
  showToast(copied ? "商品链接已复制" : "复制失败，请手动选择链接");
  if (copied) {
    copyProductLink.querySelector("span").textContent = "已复制";
    window.setTimeout(() => {
      copyProductLink.querySelector("span").textContent = "复制链接";
    }, 1600);
  }
});

dialogClose.addEventListener("click", closeProductDialog);
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) closeProductDialog();
});

function createPetals() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const petalCount = window.innerWidth < 720 ? 15 : 26;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < petalCount; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.setProperty("--left", `${Math.random() * 93}%`);
    petal.style.setProperty("--size", `${7 + Math.random() * 8}px`);
    petal.style.setProperty("--duration", `${10 + Math.random() * 11}s`);
    petal.style.setProperty("--delay", `${Math.random() * -20}s`);
    petal.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    petal.style.setProperty("--spin", `${180 + Math.random() * 480}deg`);
    petal.style.setProperty("--opacity", `${0.2 + Math.random() * 0.38}`);
    fragment.appendChild(petal);
  }

  petalLayer.appendChild(fragment);
}

if (window.top !== window.self) {
  const blockedNotice = document.createElement("p");
  blockedNotice.textContent = "此页面不支持被其他网站嵌入显示。";
  blockedNotice.style.cssText =
    "margin:20vh auto;max-width:520px;padding:24px;color:#ffeaf0;background:#201824;font:16px/1.7 'Microsoft YaHei',sans-serif;text-align:center;border-radius:16px;";
  document.body.replaceChildren(blockedNotice);
  document.documentElement.style.visibility = "visible";
} else {
  year.textContent = new Date().getFullYear();
  renderProducts();
  createPetals();
}
