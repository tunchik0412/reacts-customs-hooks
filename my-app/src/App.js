import React from 'react';
import Main from "./screens/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import InputsScreen from "./screens/HooksScreen/Inputs";
import {ROUTES_ENUM_PATH} from "./constants/routes";
import InputsScreen1 from "./screens/HooksScreen/Inputs/inputs1";
import InputsScreen2 from "./screens/HooksScreen/Inputs/inputs2";
import InputsScreen3 from "./screens/HooksScreen/Inputs/inputs3";
import InputsScreen4 from "./screens/HooksScreen/Inputs/inputs4";

function App() {
  return (
    <div className="App">
        <Router>
          <Main>
            <Switch>
                <Route path={ROUTES_ENUM_PATH.INPUT_HOOKS} component={InputsScreen}/>
                <Route path={ROUTES_ENUM_PATH.INPUT_HOOKS_1} component={InputsScreen1}/>
                <Route path={ROUTES_ENUM_PATH.INPUT_HOOKS_2} component={InputsScreen2}/>
                <Route path={ROUTES_ENUM_PATH.INPUT_HOOKS_3} component={InputsScreen3}/>
                <Route path={ROUTES_ENUM_PATH.INPUT_HOOKS_4} component={InputsScreen4}/>
            </Switch>
          </Main>
        </Router>
    </div>
  );
}

export default App;
