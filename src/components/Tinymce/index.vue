<template>
  <div class="tinymce-container editor-container">
    <textarea class="tinymce-textarea" :id="tinymceId"></textarea>
    <div class="editor-custom-btn-container">
      <EditorSlideUpload color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK"></EditorSlideUpload>
    </div>
  </div>
</template>

<script>
import EditorSlideUpload from "@/components/Upload/EditorSlide";
export default {
  name: "Tinymce",
  components: {EditorSlideUpload},
  data() {
    return {
      tinymceId: this.id || 'vue-tinymce-' + +new Date()
    }
  },
  methods: {
    imageSuccessCBK() {

    },
  }
}
</script>

<style scoped>

</style>