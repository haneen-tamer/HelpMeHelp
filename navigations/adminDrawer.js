import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import AdminHomeStack from '../navigations/adminHomeStack';
import AddAdminStack from '../navigations/addAdminStack';
import AdminViewOrgStack from '../navigations/adminViewOrgStack';
import AdminHotlineStack from '../navigations/adminHotlineStack';

import AdminHeader from '../shared/adminHeader';

import { StyleSheet, Text, View } from 'react-native';


const screens = {

    AdminHomeStack:{
        screen: AdminHomeStack,
        navigationOptions: {
            title: "Home",
        }
    },
    AddAdminStack:{
        screen: AddAdminStack,
        navigationOptions: {
            title: "Add admin",
        }
    },
   
    AdminViewOrgStack:{
        screen: AdminViewOrgStack,
        navigationOptions: {
            title: "All organizations",
        }
    },
    AdminHotlineStack:{
        screen: AdminHotlineStack,
        navigationOptions: {
            title: "Add hotline",
        }
    },


}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    icon: {
        position: 'absolute',
        left: 15,
        bottom: 5,
    },
});

const adminDrawer = createDrawerNavigator(screens);

export default createAppContainer(adminDrawer);