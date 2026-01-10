# Weather Cosmos - 个人知识库

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Weather 的个人知识库，用于记录和分享 Web3 开发、AI 辅助编程等领域的学习笔记与实践经验。

## 技术栈

- **Astro 5.x** - 静态站点生成框架
- **Starlight** - Astro 官方文档主题
- **MDX** - 支持在 Markdown 中使用组件
- **TypeScript** - 类型安全

## 内容分类

| 分类 | 描述 |
|:-----|:-----|
| **Web3 开发笔记** | 区块链、智能合约等 Web3 相关技术学习笔记 |
| **Vibe Coding** | AI 辅助编程相关内容，包含 Claude Code 实战课程等 |

## 项目结构

```
.
├── public/              # 静态资源（favicon 等）
├── src/
│   ├── assets/          # 图片资源
│   ├── components/      # 自定义组件
│   ├── content/
│   │   └── docs/        # 文档内容 (Markdown/MDX)
│   │       ├── web3/    # Web3 开发笔记
│   │       └── vibe-coding/  # Vibe Coding 相关
│   └── content.config.ts
├── astro.config.mjs     # Astro 配置
├── package.json
└── tsconfig.json
```

## 常用命令

所有命令在项目根目录下执行：

| 命令 | 描述 |
|:-----|:-----|
| `bun install` | 安装依赖 |
| `bun dev` | 启动开发服务器 (localhost:4321) |
| `bun build` | 构建生产版本至 `./dist/` |
| `bun preview` | 本地预览生产构建 |

## 相关链接

- [个人博客](https://0xweather.com/)
- [GitHub](https://github.com/Wea1her)
- [Starlight 文档](https://starlight.astro.build/)
- [Astro 文档](https://docs.astro.build)
