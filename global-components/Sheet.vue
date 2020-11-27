<template>
    <scroll-view class="sheet-container">
        <text class="data-title">{{item.taxonomy}}</text>
        <image class="data-image" :source="{uri : item.url}"/>
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

.data-title {
    font-size: 20;
    font-weight: 500;
}

.data-image {
    height: 100;
    width: 100;
}
</style>