import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

import PropTypes from 'prop-types';
const Directory = ({categories}) => {
    
    return(
        <div className='categories-container'>
            {
                categories.map(({id, title, imageUrl}) => {
                    return <CategoryItem key={id} id={id} title={title} imageUrl={imageUrl}/>
                })
            }

        </div>
    )

}

Directory.propTypes = {
    categories: PropTypes.array.isRequired
    }

export default Directory;