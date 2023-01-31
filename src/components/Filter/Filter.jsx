// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';

import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   changeFilterInput: PropTypes.func.isRequired,
// };

// import PropTypes from 'prop-types';
// import './Filter.module.css';

// export const Filter = ({ filter, getChangeFilter }) => {
//     return (
//         <label>
//             Find contacts by name
//             <input type="text"
//                 filter={filter}
//                 onChange={getChangeFilter}
//             />
//         </label>
//     );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   getChangeFilter: PropTypes.func.isRequired,
// };