<!--
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2022-09-26 14:10:44
 * @LastEditTime: 2022-11-09 15:01:30
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vite-editor\src\App.vue
 * Copyright (c) 2022 by yangliwei 1280426581@qq.com, All Rights Reserved. 
 * @Description: 
-->


<template>
  <goodsDetail :value="editorData" :readonly="false" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const goodsDetail = defineAsyncComponent(
  () => import("./components/proEditor.vue")
);


const editorData = ref("asdf")
</script>