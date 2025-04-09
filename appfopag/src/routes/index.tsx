import { NavigationContainer } from "@react-navigation/native";
import { FopagProvider } from "../hook/useFopag";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <FopagProvider>
        <AppRoutes />
      </FopagProvider>
    </NavigationContainer>
  );
}
