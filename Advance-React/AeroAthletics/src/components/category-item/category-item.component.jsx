import "./categories.styles.scss";
import PropTypes from 'prop-types';


const CategoryItem = ({id, imageUrl, title}) => {
    return (
      <div key={id} className='category-container' >
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
          <div className='category-body-container'>
            <h2>{ title }</h2>
            <p>Shop Now</p>
          </div>
      </div>
    )
  }

  CategoryItem.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

export default CategoryItem;