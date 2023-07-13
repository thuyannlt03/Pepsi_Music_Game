import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type SplashProps = {
    userID: number;
};

type SignInProps = {
    id: number;
};

type SignInOTPProps = {
    id: number;
};

export type MainStackParamList = {
    Splash: SplashProps | undefined;
    SignIn: SignInProps | undefined;
    SignInOTP: SignInOTPProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;