  

//   const itemFragment1 = document.createDocumentFragment(); // Birinchi yozlish usuli  pastagi bilan bir xil ishlaydi... 
   
   //  const itemFragment = new DocumentFragment(); //ikkinchi yozlish usuli hisoblanadi... // Katta kapsula
   //  const elTemplet = document.querySelector('.js-template').content;  // Kichik kapsula content qoylishi shart ichidagi malumotlat to'liq olish uchun 


   
   const elList = document.querySelector('.js-list'); 
   const elInput = document.querySelector('.js-input');  
   const elBtnGrop = document.querySelector('.js-btn-grop'); 
   const elBtn1 = document.querySelector('.js-btn1');
   const elBtn2 = document.querySelector('.js-btn2');  
   const elBtnList = document.querySelector('.btn-list'); 
   const elSelect = document.querySelector('.js-select');
   let EPPK = 'a39dcfca';
   let activPage = 1; 

   const renderMovue = (array, node) => { 

         node.innerHTML = '';  
         elBtnList.innerHTML = '';  
         elTitle.textContent = '';

         if(array.Response == "True"){ 
            array.Search.forEach((item) => { 
               node.innerHTML += ` 
               <li class="js-item"> 
               <h2 class="js-title">${item.Title}</h2>  
             <img class="js-img" src="${item.Poster}" alt="" width="250" height="300">  
               <strong class="js-year">${item.Year}</strong> 
               <strong class="js-imdbID">${item.imdbID}</strong> 
               <span class="js-type">${item.Type}</span>
             </li>
                   
               `;
   
            }); 
         }  
              
           
         const totalPages = Math.ceil(array.totalResults / 10);

         if(activPage == 1){ 

            elBtn1.setAttribute('disabled', true);
         }else{ 

            elBtn1.removeAttribute('disabled');
         } 

         if(activPage == totalPages){ 

            elBtn2.setAttribute('disabled', true);
         }else{ 

            elBtn2.removeAttribute('disabled');
         } 

         for(var i = 1; i <= totalPages; i++){ 

            elBtnList.innerHTML += `
            <butten class="pagination-btn" data-pagination-id="${i}">${i}</butten>
            `;
         }
   }; 

 //=======================================================================================================  
   


//===========================================================================================================

elBtnList.addEventListener('click', function(evt){ 

if(evt.target.matches('.pagination-btn')){ 

   activPage = evt.target.dataset.paginationId; 

   asinFun ();
}

})
   
//============================================================================================================================
     elInput.addEventListener('change', function(evt){ 

       asinFun ();

     });
  //======================================================================================================================

 async function asinFun (){ 

    const response = await fetch(`https://www.omdbapi.com/?apikey=${EPPK}&s=${elInput.value}&page=${activPage}&type=${elSelect.value}`,);
    const data = await response.json();
   
   
    renderMovue(data, elList);
 }

 asinFun () 
 //=====================================================================Butten Grop====================================================
        
   elBtnGrop.addEventListener('click', function(evt){ 

    if(evt.target.matches('.js-btn1')){ 
      activPage--;
      console.log(activPage); 
      asinFun ()
    }if(evt.target.matches('.js-btn2')){ 

      activPage++; 
      console.log(activPage); 
      asinFun ()
    }

   })

 //=======================================================================darknot=============================================== 
 
 elSelect.addEventListener('change', function(){ 

   asinFun () 
 });
 //================================================================================================================
  
 const elBtn = document.querySelector('.js-btn');

 let elColor = false;

 elBtn.addEventListener('click', function(){ 
  
elColor = !elColor;

var bigCol = elColor ? 'dark' : 'light';

window.localStorage.setItem('elColor', bigCol);
domgaChiqar()

 });


function domgaChiqar(){ 

   if(window.localStorage.getItem('elColor') == 'dark'){ 

     document.body.classList.add('dark');

   }
   else{ 

    document.body.classList.remove('dark');  
   }
};

domgaChiqar()





















