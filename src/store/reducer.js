import { combineReducers } from 'redux'

import { reducer as blocks_leftSide_reducer } from '@components/blocks/LeftSide/store'
import { reducer as blocks_header_reducer } from '@components/blocks/Header/store'
import { reducer as blocks_table_reducer } from '@components/Demo/TableDemo/store'

const reducer = combineReducers({
  blocks_leftSide_reducer,
  blocks_header_reducer,
  blocks_table_reducer
})
export default reducer
