# MBTI 性格测评
静态部署
```
1. 更新 next.config.js
你需要在 next.config.js 文件中设置 output: 'export'，而不是使用 next export 命令。打开 next.config.js 文件，并确保其内容如下：

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 设置为 'export' 以启用静态导出
  // 其他配置...
};

module.exports = nextConfig;
2. 运行 next build
node高版本，在设置 output: 'export' 后，运行以下命令来构建项目：
yarn run next build
或者直接运行：
next build
这将生成静态导出所需的文件，并将它们输出到 out 文件夹中。
```

## 项目简介

该项目实现了 MBTI（Myers-Briggs Type Indicator）性格测试，通过一系列问题，帮助用户了解自己的个性特征，并确定他们的 MBTI 类型。MBTI 将个性分为四个维度，最终组合出 16 种性格类型，用户可根据测试结果了解更多关于自己的信息。



## 功能特性

- **16 种 MBTI 类型**：通过测试了解您属于哪种 MBTI 类型（如：INTJ、ENFP）。
- **用户友好界面**：简洁直观的设计，引导用户完成测试问题。
- **结果展示**：测试结果展示您的 MBTI 类型，并提供详细的性格描述。
- **移动端兼容**：支持桌面和移动设备的访问。
- **问题自定义**：也可以修改问题，当作其他评估类的项目。

## 技术栈

纯前端，无需后端支持，基于`react` & `Next.js` & `Chakra UI`。



## MBTI 类型简介

MBTI（Myers-Briggs Type Indicator）将人格类型基于四个维度进行组合。以下是每个维度的介绍：

1. **外向（Extraversion, E） vs 内向（Introversion, I）**  
   - **外向**：喜欢与人交往，通过与他人互动获得能量，倾向于关注外部世界，热衷于活动和交流。
   - **内向**：更喜欢独处或与少数人深度交流，通过独处获得能量，关注内心世界，倾向于思考和反省。

2. **感觉（Sensing, S） vs 直觉（Intuition, N）**  
   - **感觉**：注重实际的细节和数据，通过感官获取信息，倾向于依靠经验和事实做决策。
   - **直觉**：更关注全局和未来的可能性，通过联想和直觉获取信息，倾向于创新、理论和长远的思考。

3. **思考（Thinking, T） vs 情感（Feeling, F）**  
   - **思考**：重视逻辑和客观分析，倾向于通过客观标准和原则做出决策，追求公正和效率。
   - **情感**：重视人际关系和情感因素，倾向于基于价值观和情感做决策，关注和谐和关怀。

4. **判断（Judging, J） vs 知觉（Perceiving, P）**  
   - **判断**：喜欢有计划、有条理地生活，倾向于快速做决定，注重控制和预见性，喜欢按计划行事。
   - **知觉**：灵活、随性，喜欢保留选择的余地，倾向于随时适应变化，偏好开放性和多样性。

通过这四个维度的组合，MBTI 产生了 16 种人格类型，每种类型都提供了不同的性格特征与行为倾向。这种分类方法帮助人们了解自己的偏好、思维方式和与他人互动的模式。

PS: MBTI 测试虽然有一定的流行性，但它也有一定的争议性，在学术心理学领域的科学性和可靠性经常受到质疑。



英文原文文档在这里：[MBTI-personality-test.pdf](./public/MBTI-personality-test.pdf)


## 致谢

[Rauf](https://github.com/rauf-21)、yaavi.me
