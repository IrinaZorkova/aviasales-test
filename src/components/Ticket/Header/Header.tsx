import * as React from 'react'
import { Carrier} from '../styled'
import * as Styled from './styled'

interface Props {
  price: number,
  carrier: string
}

const Header: React.FC<Props> = (props) => {
  const {
    price,
    carrier
  } = props

  const formattedPrice = `${new Intl.NumberFormat('ru-RU').format(price)} Р`

  return (
    <Styled.Header>
      <Styled.Price>
        {formattedPrice}
      </Styled.Price>
      <Carrier
        src={`http://pics.avs.io/99/36/${carrier}.png`}
        alt={carrier}
      />
    </Styled.Header>
  )
}

export default Header
