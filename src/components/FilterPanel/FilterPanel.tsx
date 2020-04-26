import * as React from 'react'
import { connect } from 'react-redux'
import { FILTER_ALL, filterOptionLabels } from '../../constants'
import { setFiltration } from '../../actions/filtration'
import { FilterOption } from '../../models'
import { AppState } from '../../types'
import { Fieldset, HiddenInput, Label, Legend } from './styled'

const mapStateToProps = (state: AppState) => ({
  filtration: state.filtration
})

const mapDispatchToProps = {
  setFiltration
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const FilterPanel: React.FC<HOCProps> = (props) => {
  const {
    filtration,
    setFiltration
  } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    const value = e.target.value as FilterOption
    const currentValues = [...filtration]

    if (checked) {
      setFiltration([...filtration, value])
    } else {
      currentValues.splice(currentValues.indexOf(value), 1)
      setFiltration(currentValues)
    }
  }

  const handleChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    checked ? setFiltration(Object.values(FilterOption)) : setFiltration([])
  }

  return (
    <Fieldset>
      <Legend>
        Количество пересадок
      </Legend>
      <React.Fragment key={FILTER_ALL}>
        <HiddenInput
          type="checkbox"
          name="filtration"
          id={FILTER_ALL}
          value={FILTER_ALL}
          checked={filtration.length === Object.values(FilterOption).length}
          onChange={handleChangeAll}
        />
        <Label htmlFor={FILTER_ALL}>
          Все
        </Label>
      </React.Fragment>
      {Object.values(FilterOption).map(option =>
        <React.Fragment key={option}>
          <HiddenInput
            type="checkbox"
            name="filtration"
            id={option}
            value={option}
            checked={filtration.includes(option)}
            onChange={handleChange}
          />
          <Label htmlFor={option}>
            {filterOptionLabels[option]}
          </Label>
        </React.Fragment>
      )}
    </Fieldset>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
