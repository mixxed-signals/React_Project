import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const truncateItem = (item) => {
  if (item.value.length > 30) {
    return `${item.value.substring(0, 30)}...`;
  }
  return item.value;
}

const ItemComponent = ({ item }) => {
  const myItem = `- ${truncateItem(item)}`;
  return <li>{myItem}</li>;
};

const FactsList = ({data, onReset}) => {
  // handle reset
  const handleResetList = () => {
    onReset();
  }

  const listItems = data.map((item, index) => (
    <Link to={`/fact/${index + 1}`} key={index} className="customLink">
      <ItemComponent key={index} item={{ index, value: item }} />
    </Link>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
      <button
        type="button"
        className="resetButton"
        onClick={handleResetList}>
        <DeleteOutlined /> </button>
    </div>
  );
};

export default FactsList;
