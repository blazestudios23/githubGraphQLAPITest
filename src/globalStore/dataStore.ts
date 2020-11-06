import { initStore } from "./store";
import * as types from "./types";

/**
 * @function configureReportStore
 * @param props - defined in PropTypes
 * @returns {Custom Store}
 * @author Andrew Obrigewitsch
 * @copyright LexisNexis 2019
 */

type Function = () => any;

const configureReportStore = () => {
  const actions = {
    [types.SET_ROOT]: (state: {}, rootNodeName: string) => ({ rootNodeName }), // set root node name ,
    [types.SET_CREATE_FORM]: (state: {}, createForm: {}[]) => ({ createForm }), // set custom create form ,
    [types.SET_FILTER]: (state: {}, filter: { filter: string }) => ({ filter }), // set search filter
    [types.SET_DEFAULT_FILTER]: (state: {}, defaultFilter: string) => ({
      defaultFilter
    }), // set search filter
    [types.SET_TYPE]: (state: {}, type: { type: string }) => ({ type }), // set report type,
    [types.SET_ID]: (state: {}, id: number | string) => ({ id }), // set report type
    [types.SET_ERROR]: (
      state: {},
      errorState: { message: string; err: boolean }
    ) => ({
      errorState
    }), // graphQL Errors
    [types.SET_SCHEMA]: (state: {}, schema: { schema: any }) => ({ schema }), // graphQL Schema
    [types.SET_ENUM_LIST]: (state: {}, enumList: []) => ({ enumList }),
    [types.BUCKET_NAME]: (state: {}, bucketName: string) => ({ bucketName }), // set depth to traverse the schema
    [types.SET_DEPTH]: (state: {}, depth: number) => ({ depth }), // set depth to traverse the schema
    [types.SET_PARENT_PAGE]: (state: {}, parentPage: string) => ({
      parentPage
    }), // set parent page route
    [types.SET_SEARCH_INPUT]: (state: {}, searchInput: {}) => ({ searchInput }), // query parameters for first query executed
    [types.SET_DEFAULT_SEARCH_INPUT]: (state: {}, defaultSearchInput: {}) => ({
      defaultSearchInput
    }), // query parameters for first query executed
    [types.SET_FILTER_LIST]: (state: {}, filterList: string[]) => ({
      filterList
    }), // filter list in menu drop down
    [types.SET_FILTER_LIST_FIRST]: (
      state: { filterList: string[] },
      filterItem: string
    ) => {
      // change first item of filter list
      const [, ...rest]: string[] = state.filterList;
      const filterList = [filterItem, ...rest];
      return { filterList };
    },
    [types.SET_LIST_QUERY]: (state: {}, listQueries: Function) => ({
      listQueries
    }), // Query to list multiple items
    [types.SET_SINGLE_QUERY]: (state: {}, singleQueries: Function) => ({
      singleQueries
    }), // Query to show single item
    [types.SET_ADD_MUTATION]: (state: {}, addMutations: Function) => ({
      addMutations
    }), // add mutation
    [types.SET_UPDATE_MUTATION]: (state: {}, updateMutations: Function) => ({
      updateMutations
    }), // update mutation
    [types.SET_DELETE_MUTATION]: (state: {}, deleteMutations: Function) => ({
      deleteMutations
    }), // delete mutation
    [types.SET_SIMPLE_SEARCH]: (state: {}, getSimpleSearch: Function) => ({
      getSimpleSearch
    }), // sets simple search bar
    [types.SET_FORM_RADIO]: (state: {}, formRadio: { formRadio: [] }) => ({
      formRadio
    }) // sets simple search bar
  };

  initStore(actions, {
    rootNodeName: "",
    createForm: [],
    filter: "",
    defaultFilter: "",
    filterList: [],
    searchInput: { limit: 500 },
    defaultSearchInput: { limit: 500 },
    parentPage: "",
    depth: 3,
    bucketName: "",
    enumList: [],
    type: "",
    id: null,
    errorState: {
      err: false,
      message: ""
    },
    schema: null,
    listQueries: () => null,
    singleQueries: () => null,
    addMutations: () => null,
    updateMutations: () => null,
    deleteMutations: () => null,
    getSimpleSearch: () => null,
    formRadio: []
  });
};

export default configureReportStore;
