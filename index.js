// 诗集数据
const poems = [
  {
    title: "好天气",
    content: [
      "一反常年三九天，",
      "曈曈日暖景无边；",
      "上苍眷顾人间客，",
      "老幼相安笑意甜。",
    ],
  },
  // {
  //   title: "自嘲",
  //   content: [
  //     "恶疾缠身度晚秋，",
  //     "浑浑噩噩不知愁；",
  //     "高昂药费无从报，",
  //     "谁不为之也泪流！",
  //   ],
  // },
  {
    title: "盼",
    content: ["人在家中坐，", "喜从天上来；", "俩孙同缔侣，", "挽手乐开怀。"],
  },
  {
    title: "明日",
    content: [
      "冬至来临入九天，",
      "早霜如雪皓无边；",
      "越冬虫子难逃命，",
      "喜煞明年省药钱！",
    ],
  },
  // {
  //   title: "忆江南 恭贺小年",
  //   content: [
  //     "广州好，",
  //     "祖国最南边。",
  //     "一线荣城咸发迹，",
  //     "全家老少庆团圆，",
  //     "应喜胜于前。",
  //   ],
  // },
  {
    title: "欣喜爱孙缔良缘",
    content: [
      "万里迢迢一线牵，",
      "天仙赐福缔良缘；",
      "两情相悦余心乐，",
      "吐气扬眉颂百篇。",
    ],
  },
  {
    title: "牵挂",
    content: [
      "沪地疫情别样严，",
      "儿孙令我挂心间；",
      "惟期此疫清零早，",
      "还自原先灿烂天。",
    ],
  },
  {
    title: "喜雨",
    content: ["好雨知时节，", "盛夏乃发生；", "降温唯此雨，", "落下便宜人。"],
  },
  // {
  //   title: "心声",
  //   content: [
  //     "视频搞笑应开心，",
  //     "无动于衷叹自身；",
  //     "想必贤君能识我，",
  //     "阳春枯木不知春。",
  //   ],
  // },
  {
    title: "无题",
    content: [
      "风雪压身犹笑轻，",
      "寒霜作被志长明；",
      "云中自有凌霄志，",
      "他日登峰傲九京。",
    ],
  },
];

const classNames = ["one", "two", "three", "four", "five", "six", "seven"];

// 获取按钮和卡片容器
const nextButton = document.getElementById("next");
const cardContainer = document.querySelector(".card-container");

// 初始化创建一个卡片并展示诗句
let poemIndex = 0;
createPoemCard(poems[poemIndex]);

// 点击按钮时创建卡片并展示诗句
nextButton.addEventListener("click", () => {
  // 每点一次poemIndex加1，当点击到最后一首时，poemIndex会回到0，重新开始循环
  poemIndex = (poemIndex + 1) % poems.length;
  // const randomPoem = poems[Math.floor(Math.random() * poems.length)]; // 随机选一首诗
  createPoemCard(poems[poemIndex]);
});

// 创建诗卡片并逐句显示诗句
function createPoemCard(poem) {
  // 创建卡片容器
  const card = document.createElement("div");
  card.classList.add("poem-card");

  // 创建动画class
  const animateClass = classNames[poemIndex];

  // 创建标题
  const title = document.createElement("h3");
  title.textContent = poem.title;
  card.appendChild(title);

  // 创建诗句内容的容器
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("poem-content");
  card.appendChild(contentContainer);

  // 将卡片添加到容器中
  cardContainer.appendChild(card);

  // 定时逐句显示诗句
  let lineIndex = 0;
  const interval = setInterval(() => {
    if (lineIndex < poem.content.length) {
      const line = document.createElement("p");
      line.textContent = poem.content[lineIndex];
      line.className = `animate ${animateClass}`;
      contentContainer.appendChild(line);
      lineIndex++;
    } else {
      clearInterval(interval); // 诗句显示完后停止定时器
    }
  }, 1000); // 每秒钟显示一句
}
