import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Dashboard } from "../pages/Dashboard";
import { ListSpends } from "../pages/List";
import { SearchSpends } from "../pages/Search";
import { colors } from "../shared/styles/color";

type AppRoutes = {
  dashboard: undefined;
  listSpends: undefined;
  searchSpends: undefined;
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
        tabBarActiveTintColor: colors.red.base,
        tabBarInactiveTintColor: colors.red.light,
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
        name="listSpends"
        component={ListSpends}
        options={{
          tabBarLabel: "List Employees",
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
        name="searchSpends"
        component={SearchSpends}
        options={{
          tabBarLabel: "Search Employees",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={40} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
