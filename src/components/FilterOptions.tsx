import React from "react";
import * as EventHandlers from "../utils/EventHandlers";
import * as Types from "../utils/Types";

const FilterOptions = (props: Types.FilterOptionsProps): JSX.Element => {
  const [state] = props.stateManager;
  return (
    <div className="filter-options">
      <form className="search">
        <input
          type="text"
          placeholder="Enter institution, lab, or address"
          onChange={EventHandlers.handleInputText(props.stateManager)}
          value={state.searchBarContent}
        />
        <input
          type="button"
          onClick={EventHandlers.handleInputClear(props.stateManager)}
          value="Clear"
        />
      </form>
      <form className="sync">
        <input
          type="checkbox"
          onChange={EventHandlers.handleSyncToggle(props.stateManager)}
          checked={state.syncMapAndTable}
        />
        <label>Sync map and table</label>
      </form>
    </div>
  );
};

export default FilterOptions;
