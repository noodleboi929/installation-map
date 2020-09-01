import { Point } from "react-simple-maps";

export type RowProp = string | Point | number;
export type CombinedProp = Point | row[] | number | Visibility;
export type Dispatch = React.Dispatch<action>;
export type ZoomHandler = (zoom: number) => void;
export type Visibility = boolean | undefined;
export type StateProp =
  | row[]
  | combinedRow[]
  | string
  | combinedRow
  | position
  | number
  | boolean;

export interface row {
  institution: string;
  category: string;
  lab: string;
  address: string;
  coordinates: Point;
  index: number;

  [key: string]: RowProp;
}

export interface combinedRow {
  index: number;
  averageCoordinates: Point;
  rows: row[];
  isMarkerVisible: Visibility;

  [key: string]: CombinedProp;
}

export interface position {
  coordinates: Point;
  zoom: number;
}

export interface SideBarProps {
  stateManager: stateManager;
}

export interface FilterOptionsProps {
  stateManager: stateManager;
}

export interface OrphanTableRowsProps {
  keys: string[];
  stateManager: stateManager;
  givenCombinedRow: combinedRow;
  givenIndex: number;
}

export interface SelectedDetailProps {
  row: row;
  orderedIndex: number;
}

export interface SelectedDetailRowProps {
  markerDetail: markerDetail;
  defaultRowColor: string;
  row: row;
}

export interface MapChartProps {
  stateManager: stateManager;
}

export interface ZoomControlProps {
  stateManager: stateManager;
}

export interface RowMarkerProps {
  givenCombinedRow: combinedRow;
  stateManager: stateManager;
}

export interface PlaceIconProps {
  transform: string;
  markerColor: string;
}

export interface state {
  rows: row[];
  combinedRows: combinedRow[];
  tooltipContent: string;
  currentCombinedRow: combinedRow;
  mousePosition: position;
  searchBarContent: string;
  useMarkerVisibility: boolean;
  useSearchBar: boolean;
}

export interface action {
  type: string;
  value: StateProp;
}

export interface stateManager extends Array<state | Dispatch> {
  0: state;
  1: Dispatch;
}

export interface markerDetail {
  key: string;
  header: string;
  getRowPropContent: (value: any) => string;
}

export interface componentToId {
  [key: string]: (input: any) => string;
}
