<template>
    <scroll-view class="sheet-container">
        <text class="data-title">{{item.title}}</text>
        <text>Minerals are cute.</text>
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
</style>