import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import PlayerLyrics from '@/components/Lyrics/PlayerLyrics.vue'
import MusicList from '@/components/Music/MusicList.vue'
import PlayerLayout from '@/Layout/Player.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: PlayerLayout,      
      children:[        
        {path:'/', name:'karaoke', component: PlayerLyrics}
      ]
    },
  ]
})
