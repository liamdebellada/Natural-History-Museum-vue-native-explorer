<template>
    <scroll-view class="sheet-container">
        <view v-if="!item.message">
            <view class="centered-image-container">
            <image class="title-img" :source="require('../assets/mineral.png')" :style="{tintColor: '#ac34df54'}"/>
            </view>
            <view class="content-area">
                <view class="data-section">
                    <text class="data-title">{{item.taxonomy}}</text>
                </view>
                <view class="data-section" :style="{marginTop: 8}">
                    <text class="data-desc">{{item.description}}</text>
                </view>
                <view class="data-section" :style="{marginTop: 15}">
                    <text class="data-label">Period/Formation</text>
                    <text>{{item.strat_unit}}</text>
                    <text class="data-label">Collection location</text>
                    <text>{{item.coll_place}}</text>
                    <text class="data-label">Collected by</text>
                    <text>{{item.coll_name}}</text>
                </view>
                <view class="data-section">
                    <view class="centered-image-container">
                        <image :source="require('../assets/camera.png')" :style="{height: 50, width: 50, tintColor: '#ac34df54'}"/>
                    </view>
                    <view class="image-container">
                        <image :source="{uri: item.url}" class="data-image"/>
                    </view>
                </view>
            </view>
        </view>
        <view v-else>
            <view class="centered-image-container">
                <image class="title-img" :source="require('../assets/mineral.png')" :style="{tintColor: '#ac34df54'}"/>
            </view>
            <text class="data-title">{{item.message}}</text>
        </view>
    </scroll-view>
</template>

<script>
export default {
    props: {
        item: { type: Object }
    }
}
</script>

<style>
.sheet-container {
    height: 450;
    background-color: white;
    padding: 10;
}

.image-container {
    margin-top: 20;
    align-self: center;
}

.data-label {
    font-size: 16;
    font-weight: 400;
    color: #8c8c8c;
    padding-top: 10;
}

.data-title {
    font-size: 25;
    font-weight: 500;
    text-align: center;
}

.data-section {
    display: flex;
    width: 85%;
}

.data-image {
    height: 120;
    width: 200;
    border-radius: 10;
}

.data-desc {
    font-size: 18;
    text-align: center;
}

.centered-image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-area {
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-img {
    height: 50;
    width: 50;
}
</style>