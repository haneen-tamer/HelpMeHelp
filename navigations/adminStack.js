import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AdminHome from '../forms/adminHome';
import AddAdmin from '../forms/addAdmin';
import NewHotline from '../forms/newHotline';
import AdminHeader from '../shared/adminHeader';
import AdminOrgProfile from '../forms/adminOrgProfile';
import { StyleSheet, Text, View } from 'react-native';

import AllOrgs from '../forms/allOrgs';


const screens = {

    AdminHome:{
        screen: AdminHome,
        navigationOptions: {
            title: "Home",
            headerStyle: { height: 10}
        }
    },
    AddAdmin:{
        screen: AddAdmin,
        navigationOptions: {
            title: "Add admin",
        }
    },
   
    AllOrgs:{
        screen: AllOrgs,
        navigationOptions: {
            title: "All organizations",
        }
    },
    NewHotline:{
        screen: NewHotline,
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