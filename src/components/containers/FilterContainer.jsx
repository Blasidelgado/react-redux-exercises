import React from 'react'
import { connect } from 'react-redux'
import { filterChanger } from '../../features/actions/actions'
import Filter from '../pure/Filter'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(filterChanger(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer
