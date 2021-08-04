<template>
  <div class="binhoxy-container"><binh-tho-oxy></binh-tho-oxy></div>
</template>

<script>
import BinhThoOxy from "../components/binh-tho-oxy";

export default {
  name: "Binhoxy",
  components: {
    BinhThoOxy,
  },
  metaInfo: {
    title: "binhoxy - tramyte",
    meta: [
      {
        property: "og:title",
        content: "binhoxy - tramyte",
      },
    ],
  },
};
</script>

<style scoped>
.binhoxy-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
