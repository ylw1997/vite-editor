<!--
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2022-09-26 14:10:44
 * @LastEditTime: 2022-11-09 14:26:31
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vite-editor\src\App.vue
 * Copyright (c) 2022 by yangliwei 1280426581@qq.com, All Rights Reserved. 
 * @Description: 
-->


<template>
  <proEditor :value="editorData" :readonly="true" />
</template>

<script setup lang="ts">
import proEditor from './components/proEditor.vue';
import { ref } from 'vue';

const editorData = ref("asdf")
</script>