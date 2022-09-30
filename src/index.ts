/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2022-09-26 17:00:18
 * @LastEditTime: 2022-09-30 14:11:22
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vite-editor\src\index.ts
 * Copyright (c) 2022 by yangliwei 1280426581@qq.com, All Rights Reserved. 
 * @Description: 
 */
import { App } from 'vue';
import proEditor from "./components/proEditor.vue"

//实现按需引入*
export { proEditor }

const components = [proEditor];

const install = (app: App) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
export default { install } // 批量的引入*
