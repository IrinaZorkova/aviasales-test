import * as React from 'react'
import { connect } from 'react-redux'
import { requestSearchId } from '../../actions/searchId'
import SortPanel from '../../components/SortPanel'
import FilterPanel from '../../components/FilterPanel'
import Header from '../../components/Header'
import Tickets from '../../components/Tickets'
import DataHandler from '../../components/DataHandler'
import { Content, Main, SearchPanel, TicketSortWrapper } from './styled'
import { AppState } from '../../types'

const mapDispatchToProps = {
  requestSearchId
}

const mapStateToProps = (state: AppState) => ({
  searchIdError: state.searchId.error,
  searchIdLoading: state.searchId.loading,
  searchId: state.searchId.searchId
})

type HOCProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>

const App: React.FC<HOCProps> = (props) => {
  const {
    requestSearchId,
    searchId,
    searchIdError,
    searchIdLoading
  } = props

  React.useEffect(() => {
    if (searchId) return
    requestSearchId()
  }, [searchId, requestSearchId])

  return (
    <Main>
      <Content>
        <Header/>
        <SearchPanel>
          <FilterPanel/>
          <TicketSortWrapper>
            <SortPanel/>
            <DataHandler
              isLoading={searchIdLoading}
              error={searchIdError}
            >
              <Tickets/>
            </DataHandler>
          </TicketSortWrapper>
        </SearchPanel>
      </Content>
    </Main>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
