<template>
    <touchable-opacity class="category-parent" :on-press="() => navigateTo(item.navi)">
        <view class="category-child">
            <text class="category-text-title">{{item.title}}</text>
            <image class="category-image" :source="item.img"/>
        </view>
    </touchable-opacity>
</template>

<script>
export default {
    props: {
        item: { type: Object },
        navigation: { type: Object }
    },
    methods: {
        navigateTo(route) {
            this.navigation.navigate(route)
        }
    }
}
</script>


<style>
    .category-parent {
        background-color: #0f0f0f;
        height: 180;
        width: 100%;
        margin-bottom: 15;
    }
    .category-child {
        padding: 10;
    }
    .category-text-title {
        color: white;
        font-weight: 500;
        font-size: 16;
    }
    .category-image {
        margin: 5;
        height: 125;
        width: 125;
        align-self: center;
    }
</style>