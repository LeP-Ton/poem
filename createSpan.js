// 使用 MutationObserver 监听 body 中的所有变化
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            // 仅处理 class 包含 'animate' 的新元素
            if (node.classList && node.classList.contains('animate')) {
                const text = node.dataset.text || node.textContent; // 获取文本内容
                node.textContent = ''; // 清空原文本内容

                // 将字符串拆分并生成 span 元素
                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char; // 设置字符内容
                    span.style.animationDelay = `${index * 0.05}s`; // 设置每个字符的动画延迟
                    node.appendChild(span); // 添加到容器中
                });
            }
        });
    });
});

// 设置观察配置，观察 DOM 中的子元素变化
const config = { childList: true, subtree: true };

// 启动观察，监听整个 body 元素的变化
const body = document.querySelector('body');
if (body) {
    observer.observe(body, config);
}
