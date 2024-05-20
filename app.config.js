const IS_DEV = process.env.APP_VARIANT === "development";

export default {
  expo: {
    name: IS_DEV ? "Art Museum (dev)" : "Art Museum",
    slug: "appjs24-workflows-workshop-code",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.appjs24-workflows.appjs24-workflows-workshop-code",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.appjs24_workflows.appjs24_workflows_workshop_code",
    },
    web: {
      bundler: "metro",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      ["expo-router"],
      "react-native-image-marker",
      [
        "expo-quick-actions",
        {
          androidIcons: {
            fav_icon: {
              foregroundImage: "./assets/images/adaptive-icon-fav.png",
              backgroundColor: "#29cfc1",
            },
          },
          iosIcons: {
            fav_icon: "./assets/images/fav.png",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "687b7355-d2a2-4f4d-84b2-9fd871429151",
      },
    },
    owner: "appjs24-workflows",
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/687b7355-d2a2-4f4d-84b2-9fd871429151",
    },
  },
};
