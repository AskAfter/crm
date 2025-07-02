module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)",
          text6: "var(--global-text-6)",
          text7: "var(--global-text-7)"
        },
        sidebar: {
          background1: "var(--sidebar-bg-1)",
          background2: "var(--sidebar-bg-2)",
          text1: "var(--sidebar-text-1)",
          text2: "var(--sidebar-text-2)"
        },
        header: {
          text1: "var(--header-text-1)"
        },
        table: {
          background1: "var(--table-bg-1)",
          background2: "var(--table-bg-2)",
          background3: "var(--table-bg-3)",
          background4: "var(--table-bg-4)"
        }
      }
    }
  },
  plugins: []
};