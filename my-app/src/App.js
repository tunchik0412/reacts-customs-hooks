import React from 'react';
import Main from "./screens/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import InputsScreen from "./screens/HooksScreen/Inputs";
import {ROUTES_ENUM_PATH} from "./constants/routes";

function App() {
  return (
    <div className="App">
        <Router>
          <Main>
            <Switch>
                <Route path={ROUTES_ENUM_PATH.INPUT_HOOKS} component={InputsScreen}/>
            </Switch>
          </Main>
        </Router>
    </div>
  );
}

export default App;
