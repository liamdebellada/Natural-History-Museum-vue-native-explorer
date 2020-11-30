<template>
    <view v-for="(data, index) in item" :key="index" class="category-parent" :style="{borderBottom: 2, borderBottomColor: '#d3d3d3', borderColor: 'white', borderWidth: 1}">
        <view class="image-frame">
            <image :source="data.img" :style="{height: 35, width: 35}"/>
        </view>
        <touchable-opacity :on-press="() => navigateTo(data.navi)" class="category-child">
            <text class="category-text-title">{{data.title}}</text>
            <text class="category-text-sub">Date: 19/20/12</text>
        </touchable-opacity>
        <touchable-opacity :on-press="() => createOptionsAlert(data, index)" class="options-child">
            <image class="category-more" :source="require('../assets/more.png')"/>
        </touchable-opacity>
    </view>
</template>

<script>
import { Alert } from 'react-native';
export default {
    props: {
        item: { type: Array },
        navigation: { type: Object }
    },
    methods: {
        navigateTo(route) {
            this.navigation.navigate(route)
        },
        createOptionsAlert(data, i) {
            Alert.alert(
                `${data.title} Options`,
                "Please select one of the following:",
                [
                    {text: 'Report', onPress: () => console.log('Reported.')},
                    {text: 'Remove', onPress: () => this.item.splice(i, 1)}
                ],
                { cancelable: true }
            )
        }
    }
}
</script>


<style>
    .category-parent {
        height: auto;
        width: 100%;
        margin-bottom: 15;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding-bottom: 10;
    }
    .category-text-title {
        color: black;
        font-weight: 600;
        font-size: 17;
        margin-bottom: 4;
    }
    .category-text-sub {
        color: #d3d3d3;
    }
    .category-image {
        margin: 5;
        height: 125;
        width: 125;
        align-self: center;
    }
    .category-more {
        height: 15;
        width: 15;
    }
    .options-child {
        margin-left: auto;
        border-radius: 40;
        height: 40;
        width: 40;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image-frame {
        height: 50;
        width: 50;
        background-color:#d3d3d38b;
        border-radius: 50;
        margin-right: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>