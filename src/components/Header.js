import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
   

    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        {/* <Button color='red' text='Hello 1' />
        <Button color='purple' text='Hello 2' />
        <Button color='yellow' text='Hello 3' /> */}
    </header>
  )
}

Header.defaultProps = {
    title:'Task Tracker',
}

Header.propTypes = {
    title:PropTypes.string.isRequired
}

//---CSS IN JS---
// const headingStyle = {
//     color: 'orange', 
//     backgroundColor:'purple'
// }

export default Header
