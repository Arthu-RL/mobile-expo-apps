import { NavigationContainer } from "@react-navigation/native";
import { SpendsProvider } from "../hook/useSpends";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <SpendsProvider>
        <AppRoutes />
      </SpendsProvider>
    </NavigationContainer>
  );
}
