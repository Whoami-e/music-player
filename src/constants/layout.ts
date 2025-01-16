import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from './tokens'


export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	// 设置大标题
	headerLargeTitle: true,
	// 设置大标题的样式
	headerLargeStyle: {
		backgroundColor: colors.background,
	},
	// 设置大标题的文本颜色
	headerLargeTitleStyle: {
		color: colors.text,
	},
	// 设置标题栏的文本颜色
	headerTintColor: colors.text,
	// 设置标题栏是否透明
	headerTransparent: true,
	// 设置标题栏的模糊效果
	headerBlurEffect: 'prominent',
	// 设置标题栏的阴影是否可见
	headerShadowVisible: false,
}