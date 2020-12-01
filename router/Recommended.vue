<template>
    <view class="container">
        <status-bar
        background-color="white"
        bar-style="dark-content"
        />
        <scroll-view class="scroll-container">
            <view class="title-container">
                <text class="title-text">Recommended</text>
                <view class="new-tag">
                    <text class="new-text">New!</text>
                </view>
            </view>
            <view class="recommended-container">
                <view v-for="(recommend, index) in recommended" :key="index" class="recommended-parent">
                    <view class="recommended-header" :style="{borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottom: 2, borderBottomColor: '#d3d3d3', borderColor: 'transparent', borderWidth: 1}">
                        <text class="recommended-title-text">{{recommend.title}}</text>
                        <view class="options-container">
                            <touchable-opacity class="function-container" :on-press="() => addToPins(recommend)">
                                <image :style="{height: 20, width: 20, tintColor: recommend.pinned ? '#ac34df54' : '#000000'}" :source="require('../assets/pin.png')"/>
                            </touchable-opacity>
                            <touchable-opacity class="function-container" :on-press="() => addToFavourites(index)">
                                <image :style="{height: 20, width: 20, tintColor: '#000000'}" :source="require('../assets/checkmark.png')"/>
                            </touchable-opacity>
                        </view>
                    </view>
                    <view class="recommended-body">
                        <text class="recommended-description">{{recommend.description}}</text>
                    </view>
                </view>
            </view>
            <view class="title-container">
                <text class="title-text">Store</text>
            </view>
            <WebView
            class="nhm-store"
                :source="{uri: 'https://www.nhmshop.co.uk/?_ga=2.213256144.534850370.1606822981-1736709172.1606822981'}"
            />
        </scroll-view>
        <NavBar :navigation="this.props.navigation" v-bind:selected="1"></NavBar>
    </view>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
export default {
    data() {
        return {
            recommended: [
                {
                    "title" : "Title",
                    "id" : 1,
                    "pinned" : false,
                    "description" : "This is a description that is inplace of where the real description will be placed."
                },
                {
                    "title" : "Title 2",
                    "id" : 2,
                    "pinned" : false,
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
        NavBar, WebView
    },
    async created() {
        await this.checkPinned()
    },
    methods: {
        async addToPins(recommend) {
            try {
                var val = JSON.parse(await AsyncStorage.getItem('pins'))
                if (val !== null) {
                    if (val.filter(item => item.id == recommend.id).length > 0) {
                        val.splice(val.findIndex(i => i.id == recommend.id), 1)
                    } else {
                        val.push(recommend)
                    }
                    try {
                        await AsyncStorage.setItem('pins', JSON.stringify(val))
                        await this.checkPinned()
                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    try {
                        await AsyncStorage.setItem('pins', JSON.stringify([]))
                    } catch (e) {
                        console.log(e)
                    }
                }
            } catch (e) {
                console.log(e)
            }
        },
        addToFavourites(i) {
            console.log(i)
        },
        async checkPinned() {
            for (var item in this.recommended) {
                var data = JSON.parse(await AsyncStorage.getItem('pins'))
                if (data.filter(i => i.id == this.recommended[item].id).length > 0) {
                    this.recommended[item].pinned = true
                } else {
                    this.recommended[item].pinned = false
                }
            }
        }
    }
}
</script>

<style>
.container {
  background-color: white;
  min-height: 100%;
}
.title-text {
    color: black;
    font-size: 30;
    font-weight: 500;
}
.title-container {
    margin: 20;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.sub-container {
    margin-bottom: 40;
}

.recommended-description {
    margin: 20;
}

.recommended-header {
    width: 100%;
    height: 50;
    display: flex;
    align-items: center;
    flex-direction: row;
}

.nhm-store {
    width: 100%;
    height: 500;
    margin-bottom: 100;
}

.recommended-body {
    height: auto;
    min-height: 50;
    width: 100%;
}

.recommended-title-text {
    margin-left: 10;
    color: black;
    font-weight: 500;
    font-size: 16;
}

.options-container {
    height: 100%;
    width: 100;
    margin-left: auto;
    border-radius: 15;
    display: flex;
    flex-direction: row;
}
.function-container {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.recommended-parent {
    width: 100%;
    min-height: 100;
    display: flex;
    margin-bottom: 15;
    border-radius: 15;
    background-color: #f6f6f6;
}

.recommended-container {
    margin: 20;
    margin-bottom: 0;
}

.recommended-content {
    height: 50;
    width: 70%;
    margin-right: 5;
}
.recommended-options {
    height: 100%;
    width: 28.5%;
    background-color: white;
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
    color: black;
    font-size: 24;
    font-weight: 500;
    margin-bottom: 10;
}

.recommended-desc {
    color: black;
    font-size: 16;
}
.learn-list-container {
    margin-top: 5;
    margin: 20;
    padding-bottom: 40;
}
.bulleted-list {
    color: black;
    font-size: 20;
    padding-left: 10;
    padding-bottom: 20;
}

.new-tag {
    background-color: #ac34df54;
    height: 30;
    width: 70;
    margin-left: auto;
    border-radius: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.new-text {
    font-weight: 600;
    font-size: 14;
}

.scroll-container {
    padding-top: 30;
}
</style>