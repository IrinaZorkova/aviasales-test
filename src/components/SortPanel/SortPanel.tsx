import * as React from 'react'
import { sortOptionsLabels } from '../../constants'
import { connect } from 'react-redux'
import { SortOption } from '../../models'
import { AppState } from '../../types'
import { setSorting } from '../../actions/sorting'
import { Container, HiddenInput, RadioButton } from './styled'

const mapStateToProps = (state: AppState) => ({
  sorting: state.sorting
})

const mapDispatchToProps = {
  setSorting
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const SortPanel: React.FC<HOCProps> = (props) => {
  const {
    sorting,
    setSorting
  } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSorting(e.target.value as SortOption)
  }

  return (
    <Container>
      {Object.values(SortOption).map(option =>
       <React.Fragment key={option}>
         <HiddenInput
           type='radio'
           id={option}
           name='sorting'
           checked={sorting === option}
           value={option}
           onChange={handleChange}
         />
         <RadioButton htmlFor={option}>
           {sortOptionsLabels[option]}
         </RadioButton>
       </React.Fragment>
      )}
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel)
