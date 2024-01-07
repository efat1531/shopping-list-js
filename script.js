const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
// Add new elements to shopping list

const createDeleteIcon = (classList) => {
  const deteleIcon = document.createElement("i");
  deteleIcon.className = classList;
  return deteleIcon;
};

const createButton = (classList) => {
  const newButton = document.createElement("button");
  newButton.className = classList;
  const deleteIcon = createDeleteIcon("fa-solid fa-xmark"); // Assuming this function is defined elsewhere
  newButton.appendChild(deleteIcon);
  return newButton;
};

function addNewItem(event) {
  event.preventDefault();
  const newItem = itemInput.value;
  const regExp = /[a-zA-Z]/g;
  if (!regExp.test(newItem)) {
    alert("Enter items name");
    return;
  }

  const newListItem = document.createElement("li");
  newListItem.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  newListItem.appendChild(button);
  itemList.appendChild(newListItem);
  itemInput.value = "";
}

itemForm.addEventListener("submit", addNewItem);
