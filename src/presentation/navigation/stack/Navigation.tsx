import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type SplashScreenProps = {
    id: number;
};
type OnBoardingProps = {
    userID: number;
};

type SignInProps = {
    id: number;
};

type SignInOTPProps = {
    id: number;
};

export type MainStackParamList = {
    SplashScreen: SplashScreenProps | undefined;
    OnBoarding: OnBoardingProps | undefined;
    SignIn: SignInProps | undefined;
    SignInOTP: SignInOTPProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;