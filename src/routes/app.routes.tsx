import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Dashboard } from '../pages/Dashboard';
import { List } from '../pages/List';
import { Search } from '../pages/Search';
import { Totals } from '../pages/Totals';
import { colors } from '../shared/styles/color';
import { theme } from '../shared/styles/theme';

type AppRoutes = {
  dashboard: undefined;
  List: undefined;
  Search: undefined;
  Totals: undefined;
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
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: colors.yellow.base,
        tabBarInactiveTintColor: colors.yellow.light,
        tabBarStyle: {
          height: theme.spacing.scale(20),
        },
      }}
    >
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add"
              size={theme.spacing.scale(6)}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={theme.spacing.scale(6)}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="search"
              size={theme.spacing.scale(6)}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Totals"
        component={Totals}
        options={{
          tabBarLabel: 'Totais',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="summarize"
              size={theme.spacing.scale(6)}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
