import * as React from 'react'
import Header from './Header'
import { Ticket as ITicket } from '../../types'
import { Container, InfoBlock, MainText, SecondaryText } from './styled'
import { formatStops } from '../../utils'
import { convertMinutesToHoursMinutes, getFormattedFlyDuration } from '../../utils/formatTime'

interface Props {
  ticket: ITicket
}

const Ticket: React.FC<Props> = (props) => {
  const {
    ticket
  } = props

  return (
    <Container>
      <Header
        price={ticket.price}
        carrier={ticket.carrier}
      />
      {ticket.segments.map(segment => (
        <React.Fragment key={segment.date}>
          <InfoBlock>
            <SecondaryText>
              {segment.origin} - {segment.destination}
            </SecondaryText>
            <MainText>
              {getFormattedFlyDuration(segment.date, segment.duration)}
            </MainText>
          </InfoBlock>
          <InfoBlock>
            <SecondaryText>
              В пути
            </SecondaryText>
            <MainText>
              {convertMinutesToHoursMinutes(segment.duration)}
            </MainText>
          </InfoBlock>
          <InfoBlock>
            <SecondaryText>
              пересадки
            </SecondaryText>
            <MainText>
              {formatStops(segment.stops)}
            </MainText>
          </InfoBlock>
        </React.Fragment>
      ))
      }
    </Container>
  )
}

export default Ticket
