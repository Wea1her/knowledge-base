---
title: Claude Code 安装与配置
description: “如何在本地安装并配置 Claude Code”
order: 4
---

准备开始在本地安装 Claude Code！

:::note[课程来源]
原文链接：[Claude Code 安装与配置 (Anthropic 官方课程)](https://anthropic.skilljar.com/claude-code-in-action/301614)
:::

完整的安装说明请参考：[Claude Code Quickstart](https://code.claude.com/docs/en/quickstart)

### 简要步骤如下：

1. **安装 Claude Code**
   - **macOS (Homebrew)**: `brew install --cask claude-code`
   - **macOS / Linux / WSL**: `curl -fsSL https://claude.ai/install.sh | bash`
   - **Windows CMD**: `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`

2. **认证**
   安装完成后，在终端运行 `claude`。首次运行会提示你进行认证。

### 云端集成配置

如果你使用 AWS Bedrock 或 Google Cloud Vertex，还需要额外配置：

- **AWS Bedrock 说明**: [Amazon Bedrock integration](https://code.claude.com/docs/en/amazon-bedrock)
- **Google Cloud Vertex 说明**: [Google Vertex AI integration](https://code.claude.com/docs/en/google-vertex-ai)