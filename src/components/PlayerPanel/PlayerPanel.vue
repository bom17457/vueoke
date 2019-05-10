<template>
  <div>
      <player-time         
        v-model="currentTime" @onPlay="onPlay"    
      />            
  </div>
</template>

<script>
import moment from "moment";
import eventbus from '@/plugins/eventbus.js'
import PlayerTime from './PlayerTime.vue'

export default {
  name: "PlayerPanel",
  data: () => ({
    play: true,
    currentTime: 0
  }),
  components: { PlayerTime },
  computed: {
  },
  methods: {
    onPlay(e){
        eventbus.$emit('updateLyrics', this.currentTime)
    }
  },
  mounted() {    

  }
};
</script>

<style>
</style>
