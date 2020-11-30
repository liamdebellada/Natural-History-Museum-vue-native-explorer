<template>
<view>
    <view ref="test" class="nav-bar">
        <touchable-opacity v-for="(navItem, index) in navigationOptions" :key="index" class="nav-bar-child" :on-press="() => {navigateTo(navItem.route)}">
            <image :source="navItem.image" class="icon" :style="{tintColor: indexDetection(index)}"/>
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
            ]
        }
  },
  props: {
    navigation: { type: Object },
    selected: {type: Number}
  },
  methods: {
    async navigateTo(route) {
        this.navigation.navigate(route)
    },
    indexDetection(i) {
        return i == this.selected ? '#ab34df' : '#939393'
    }
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
    background-color:#f6f6f6;
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
