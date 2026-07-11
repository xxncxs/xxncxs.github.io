// docs/javascripts/mathjax.js
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  // ★ 添加 chtml 配置，启用 mtextInheritFont
  chtml: {
    mtextInheritFont: true
  },
  // 如果你用 SVG 输出，也加上 svg 配置
  svg: {
    mtextInheritFont: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"   // 这个类名要与容器匹配
  }
};

// 页面切换时重新渲染（Zensical 的典型做法）
document$.subscribe(() => { 
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})

component$.subscribe(({ ref }) => {
  if (ref.classList.contains("md-annotation"))
    MathJax.typesetPromise([ref])
})