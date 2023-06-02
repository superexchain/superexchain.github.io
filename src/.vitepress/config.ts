import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCS Chain",
  description: "SCS Chain",
  outDir: "../docs",
  locales: {
    root: {
      label: "English",
      lang: "/",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        sidebar: [
          {
            text: "Quick Start",
            items: [
              { text: "Introduction", link: "/quick-start/introduction" },
            ],
          },
          {
            text: "Node",
            items: [{ text: "Node Overview", link: "/node/node-overview" }],
          },
          {
            text: "Smart Contract",
            items: [
              {
                text: "Deployment",
                items: [
                  {
                    text: "Deploy with Remix",
                    link: "smart-contract/deployment/remix",
                  },
                ],
              },
              {
                text: "SIP Standard",
                items: [
                  {
                    text: "SIP 20：SRC-20 Token Standard",
                    link: "smart-contract/standard/SIP-20",
                  },
                  {
                    text: "SIP 721：SRC-721 Non-Fungible Token Standard",
                    link: "smart-contract/standard/SIP-721",
                  },
                ],
              },
            ],
          },
          {
            text: "API",
            items: [
              {
                text: "JSON-RPC",
                link: "/api/json-rpc",
              },
            ],
          },
          {
            text: "SDK",
            items: [
              {
                text: "Ethers.js",
                link: "/sdk/ethersjs",
              },
            ],
          },
          {
            text: "Question",
            items: [{ text: "Q&A", link: "/question/question-answer" }],
          },
        ],

        socialLinks: [
          // { icon: 'github', link: 'https://github.com/superexchain' }
        ],

        outlineTitle: " ",
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        sidebar: [
          {
            text: "快速开始",
            items: [{ text: "简介", link: "/zh/quick-start/introduction" }],
          },
          {
            text: "节点",
            items: [{ text: "节点概述", link: "/zh/node/node-overview" }],
          },
          {
            text: "智能合约",
            items: [
              {
                text: "部署",
                items: [
                  {
                    text: "使用Remix",
                    link: "/zh/smart-contract/deployment/remix",
                  },
                  // { text: "使用SCS Start", link: "/zh/smart-contract/deployment/scs-start" },
                ],
              },
              {
                text: "标准",
                items: [
                  {
                    text: "SIP 20：SRC-20 代币标准",
                    link: "/zh/smart-contract/standard/SIP-20",
                  },
                  {
                    text: "SIP 721：SRC-721 非同质化代币标准",
                    link: "/zh/smart-contract/standard/SIP-721",
                  },
                ],
              },
            ],
          },
          {
            text: "API",
            items: [
              {
                text: "JSON-RPC",
                link: "/zh/api/json-rpc",
              },
            ],
          },
          {
            text: "SDK",
            items: [
              {
                text: "Ethers.js",
                link: "/zh/sdk/ethersjs",
              },
            ],
          },
          {
            text: "常见问题",
            items: [
              { text: "常见问题解答", link: "/zh/question/question-answer" },
            ],
          },
        ],

        socialLinks: [
          // { icon: 'github', link: 'https://github.com/superexchain' }
        ],

        darkModeSwitchLabel: "主题",
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "目录",
        outlineTitle: " ",
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
      },
    },
  },
});
