<template>
    <view class="nav-bar">
        <touchable-opacity class="nav-bar-child" :on-press="() => navigateTo('Home')">
            <image :source="require('../assets/home.png')" class="icon"/>
        </touchable-opacity>
        <touchable-opacity class="nav-bar-child" :on-press="() => navigateTo('Recommended')">
            <image :source="require('../assets/list.png')" class="icon"/>
        </touchable-opacity>
        <touchable-opacity class="nav-bar-child" :on-press="() => navigateTo('DataSets')">
            <image :source="require('../assets/dataset.png')" class="icon"/>
        </touchable-opacity>
        <touchable-opacity class="nav-bar-child" :on-press="() => navigateTo('Map')">
            <image :source="require('../assets/map-pin.png')" class="icon"/>
        </touchable-opacity>
        <touchable-opacity class="nav-bar-child" :on-press="() => navigateTo('Settings')">
            <image :source="require('../assets/settings-icon.png')" class="icon"/>
        </touchable-opacity>
    </view>
</template>

<script>
export default {
  props: {
    navigation: { type: Object }
  },
  methods: {
    navigateTo(route) {
      this.navigation.navigate(route)
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
    background-color: #1e1e1e;
    height: 45px;
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 0;
    flex-direction: row;
    z-index: 999;
    padding: 5;
}
</style>
