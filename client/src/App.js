import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import SchedulePage from "./pages/SchedulePage";

import { NavigationContainer } from "@react-navigation/native";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const linking = {
  prefixes: ["localhost:3000"],
  config: {
    screens: {
      Home: "/",
      Info: "/info",
      Schedule: "/schedule",
    },
  },
};

function App() {
  return (
    <Router>
      <NavigationContainer linking={linking}>
        <NavigationBar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Info" component={InfoPage} />
          <Stack.Screen name="Schedule" component={SchedulePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Router>
  );
}

export default App;
