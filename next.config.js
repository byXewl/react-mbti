/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/react-mbti', // 替换为你的仓库名称，发布部署用
}

module.exports = nextConfig
// module.exports = {
//   output: 'export',
// };