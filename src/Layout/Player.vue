<template>
    <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo"></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="mic" />
          <span class="nav-text">ร้องคาราโอเกะ</span>
        </a-menu-item>        
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <!--a-layout-header :style="{ background: '#fff', padding: 0 }" / -->
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial', height: 'calc(100vh - 24px)' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center', position:'fixed', width:'100%', left:'0px', paddingLeft:'200px', paddingRight:'0px',bottom:'0px', background: 'rgba(255,255,255,.2)' }">
        <PlayerPanel />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import PlayerPanel from '@/components/PlayerPanel/PlayerPanel.vue'
export default {
  name: "PlayerLayout",
  data: () => ({}),
  components:{ PlayerPanel }
};
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
