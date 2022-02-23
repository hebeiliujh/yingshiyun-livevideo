<template>
  <div class="home-page">
    <div id="video-container"></div>
  </div>
</template>
<script setup>
import EZUIKit from 'ezuikit-js';
import { onMounted } from 'vue';
import useAccessToken from '@/hooks/useAccessToken';

onMounted(async () => {
  const { code, data } = await useAccessToken();
  if (200 === Number(code)) {
    const player = new EZUIKit.EZUIKitPlayer({
      id: 'video-container', // 视频容器ID
      accessToken: data.accessToken,
      url: `ezopen://${import.meta.env.VITE_VERIFICATION_CODE}@open.ys7.com/${
        import.meta.env.VITE_DEVICE_SERIAL
      }/1.hd.live`,
      header: ['capturePicture', 'save', 'zoom'],
      footer: ['talk', 'broadcast', 'hd', 'fullScreen'],
      audio: 1,
      width: '800',
      height: '450',
    });
    player.play();
  }
});
</script>
<style scoped>
.home-page {
  display: flex;
}
</style>
