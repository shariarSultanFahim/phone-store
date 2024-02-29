const loadPhone = async (searchedPhone) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchedPhone}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones =>{
    phones.forEach(phone => {
        const cardContainer = document.getElementById('card-container');
        const newCard = document.createElement('div');
        newCard.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src="${phone.image}" alt="Phone" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">${phone.brand}</h2>
                  <h2 class="card-title">${phone.phone_name}</h2>
                  
                  <div class="card-actions">
                    <button class="btn btn-error">Show Details</button>
                  </div>
                </div>
              </div>`
        cardContainer.append(newCard);
    });
}

const handleSearch = () =>{
    const search = document.getElementById('search');
    const searchText = search.value;
    loadPhone(searchText);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
}