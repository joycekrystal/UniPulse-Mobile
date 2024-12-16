import { View, Text, ScrollView } from "react-native";

export default (): JSX.Element => {
  return (
    <ScrollView
      className="flex-1 bg-gray-100 py-4 px-3"
      showsVerticalScrollIndicator={false}
    >
      <View className="h-[120px]">
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View className="flex flex-row">
            <View className="flex flex-col space-y-2 mr-5 h-[100px] w-[240px] border border-gray-200 rounded">
              {/* <Image source={props.image} className="h-[120px] w-[240px] rounded-xl" /> */}
              {/* <Text className="text-md font-bold">{props.title}</Text> */}
            </View>
            <View className="flex flex-col space-y-2 mr-5 h-[100px] w-[240px] border border-gray-200 rounded">
              {/* <Image source={props.image} className="h-[120px] w-[240px] rounded-xl" /> */}
              {/* <Text className="text-md font-bold">{props.title}</Text> */}
            </View>
            <View className="flex flex-col space-y-2 mr-5 h-[100px] w-[240px] border border-gray-200 rounded">
              {/* <Image source={props.image} className="h-[120px] w-[240px] rounded-xl" /> */}
              {/* <Text className="text-md font-bold">{props.title}</Text> */}
            </View>
            <View className="flex flex-col space-y-2 mr-5 h-[100px] w-[240px] border border-gray-200 rounded">
              {/* <Image source={props.image} className="h-[120px] w-[240px] rounded-xl" /> */}
              {/* <Text className="text-md font-bold">{props.title}</Text> */}
            </View>
            <View className="flex flex-col space-y-2 mr-5 h-[100px] w-[240px] border border-gray-200 rounded">
              {/* <Image source={props.image} className="h-[120px] w-[240px] rounded-xl" /> */}
              {/* <Text className="text-md font-bold">{props.title}</Text> */}
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};
