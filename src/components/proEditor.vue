<!--
 * @Author: YangLiwei
 * @Date: 2022-07-18 15:15:38
 * @LastEditTime: 2022-11-09 16:02:46
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vite-editor\src\components\proEditor.vue
 * @Description: 
-->
<template>
  <div style="border: 1px solid #ccc;height: calc(100% - 100px);height: 100%;">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="{}" mode="default" />
    <Editor style="height: calc(100% - 100px); overflow-y: hidden" v-model="content" :defaultConfig="editorConfig"
      mode="default" @onCreated="handleCreated" @onChange="handleChange" />
  </div>
</template>

<script lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { shallowRef, ref, watch, Prop, computed, defineComponent } from 'vue';
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: "proEditor",
  components: {
    Editor,
    Toolbar,
  },
  props: {
    value: {
      type: String,
      default: () => "",
    },
    uploadFunc: {
      type: Function,
      default: () => { },
    } as Prop<(file: File) => Promise<AxiosResponse<any, any>>>,
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:value"],
  setup(props, { emit: emits }) {
    const editorRef = shallowRef();


    const content = ref("");

    // 自定义上传函数
    const customUpload = async (file: File, insertFn: any) => {
      if (props.uploadFunc) {
        const res = await props.uploadFunc(file);
        insertFn(res.data.data.url, res.data.data.name);
      } else {
        console.error("请传入上传函数");
      }
    };


    const editorConfig = computed(() => {
      return {
        readOnly: props.readonly,
        placeholder: "请输入内容...",
        MENU_CONF: {
          uploadImage: {
            customUpload
          },
          uploadVideo: {
            customUpload,
          },
        },
      };
    })


    const handleCreated = (editor: any) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };


    watch(props, (val) => {
      content.value = val.value;
    }, {
      immediate: true
    });

    //改变
    const handleChange = (editor: any) => {
      emits("update:value", editor.getHtml());
    };
    return {
      editorRef,
      content,
      editorConfig,
      handleCreated,
      handleChange,
    };
  },
});
</script>
