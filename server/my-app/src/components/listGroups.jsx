const ListGroups = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;
  return (
    <ul class="list-group m-5">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            selectedItem === item
              ? "list-group-item m-0 active"
              : "list-group-item m-0"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroups.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroups;
