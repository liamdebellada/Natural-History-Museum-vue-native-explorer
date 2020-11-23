<template>
    <SafeAreaView class="container">
        <view class="map-container">
            <map-view class="container" :initial-region="coordinates">
                <Marker :coordinate="{latitude: 51.5858233, longitude: -0.0658707}">
                    <view class="marker">
                         <text class="marker-text">Ada national college for digital skills</text>
                    </view>
                </Marker>
            </map-view>
        </view>
        <NavBar :navigation="this.props.navigation"></NavBar>
    </SafeAreaView>
</template>

<script>
import NavBar from '../global-components/Navigation.vue'
import MapView, {Marker} from "react-native-maps";
export default {
    data: function() {
    return {
      coordinates: {
        latitude: 51.5858233,
        longitude: -0.0658707,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }
    };
    },
    props: {
        navigation: {type: Object}
    },
    components: { NavBar, MapView, Marker }
}
</script>

<style>
.container {
    background-color: #1f1f1f;
    min-height: 100%;
}
.map-container {
    flex: 1;
}

.marker {
    background-color: #171717;
    min-width: 50;
    width: auto;
    height: 25;
    display: flex;
    justify-content: center;
    align-items: center;
}

.marker-text {
    color: white;
}
</style>