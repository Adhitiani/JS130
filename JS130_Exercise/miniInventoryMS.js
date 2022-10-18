class Item {
  constructor(skuCode, itemName, category, quantity) {
    this.skuCode = skuCode;
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity
  }
}

function charCount(str) {
  let arrStr = str.split('');
  return arrStr.filter(char => char !== ' ').join('');
}

function oneWord(str) {
  let arrStr = str.split(' ');
  if (arrStr.length > 1) return false;
  return true;
}

function skuCreator(name, cathegory) {
  let firstThree = name.slice(0, 3);

  if(firstThree[firstThree.length - 1] === ' ') {
    firstThree = name.slice(0, 2) + name.slice(3, 4)
  }

  let lastTwo = cathegory.slice(0, 2);

  return firstThree + lastTwo;
}


let ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    if(charCount(itemName).length < 5) return false;
    if(!oneWord(category) || category.length < 5) return false;
    if(quantity === undefined) return false;

    let skuCode = skuCreator(itemName, category);

    this.items.push(new Item(skuCode, itemName, category, quantity));
  }
};
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items.length)
