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
    "zh-tw": {
      label: "繁體中文",
      lang: "zh-tw",
      link: "/zh-tw/",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        sidebar: [
          {
            text: "快速開始",
            items: [{ text: "簡介", link: "/zh-tw/quick-start/introduction" }],
          },
          {
            text: "節點",
            items: [{ text: "節點概述", link: "/zh-tw/node/node-overview" }],
          },
          {
            text: "智能合约",
            items: [
              {
                text: "部署",
                items: [
                  {
                    text: "使用Remix",
                    link: "/zh-tw/smart-contract/deployment/remix",
                  },
                  // { text: "使用SCS Start", link: "/zh/smart-contract/deployment/scs-start" },
                ],
              },
              {
                text: "標準",
                items: [
                  {
                    text: "SIP 20：SRC-20 代幣標準",
                    link: "/zh-tw/smart-contract/standard/SIP-20",
                  },
                  {
                    text: "SIP 721：SRC-721 非同質化代幣標準",
                    link: "/zh-tw/smart-contract/standard/SIP-721",
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
                link: "/zh-tw/api/json-rpc",
              },
            ],
          },
          {
            text: "SDK",
            items: [
              {
                text: "Ethers.js",
                link: "/zh-tw/sdk/ethersjs",
              },
            ],
          },
          {
            text: "常見問題",
            items: [
              { text: "常見問題解答", link: "/zh-tw/question/question-answer" },
            ],
          },
        ],

        socialLinks: [
          // { icon: 'github', link: 'https://github.com/superexchain' }
        ],

        darkModeSwitchLabel: "主題",
        returnToTopLabel: "返回頂部",
        sidebarMenuLabel: "目錄",
        outlineTitle: " ",
        docFooter: {
          prev: "上一頁",
          next: "下一頁",
        },
      },
    },
  },
});
