'use strict';

const data = [
  {
    category: 'CATS',
    product: [
      {
        name: 'FEED',
        description: 'Complete dry food for sterilized/neutered cats/cats aged 1 to 7 years.',
        price: '350 UAH',
      },
      {
        name: 'TOYS',
        description: 'Hedgehog ball toy for cats. The diameter is 3 cm.',
        price: '89 UAH',
      },
        {
        name: 'ACCESSORIES',
        description: 'A super adorable and warm sweater in soft velor knit with a fluffy lining and a high collar for the off-season.',
        price: '456 UAH',
      },
    ]
  },
  {
    category: 'DOGS',
    product: [
      {
        name: 'FEED',
        description: 'For dogs of all breeds, the Home Food brand has created an excellent super-premium Turkey and Salmon food',
        price: '2990 UAH',
      },
      {
        name: 'TOYS',
        description: 'Swimming ball made of thermoplastic rubber for dogs.',
        price: '109 UAH',
      },
        {
        name: 'ACCESSORIES',
        description: 'Warm, comfortable down jacket for dogs for the cool autumn and spring season.',
        price: '990 UAH',
      },
    ]
  },
  {
    category: 'PARROTS, RABBISTS ETC.',
    product: [
      {
        name: 'FEED',
        description: 'Balanced complete ration mixtures with various useful ingredients for feeding.',
        price: '150 UAH',
      },
      {
        name: 'TOYS',
        description: 'Combined functional toys made of natural wood.',
        price: '45 UAH',
      },
        {
        name: 'ACCESSORIES',
        description: 'Carrying.',
        price: '1190 UAH',
      },
    ]
  }
];

const main = document.querySelector('#main');

function page() {
  main.innerHTML = '';

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');
  main.append(descriptionContainer);

  data.forEach((category) => {
    const container = document.createElement('div');
    const categories = document.createElement('div');
    const products = document.createElement('div');

    container.classList.add('container');
    categories.classList.add('category');
    products.classList.add('product');

    categories.innerText = category.category;
    container.append(categories);

    categories.addEventListener('click', () => {
      products.innerHTML = '';
      descriptionContainer.innerHTML = '';

      category.product.forEach((item) => {
        const product = document.createElement('div');
        const productName = document.createElement('p');
        const productInfo = document.createElement('div');

        product.classList.add('product-item');
        productName.classList.add('product-name');
        productInfo.classList.add('product-info');

        productName.innerText = item.name;

        productName.addEventListener('click', () => {
          const description = document.createElement('p');
          const price = document.createElement('p');
          const buyButton = document.createElement('button');
          buyButton.innerText = 'Buy';

          description.innerHTML = item.description;
          price.innerHTML = item.price;

          buyButton.addEventListener('click', () => {
            const formContainer = document.querySelector('.form-container');
            formContainer.style.display = 'block';

            descriptionContainer.innerHTML = '';
          });

          descriptionContainer.addEventListener('click', page);
          descriptionContainer.append(description);
          descriptionContainer.append(price);
          descriptionContainer.append(buyButton);
          product.append(descriptionContainer);
        });

        productInfo.append(productName);
        product.append(productName);
        products.append(product);
      });

      container.append(products);
    });

    main.append(container);
  });
}

page();

const cities = ['Kyiv', 'Ivano-Frankivsk', 'Lviv', 'Odessa', 'Ternopyl'];
const dropdownElement = document.getElementById('city');

cities.forEach(city => {
  const option = document.createElement('option');
  option.value = city;
  option.text = city;
  dropdownElement.add(option);
});

document.querySelector('#submit-btn').addEventListener('click', submitClick);

function submitClick() {
  const name = document.querySelector('#name').value;
  const city = document.querySelector('#city').value;
  const postDetails = document.querySelector('.post-details').value;
  const paymentMode = document.querySelector('.payment-mode:checked').value;
  const productNumber = document.querySelector('.product-number').value;
  const comment = document.querySelector('.comment-item').value;

  const data = { name, city, postDetails, paymentMode, productNumber, comment };

  if (!name || !city || !postDetails || !paymentMode || !productNumber) {
    alert('Please fill all fields');
    return;
  }

 const chosenProduct = {
    name: data.name,
    price: data.price,
    description: data.description
  };

  data.productInfo = `Product's name: ${chosenProduct.name}\nPrice: ${chosenProduct.price}\nDescription: ${chosenProduct.description}`

  renderTable(data);
}

function renderTable(data) {
  const formContainer = document.querySelector('.form-container');
  const tableContainer = document.querySelector('.table-container');

  main.style.display = 'none';
  formContainer.style.display = 'none';
  tableContainer.style.display = 'block';

  const table = document.getElementById('table');
  table.innerHTML = '';
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const theadTitles = ['Name', 'City', 'Delivery details', 'Mode of Payment', 'Amount of product', 'Comment', 'Chosen product'];

  theadTitles.forEach(theadTitle => {
    const th = document.createElement('th');
    th.innerText = theadTitle;
    tr.appendChild(th);
  });

  thead.appendChild(tr);

  const tbody = document.createElement('tbody');
  const datatr = document.createElement('tr');

  const dataValues = [
    data.name,
    data.city,
    data.postDetails,
    data.paymentMode,
    data.productNumber,
    data.comment,
    data.productInfo 
  ];

  dataValues.forEach(value => {
    const td = document.createElement('td');
    td.innerText = value;
    datatr.appendChild(td);
  });

  tbody.appendChild(datatr);

  table.appendChild(thead);
  table.appendChild(tbody);
}
