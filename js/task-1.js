const categories = document.querySelector("#categories");
const liItems = document.querySelectorAll(".item");

const countChildren = (parent) => {
  console.log(`Numbers of categories: ${parent.children.length}`);
};

const numInLi = (items) => {
  const headers = [];
  items.forEach((item) => {
    const children = item.querySelector("ul").children;
    const obgItem = {
      header: item.querySelector("h2").textContent,
      count: numChildren(children),
    };
    headers.push(obgItem);
  });

  output(headers);
};

const numChildren = (parent) => {
  let numOfChildren = 0;
  for (let i = 0; i < parent.length; i++) {
    numOfChildren++;
  }
  return numOfChildren;
};

const output = (headers) => {
  for (const item of headers) {
    console.log(`Category: ${item.header}`);
    console.log(`Elements: ${item.count}`);
  }
};

countChildren(categories);
numInLi(liItems);