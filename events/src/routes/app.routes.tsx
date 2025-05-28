import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Dashboard } from "../pages/Dashboard";
import { List } from "../pages/List";
import { Search } from "../pages/Search";
import { colors } from "../shared/styles/color";

type AppRoutes = {
  dashboard: undefined;
  List: undefined;
  Search: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  // const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: colors.yellow.base,
        tabBarInactiveTintColor: colors.yellow.light,
        tabBarStyle: {
          height: 90,
        },
      }}
    >
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add" size={40} color={color} />
          ),
        }}
      />

      <Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={40}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={40} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
