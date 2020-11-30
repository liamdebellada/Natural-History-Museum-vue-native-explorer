<template>
<view>
    <view class="nav-bar">
        <touchable-opacity v-for="(navItem, index) in navigationOptions" :key="index" class="nav-bar-child" :on-press="() => {navigateTo(navItem.route, index)}">
            <image :source="navItem.image" class="icon" :style="{tintColor: navItem.color}"/>
        </touchable-opacity>
    </view>
</view>
</template>

<script>
import { AsyncStorage } from 'react-native'
export default {
  data () {
      return {
          navigationOptions: [
              {
                  route: 'Home',
                  image: require('../assets/home.png'),
                  color: 'white'
              },
              {
                  route: 'Recommended',
                  image: require('../assets/list.png'),
                  color: 'white'
              },
              {
                  route: 'DataSets',
                  image: require('../assets/dataset.png'),
                  color: 'white'
              },
              {
                  route: 'Map',
                  image: require('../assets/map-pin.png'),
                  color: 'white'
              },
              {
                  route: 'Settings',
                  image: require('../assets/settings-icon.png'),
                  color: 'white'
              }
          ],
          selected: 0
      }
  },
  props: {
    navigation: { type: Object }
  },
  methods: {
    async navigateTo(route, i) {
        this.navigation.navigate(route, {active: i})
    }
  },
  create() {
      console.log(this.selected)
  }
};
</script>

<style>
.icon {
    height: 30;
    width: 30;
}


.nav-bar-child {
    height: 100%;
    width: 20%;
    flex: 1;
    /* border-color: grey;
    border-width: 1; */
    align-items: center;
    justify-content: center;
}

.nav-bar {
    background-color:#6a3390;
    height: 48px;
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 0;
    flex-direction: row;
    z-index: 999;
    padding: 5;
}
</style>
