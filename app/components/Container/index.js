import React from 'react'
import { ScrollView, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import Header from '../Header'
export default function Container({showHeader, children,isScrollable}) {
    return (
        <SafeAreaView style={styles.container}>
            {showHeader &&<Header />}
            {
                isScrollable? <ScrollView>
                    <View style={styles.innerView}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={styles.innerView}>{children}</View>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.lightBackground
    },
    innerView:{
        flex:1,
       // paddingHorizontal:scale(15)
    }
})
