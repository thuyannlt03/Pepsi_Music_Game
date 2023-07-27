import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigation } from "../navigation/stack/AuthenNavigation"
import { AuthorNavigation } from "../navigation/tab/AuthorNavigation"



export const AppNavigation = () => {

    const authen = () => {
        return (
            <AuthenNavigation/>
        )
    }

    const author = () => {
        return (
            <AuthorNavigation/>
        )
    }

    return (
        <NavigationContainer>
          <AuthenNavigation/>
            {/* <AuthorNavigation/> */}
            
            
        </NavigationContainer>
    )
}