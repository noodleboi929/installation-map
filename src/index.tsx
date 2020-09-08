import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
import SideBar from "./components/SideBar";
import * as Config from "./utils/Config";
import * as Renderers from "./utils/Renderers";
import * as StateUpdaters from "./utils/StateUpdaters";
import "./index.css";

const App = (): JSX.Element => {
  const stateManager = useReducer(StateUpdaters.reducer, Config.defaultState);
  const [state, dispatch] = stateManager;

  // Update markers from spreadsheet and render via zoom level
  useEffect(StateUpdaters.getJsonMarkers(dispatch), []);
  useEffect(StateUpdaters.updateAllAndCurrentCombinedRows(stateManager), [
    state.rows,
    state.mousePosition,
    state.useMarkerVisibility,
  ]);

  const fullModeRender = (): JSX.Element => {
    Renderers.setRootElementWidth(Config.fullWidth);
    return (
      <div id="wrapper">
        <SideBar stateManager={stateManager} width="30%" />
        <MapChart stateManager={stateManager} width="70%" />
        <ReactTooltip>{state.tooltipContent}</ReactTooltip>
      </div>
    );
  };

  const smallModeRender = (): JSX.Element => {
    Renderers.setRootElementWidth(Config.smallWidth);
    return (
      <div id="wrapper">
        <MapChart stateManager={stateManager} width="100%" />
      </div>
    );
  };

  return state.inFullMode ? fullModeRender() : smallModeRender();
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
