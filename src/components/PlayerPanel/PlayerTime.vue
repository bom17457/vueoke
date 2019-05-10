<template>
  <div style="width:100%">
    <div>
      <audio ref="baseAudio" v-on:timeupdate="onPlay">
        <source src="@/assets/jebteetongru.ogg">
      </audio>
      <a-slider
        @change="changeTime"
        @afterChange="afterChangeTime"
        ref="slider"
        v-model="currentTime"
        :tipFormatter="timeFormatter"
        :min="0"
        :max="max"
        :marks="marks"
      />
    </div>
    <div>
      <a-button shape="circle" size="default" icon="vertical-right"/>
      <a-button shape="circle" size="large" :icon="(play)?'pause':'right'" @click="playCTRL"/>
      <a-button shape="circle" size="default" icon="vertical-left"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "PlayerTime",
  data: () => ({
    curTime: 0,
    play: false,
    max: 0
  }),
  props: {
    value: {
      type: Number
    },
    queue: {
      //playlist
      type: Array
    }
  },
  methods: {
    //format the time tooltip
    timeFormatter(value) {
      return `${moment(Math.round(value * 1000)).format("mm:ss")}`;
    },
    changeTime(e) {
      this.$refs.baseAudio.currentTime = e
    },
    afterChangeTime() {
      this.$emit("input", this.currentTime)
    },
    onPlay(e) {
      this.currentTime = this.$refs.baseAudio.currentTime
      this.$emit("onPlay", e)
      this.$emit("input", this.currentTime)
    },
    playCTRL() {
      this.play = !this.play
      if(this.play){
        this.$refs.baseAudio.play()      
      }else{
        this.$refs.baseAudio.pause()
      }
    },
    setUP() {
      this.$refs.baseAudio.autoplay = true
      this.$refs.baseAudio.ondurationchange = () => {
        this.max = this.$refs.baseAudio.duration              
      };

      this.$refs.baseAudio.oncanplay = () => {        
        this.play = true
      }
    }
  },
  computed: {
    marks: {
      get() {
        let currentMaxStr = `${this.timeFormatter(
          this.currentTime
        )} / ${this.timeFormatter(this.max)}`
        return {
          [this.max]: {
            style: { left: "95% !important", right: "60px" },
            label: currentMaxStr
          }
        };
      }
    },
    currentTime: {
      get() {
        return this.curTime
      },
      set(value) {
        this.curTime = value
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.setUP()
    })
  }
}
</script>

<style>
</style>
