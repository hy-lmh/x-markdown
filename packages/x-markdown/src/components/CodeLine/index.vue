<template>
  <!-- 行内代码组件 - 当 enableAnimate 为 true 时添加动画 class -->
  <code class="x-md-inline-code" :class="{ 'x-md-animated-word': props.enableAnimate }">
    {{ content }}
  </code>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { CodeLineProps } from './types';

// 定义组件 props，支持行内代码的原始数据和动画开关
const props = withDefaults(defineProps<CodeLineProps>(), {
  raw: () => ({}),
  enableAnimate: false, // 默认不启用动画
});

// 获取实际内容 - 从 raw 对象中提取代码内容
const content = computed(() => {
  const result = props.raw?.content ?? '';
  return result;
});
</script>