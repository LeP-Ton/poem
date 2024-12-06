// 诗集数据
const poems = [
    {
      title: "七绝 好天气",
      content: [
        "一反常年三九天，",
        "曈曈日暖景无边;",
        "上苍眷顾人间客，",
        "老幼相安笑意甜。"
      ]
    },
    {
      title: "春夜洛城闻笛",
      content: [
        "谁家玉笛暗飞声，",
        "散入春风满洛城。",
        "此夜曲中闻折柳，",
        "何人不起故园情。"
      ]
    }
    // 可以继续添加更多的诗句
  ];

  const classNames = ["one", "two", "three", "four", "five", "six", "seven"];
  
  // 获取按钮和卡片容器
  const nextButton = document.getElementById('next');
  const cardContainer = document.querySelector('.card-container');
  
  // 点击按钮时创建卡片并展示诗句
  nextButton.addEventListener('click', () => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)]; // 随机选一首诗
    createPoemCard(randomPoem);
  });
  
  // 创建诗卡片并逐句显示诗句
  function createPoemCard(poem) {
    // 创建卡片容器
    const card = document.createElement('div');
    card.classList.add('poem-card');

    // 创建动画class
    const animateClass = classNames[Math.floor(Math.random() * classNames.length)]
  
    // 创建标题
    const title = document.createElement('h3');
    title.textContent = poem.title;
    card.appendChild(title);
  
    // 创建诗句内容的容器
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('poem-content');
    card.appendChild(contentContainer);
  
    // 将卡片添加到容器中
    cardContainer.appendChild(card);
  
    // 定时逐句显示诗句
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < poem.content.length) {
        const line = document.createElement('p');
        line.textContent = poem.content[lineIndex];
        line.className = `animate ${animateClass}`;
        contentContainer.appendChild(line);
        lineIndex++;
      } else {
        clearInterval(interval); // 诗句显示完后停止定时器
      }
    }, 1000); // 每秒钟显示一句
  }
  