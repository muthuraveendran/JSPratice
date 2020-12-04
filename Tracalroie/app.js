/* Storage Conroller */

/* Item Contreoller */
const ItemCtrl = (function(){
    /* Item Constructor */
    const Item = function(id , name , calories) {
        this.id = id,
        this.name = name,
        this.calories = calories
    }

    /* Data Structure / state */
    const data = {
       items:[
        {id:0,name:"Steak Dinner",calories:1200},
        {id:1,name:"Egg",calories:400},
        {id:2,name:"Cookies",calories:300}
    ],
    currentItem:null,
    totalCalories:0
    }

    /* Public Method */

    return {
        getItems: function() {
            return data.items
        },
        logData: function() {
            return data;
        },
        addItem: function(name , calories) {
            let ID;
           /* Create ID */
           if(data.items.length > 0 ) {
            ID = data.items[data.items.length - 1].id +1;
            console.log("ID Length >>>>>>>>>>>>> ",data.items[data.items.length - 1].id,'calories>>>>>',calories) 
           } else {
               ID = 0;
           }
         /* Calories to number */
         calories = parseInt(calories);
           /* Create new Item */
         newItem = new Item(ID,name,calories);

         /* Add to items Array */
         data.items.push(newItem);
         return newItem;
        }
    }

})();

/* UI Controller */
const UICtrl = (function() {

    const UISelector = {
        itemList : '#item-list',
        addbtn:'.add-btn.btn.blue.darken-3',
        itemNameInput : '#item-name',
        calorieNameInput : '#item-calorie'

    }


return {
    populateListItem : function(items) {
        let html ='';
        items.forEach((item) => {
          html += `  <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
          </a>
      </li> `
            // console.log(UISelector.itemList);
        document.querySelector(UISelector.itemList).innerHTML= html;

        })

    },
    getInput:function() {
        return {
            name: document.querySelector(UISelector.itemNameInput).value, 
            calorie: document.querySelector(UISelector.calorieNameInput).value 
        }
    },

    addListItem: function(item) {
        /* create li element */
        const li = document.createElement('li');
        /* Add a class */
        li.className = 'collection-item';
        /* Add ID */
        li.id = `item-${item.id}`;
        /* Add HTML */
        li.innerHTML = `<strong>${item.name}: </strong> 
        <em>${item.calorie} Calories</em>
          <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
          </a>
      </li> `
            // console.log(UISelector.itemList);
        document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend',li)

   
        
    },

    getSelector : function() {
        return UISelector;
    }
}
})();

/* APP Controller */
const App = (function(ItemCtrl,UICtrl) {

/* Load Event Lsteners */

const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelector();
    
    /* Add Item Event */

    document.querySelector(UISelectors.addbtn).addEventListener('click',itemAddSubmit)

   function itemAddSubmit(e) {
        const input = UICtrl.getInput();
        /* Check for name and calorie Input */
        if(input.name !== '' && input.calorie !== '') {
            /* Add Item */
            const newItem = ItemCtrl.addItem(input.name,input.calorie);
            /* Add item to UI list */
            UICtrl.addListItem(newItem);
        }



        e.preventDefault();
    }


}



     /* Public Method */

     return {
        init: function() {
          /* Fetch item from datastructure */
          const items = ItemCtrl.getItems();

          /* Populate list with items */
          UICtrl.populateListItem(items);

          /* Load Event Listener */
          loadEventListeners()

        }
    }

})(ItemCtrl,UICtrl);

App.init();