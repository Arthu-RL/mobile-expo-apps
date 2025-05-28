import { NavigationContainer } from "@react-navigation/native";
import { EventsProvider } from "../hooks/useEvents";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <EventsProvider>
        <AppRoutes />
      </EventsProvider>
    </NavigationContainer>
  );
}
