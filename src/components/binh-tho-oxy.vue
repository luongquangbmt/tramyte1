<template>
  <div class="binh-tho-oxy-binhthooxy" v-bind:class="rootClassName">
    <h2>{{ heading2 }}</h2>
    <div class="binh-tho-oxy-container">
      <span>{{ text }}</span>
      <span>{{ text1 }}</span>
    </div>
    <div class="binh-tho-oxy-details">
      <span>{{ text2 }}</span>
      <span>{{ text3 }}</span>
      <span>{{ text4 }}</span>
      <span>{{ text5 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BinhThoOxy",
  props: {
    heading2: {
      type: String,
      default: "Hướng dẫn sử dụng bình thở",
    },
    rootClassName: String,
    text4: {
      type: String,
      default: "1. Trạm Oxy cộng đồng tại TP.HCM ",
    },
    text3: {
      type: String,
      default: "1. Trạm Oxy cộng đồng tại TP.HCM ",
    },
    text1: {
      type: String,
      default: "File pdf",
    },
    text5: {
      type: String,
      default: "1. Trạm Oxy cộng đồng tại TP.HCM ",
    },
    text: {
      type: String,
      default: "Video",
    },
    text2: {
      type: String,
      default: "1. Trạm Oxy cộng đồng tại TP.HCM ",
    },
  },
};
</script>

<style scoped>
.binh-tho-oxy-binhthooxy {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.binh-tho-oxy-container {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: space-between;
}
.binh-tho-oxy-details {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  grid-row-gap: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: center;
}
</style>
