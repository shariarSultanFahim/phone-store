const loadPhone = async (searchedPhone,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchedPhone}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll);
}

const displayPhones = (phones,isShowAll) =>{

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    const showAllBtn = document.getElementById('showall-btn');

    if(phones.length > 12  && !isShowAll ){
        showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }
    console.log('aaaa' ,isShowAll);
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
        

  
    phones.forEach(phone => {
        const cardContainer = document.getElementById('card-container');
        const newCard = document.createElement('div');
        newCard.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
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
    // Hide Loading Animation
    toggleLoading(false);
};

const handleSearch = (isShowAll) =>{
    toggleLoading(true);
    const search = document.getElementById('search');
    const searchText = search.value;
    loadPhone(searchText,isShowAll);
}
const toggleLoading = (isLoading) =>{
    const loading = document.getElementById('loading');
    const featured = document.getElementById('featured-phones');
    featured.classList.add('hidden');
   if(isLoading){
    loading.classList.remove('hidden');
   }
   else{
    loading.classList.add('hidden');
   }
   
}


// Show All Handle
const showAll =() =>{
    handleSearch(true);
}