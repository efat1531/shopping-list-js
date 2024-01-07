const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearAllItemButton = document.querySelector("#clear");
const filterItems = document.querySelector("#filter");

// ()=> Add new elements to shopping list

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
  checkUIElements();
  itemInput.value = "";
}

itemForm.addEventListener("submit", addNewItem);

// ()=> Delete Item
function removeItemFromList(event) {
  if (event.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure you want to remove?")) {
      event.target.parentElement.parentElement.remove();
      checkUIElements();
    }
  }
}

itemList.addEventListener("click", removeItemFromList);

// ()=> clear all item
function clearListItems(event) {
  if (confirm("Are you really want to delete all those items?")) {
    while (itemList.firstChild) {
      itemList.firstChild.remove();
    }
    checkUIElements();
  }
}

clearAllItemButton.addEventListener("click", clearListItems);

// ()=> check UI element
function checkUIElements() {
  const itemsList = document.querySelectorAll("li");
  if (itemsList.length === 0) {
    clearAllItemButton.style.display = "none";
    filterItems.style.display = "none";
  } else {
    clearAllItemButton.style.display = "block";
    filterItems.style.display = "block";
  }
}

checkUIElements();

// ()=> Filter Items

function filterItemList(event) {
  const inputText = event.target.value.toLowerCase();
  const itemsList = document.querySelectorAll("li");
  itemsList.forEach((element) => {
    const itemName = element.firstChild.textContent.toLowerCase();
    if (itemName.includes(inputText)) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
}
filterItems.addEventListener("input", filterItemList);
