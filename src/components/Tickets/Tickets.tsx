import React from 'react'
import { connect } from 'react-redux'
import { getFirstFiveFilteredAndSortedTickets } from '../../selectors'
import { requestTickets } from '../../actions/tickets'
import DataHandler from '../DataHandler'
import Ticket from '../Ticket'
import { AppState } from '../../types'

const mapStateToProps = (state: AppState) => ({
  tickets: getFirstFiveFilteredAndSortedTickets(state),
  isLoading: state.tickets.loading,
  error: state.tickets.error
})

const mapDispatchToProps = {
  requestTickets
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Tickets: React.FC<HOCProps> = (props) => {
  const {
    tickets,
    isLoading,
    error,
    requestTickets
  } = props

  React.useEffect(() => {
    if (tickets.length) return
    requestTickets()
  }, [tickets, requestTickets])

  return (
    <DataHandler isLoading={isLoading} error={error}>
      <>
        {tickets?.map(ticket =>
          <Ticket
            key={ticket.carrier + ticket.price}
            ticket={ticket}
          />
        )}
      </>
    </DataHandler>
  )
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Tickets))
