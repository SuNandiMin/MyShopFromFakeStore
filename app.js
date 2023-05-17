let product_list = document.getElementById("tbody");
let list = "";
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      list += `
              <tr onclick="detail(${item.id})">
              <td>${item.id}</td>
              <td>${item.title}</td>
              <td>$${item.price}</td>
              <td>${item.description}</td>
              <td>${item.rating.rate}</td>
              <td>
                <img
                  src="${item.image}"
                  alt=""
                />
              </td>
              </tr>
              `;
    });
    // console.log(list);
    product_list.innerHTML = list;
  });

let card = document.getElementById("card");
console.log(card);
card.style.display = "none";

function detail(id) {
  fetch("https://fakestoreapi.com/products/" + id)
    .then((response) => response.json())
    .then((data) => {
      product_detail =  `
      <img src="${data.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Product Detail</h5>
        <table>
          <tr>
            <td class="text-success fw-bold">Name</td>
            <td>${data.title}</td>
          </tr>
          <tr>
            <td class="text-success fw-bold">Price</td>
            <td>$${data.price} </td>
          </tr>
          <tr>
            <td class="text-success fw-bold">Description</td>
            <td>${data.description}</td>
          </tr>
          <tr>
            <td class="text-success fw-bold">Rating</td>
            <td>${data.rating.rate}</td>
          </tr>
        </table>
        `;
    //   console.log(product_detail);
      card.innerHTML = product_detail;
      card.style.display ="block";

    });
}

// for (let i = 0; i < data.length; i++) {

//     list += `
//       <td>${data[i].id}</td>
//       <td>${data[i].title}</td>
//       <td>$${data[i].price}</td>
//       <td>${data[i].description}</td>
//       <td>${data[i].rating.rate}</td>
//       <td>
//         <img
//           src="https://e0.pxfuel.com/wallpapers/342/678/desktop-wallpaper-kim-taehyung-bts-cgv-thv-taetae-tae.jpg"
//           alt=""
//         />
//       </td>
//       `;
//   }
