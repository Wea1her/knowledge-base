---
title: 项目准备
description: “为跟随课程准备示例项目”
order: 5
---

有一个可以操作的项目，会让你在 Claude Code 中练习时更有意思。

我准备了一个小项目供你探索，它就是前面视频里演示的 UI 生成应用。

:::caution[注意]
你不一定需要运行这个项目，如果你愿意，也可以用自己的代码库跟随课程。
:::

:::note[课程来源]
原文链接：[项目准备 (Anthropic 官方课程)](https://anthropic.skilljar.com/claude-code-in-action/301615)
:::

### 准备步骤

该项目需要一些基础设置：

1. 确保本地安装了 **Node.js**。安装说明：[Node.js Download](https://nodejs.org/en/download)
2. 下载本节附带的 `uigen.zip` 并解压。
3. 在项目目录运行 `npm run setup`，安装依赖并初始化本地 SQLite 数据库。
4. **可选：获取 API Key**
   该项目使用 Anthropic API 调用 Claude 生成 UI 组件。如果你想完整体验应用，需要提供 API Key（不提供也能生成静态假代码）。
   - 在 [Anthropic Console](https://console.anthropic.com/) 获取 API Key。
   - 将 API Key 写入 `.env` 文件。
5. 运行 `npm run dev` 启动项目。
