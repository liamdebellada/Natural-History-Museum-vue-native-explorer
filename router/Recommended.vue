<template>
    <SafeAreaView class="container">
        <scroll-view class="scroll-container">
            <view class="title-container">
                <text class="title-text">Recommended</text>
            </view>
            <view class="recommended-container">
                <view v-for="recommend in recommended" :key="recommend" class="recommended-parent">
                    <touchable-opacity class="recommended-content">
                        <text class="recommended-text">{{recommend.title}}</text>
                        <text class="recommended-desc">{{recommend.description}}</text>
                    </touchable-opacity>

                    <view class="recommended-options">
                        <touchable-opacity class="option">
                            <image class="option-icon" :source="require('../assets/pin.png')"/>
                        </touchable-opacity>
                        <touchable-opacity class="option">
                            <image class="option-icon" :source="require('../assets/checkmark.png')"/>
                        </touchable-opacity>
                    </view>
                </view>
            </view>
            <view class="title-container">
                <text class="title-text">Learn more</text>
            </view>
            <view class="learn-list-container">
                <touchable-opacity v-for="learnItem in learnMore" :key="learnItem">
                    <text class="bulleted-list">{{`\u2022 ${learnItem.title}`}}</text>
                </touchable-opacity>
            </view>
        </scroll-view>
        <NavBar :navigation="this.props.navigation"></NavBar>
    </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
export default {
    data() {
        return {
            recommended: [
                {
                    "title" : "Title",
                    "description" : "This is a description that is inplace of where the real description will be placed."
                },
                {
                    "title" : "Title 2",
                    "description" : "This is another description that is inplace of where the real description will be placed."
                }
            ],
            learnMore: [
                {"title" : "Option 1"},
                {"title" : "Option 2"},
                {"title" : "Option 3"}
            ]
        }
    },
    props: {
        navigation: {type: Object}
    },
    components: {
        NavBar
    }
}
</script>

<style>
.container {
  background-color: #1f1f1f;
  min-height: 100%;
}
.title-text {
    color: white;
    font-size: 30;
    font-weight: 500;
}
.title-container {
    margin: 20;
}
.sub-container {
    margin-bottom: 40;
}

.recommended-parent {
    background-color: #0f0f0f;
    width: 100%;
    height: 180;
    padding: 5;
    display: flex;
    flex-direction: row;
    margin-bottom: 15;
}

.recommended-container {
    margin: 20;
    margin-bottom: 0;
}

.recommended-content {
    height: 100%;
    width: 70%;
    background-color: #171717;
    margin-right: 5;
    padding: 10;
}
.recommended-options {
    height: 100%;
    width: 28.5%;
    background-color: #171717;
    display: flex;
}
.option {
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
}

.option-icon {
    align-self: center;
    height: 40;
    width: 40;
}

.recommended-text {
    color: white;
    font-size: 24;
    font-weight: 500;
    margin-bottom: 10;
}

.recommended-desc {
    color: white;
    font-size: 16;
}
.learn-list-container {
    margin-top: 5;
    margin: 20;
    padding-bottom: 40;
}
.bulleted-list {
    color: white;
    font-size: 20;
    padding-left: 10;
    padding-bottom: 20;
}
</style>