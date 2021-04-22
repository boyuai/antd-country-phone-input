import React, { ReactNode, Reducer, useEffect, useReducer } from 'react';
import { Area } from './sources';
import { LocaleType } from './third-party';

export type AreaFilter = (value: Area, index: number, array: Area[]) => boolean;
export type AreaMapper = (value: Area) => Area;

type State = {
  locale: LocaleType;
  areaFilter: AreaFilter;
  areaMapper: AreaMapper;
};

const initialState: State = {
  locale: 'en',
  areaFilter: () => true,
  areaMapper: (value) => value,
};

enum ActionKind {
  SET_LOCALE,
  SET_AREA_FILTER,
  SET_AREA_MAPPER,
}

type Action = {
  type: ActionKind;
  payload: any;
};

function configReducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.SET_LOCALE: {
      return {
        ...state,
        locale: payload,
      };
    }
    case ActionKind.SET_AREA_FILTER: {
      return {
        ...state,
        areaFilter: payload,
      };
    }
    case ActionKind.SET_AREA_MAPPER: {
      return {
        ...state,
        areaMapper: payload,
      };
    }
    default:
      return state;
  }
}

export const configContext = React.createContext(initialState);
const { Provider } = configContext;

export const ConfigProvider = ({
  children,
  locale,
  areaFilter,
  areaMapper,
}: {
  children: ReactNode;
  locale?: LocaleType;
  areaFilter?: AreaFilter;
  areaMapper?: AreaMapper;
}) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    configReducer,
    initialState
  );

  useEffect(() => {
    if (!locale) return;
    dispatch({ type: ActionKind.SET_LOCALE, payload: locale });
  }, [locale]);

  useEffect(() => {
    if (!areaFilter) return;
    dispatch({ type: ActionKind.SET_AREA_FILTER, payload: areaFilter });
  }, [areaFilter]);

  useEffect(() => {
    if (!areaMapper) return;
    dispatch({ type: ActionKind.SET_AREA_MAPPER, payload: areaMapper });
  }, [areaMapper]);

  return <Provider value={state}>{children}</Provider>;
};
