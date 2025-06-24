import React, { useReducer, useState } from "react";
import {Button,Form,Container,Row,Col,ListGroup,InputGroup,} from "react-bootstrap";

// --------------------- Reducer ---------------------
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };

    case "SET_FILTER":
      return { ...state, filter: action.value };

    case "SORT_ITEMS":
      const sorted = [...state.items].sort((a, b) => {
        if (action.criteria === "alphabetical") {
          return a.name.localeCompare(b.name);
        } else if (action.criteria === "time") {
          return a.id - b.id;
        }
        return 0;
      });
      return { ...state, items: sorted };

    default:
      return state;
  }
}

// --------------------- Initial State ---------------------
const initialState = {
  items: [],
  filter: "",
};

// --------------------- Component ---------------------
function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);   
  const [editText, setEditText] = useState("");

  // Thêm item mới
  const handleAddItem = () => {
    if (newItemName.trim() !== "") {
      const newItem = { id: Date.now(), name: newItemName.trim() };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  // Xóa item
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  // Bắt đầu chỉnh sửa
  const handleEditItem = (id, name) => {
    setEditId(id);
    setEditText(name);
  };

  // Lưu chỉnh sửa
  const handleSaveEdit = (id) => {
    if (editText.trim() !== "") {
      dispatch({ type: "EDIT_ITEM", id, newName: editText.trim() });
      setEditId(null);
      setEditText("");
    }
  };

  // Lọc item
  const handleFilterChange = (e) => {
    dispatch({ type: "SET_FILTER", value: e.target.value });
  };

  // Sắp xếp item
  const handleSort = (criteria) => {
    dispatch({ type: "SORT_ITEMS", criteria });
  };

  // Danh sách item đã lọc
  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="offset-md-2">
          <Form>
            <Form.Group>
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem} className="mt-2">
              Add Item
            </Button>
          </Form>

          <Form.Control
            className="mt-4"
            placeholder="Search item..."
            value={state.filter}
            onChange={handleFilterChange}
          />

          <div className="mt-3 d-flex gap-2">
            <Button variant="secondary" onClick={() => handleSort("alphabetical")}>
              Sort A-Z
            </Button>
            <Button variant="secondary" onClick={() => handleSort("time")}>
              Sort by Time
            </Button>
          </div>

          <h5 className="mt-4">Item List</h5>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editId === item.id ? (
                  <InputGroup>
                    <Form.Control
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <Button
                      variant="success"
                      onClick={() => handleSaveEdit(item.id)}
                    >
                      Save
                    </Button>
                  </InputGroup>
                ) : (
                  <>
                    {item.name}
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEditItem(item.id, item.name)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
