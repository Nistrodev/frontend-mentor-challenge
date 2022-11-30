
const btnAv = document.querySelectorAll('.btn');
const btnSelect = document.querySelector('.btn_select');
const camp1 = document.querySelector('.camp_1');
const camp2 = document.querySelector('.camp_2');
const textefin = document.querySelector('.textefin');
function evaluate() {
let notesfinales;

   document.addEventListener('click', function (e) {
      const el = e.target;
      let notes = el.innerText;
      
      if (notes !== "Submit") {
         nota(notes);
         return;
      }
      if (notesfinales <= 5) {
         notaf(camp1, camp2);
         return;
      };
   });

   function nota(notes) {
      if (notes === "1") {
         remove();
         add(notes);
         return;
      };
      if (notes === "2") {
         remove();
         add(notes);
         return;
      };
      if (notes === "3") {
         remove();
         add(notes);
         return;
      };
      if (notes === "4") {
         remove();
         add(notes);
         return;
      };
      if (notes === "5") {
         remove();
         add(notes);
         return;
      };
   }

   function add(notes) {
      notesfinales = notes;
      btnAv[notesfinales - 1].classList.add('radcir');
   }
   
   function remove() {
      btnAv[0].classList.remove('radcir');
      btnAv[1].classList.remove('radcir');
      btnAv[2].classList.remove('radcir');
      btnAv[3].classList.remove('radcir');
      btnAv[4].classList.remove('radcir');
      notesfinales = "";
      return;
   }
   function notaf(camp1, camp2){
      camp1.classList.add('ocult');
      camp2.classList.remove('ocult');
      textofim.innerHTML= `You selected ${notesfinales} out of 5`;
   }

}

evaluate(btnAv, btnSelect, camp1, camp2);