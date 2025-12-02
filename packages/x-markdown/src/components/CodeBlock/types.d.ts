import type { BuiltinTheme } from 'shiki'

/**
 * CodeBlock 组件的 Props 类型定义
 * 用于代码块的展示和高亮
 */
export interface CodeBlockProps {
  /**
   * 原始数据对象，包含代码块的完整信息
   */
  raw?: CodeBlockRaw;
  /**
   * 是否为深色模式
   */
  isDark?: boolean;
  /**
   * 亮色主题
   */
  lightTheme?: BuiltinTheme;
  /**
   * 暗色主题
   */
  darkTheme?: BuiltinTheme;
  /**
   * 是否显示代码块头部
   * @default true
   */
  showCodeBlockHeader?: boolean;
  /**
   * 代码块最大高度（超出后滚动）
   * @example '300px'
   */
  codeMaxHeight?: string;
  /**
   * 是否启用动画效果
   * 启用后会给每个 token 添加 x-md-animated-word class
   * @default false
   */
  enableAnimate?: boolean;
}

/**
 * 代码块原始数据类型
 * 从 Markdown 解析后传入的原始信息
 */
export interface CodeBlockRaw {
  /**
   * 唯一标识符
   * @example 'code-0'
   */
  key?: string;

  /**
   * 原始语言标识（带 language- 前缀）
   * @example 'language-javascript'
   */
  languageOriginal?: string;

  /**
   * 代码语言
   * @example 'javascript'
   */
  language?: string;

  /**
   * 是否是行内代码
   * @default false
   */
  inline?: boolean;

  /**
   * 代码内容
   */
  content?: string;

  /**
   * CSS 类名数组
   * @example ['language-javascript']
   */
  class?: string[];
}
