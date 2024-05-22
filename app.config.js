const IS_DEV = process.env.APP_VARIANT === 'development';
export default {
    name: IS_DEV ? "Art Museum (Dev)" : "Art Museum",
    "expo": {
        "name": "Art Museum",
        "slug": "appjs24-workflows-workshop-code",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/images/icon.png",
        "scheme": "myapp",
        "userInterfaceStyle": "automatic",
        "splash": {
            "image": "./assets/images/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "assetBundlePatterns": ["**/*"],
        "ios": {
            "supportsTablet": true,
            bundleIdentifier: "com.expo.appjs24-workflows-workshop-code" + (IS_DEV ? "-dev" : ""),
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/images/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            package: "com.expo.appjs24workflowsworkshopcode" + (IS_DEV ? "dev" : ""),
        },
        "web": {
            "bundler": "metro",
            "favicon": "./assets/images/favicon.png"
        },
        "plugins": [["expo-router"], "react-native-image-marker", "expo-font"],
        "experiments": {
            "typedRoutes": true
        },
        "extra": {
            "router": {
                "origin": false
            },
            "eas": {
                "projectId": "b384979e-3af3-4902-9f48-7c0e438f2e85"
            }
        },
        "runtimeVersion": {
            "policy": "appVersion"
        },
        "updates": {
            "url": "https://u.expo.dev/b384979e-3af3-4902-9f48-7c0e438f2e85"
        }
    }
}
