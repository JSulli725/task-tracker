import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom' 
import Button from './Button'

//header div is responsible for displaying the app title and changing the Add button appropriately
const Header = ({title, onAdd, showAdd}) => {

    const location = useLocation()

    return ( 
        <header className='header'> 
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}
        </header>
    )
}

//App Name
Header.defaultProps = {
    title: 'Task Tracker',
}

//App Name Validation
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
