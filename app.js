// Dinner data with comprehensive ingredients organized by store section
const meals = [
    { 
        name: "Steak & Potatoes", 
        ingredients: "Any steak, sweet potatoes or regular potatoes, fresh rosemary, garlic, butter, olive oil",
        meat: ["Any steak (ribeye, sirloin, filet, etc.)"],
        produce: ["Sweet potatoes or russet potatoes", "Fresh rosemary", "Garlic"],
        dairy: ["Butter"],
        pantry: ["Olive oil", "Salt", "Black pepper"],
        prepTime: 30,
        category: "date-night",
        storeNotes: {
            "Fresh Market": "Best steaks - prime grade options available",
            "Publix": "Good quality steaks, often on BOGO",
            "Sprouts": "Grass-fed steak options available",
            "Walmart": "Great Value steaks, budget-friendly",
            "Target": "Good & Gather steaks, decent quality"
        }
    },
    { 
        name: "Panko Chicken", 
        ingredients: "Frozen diced chicken, flour, eggs, panko breadcrumbs, rice, spicy mayo sauce",
        meat: ["Frozen diced chicken (preferred)"],
        produce: [],
        dairy: ["Eggs", "Mayonnaise"],
        frozen: ["Frozen diced chicken (if using)"],
        pantry: ["All-purpose flour", "Panko breadcrumbs", "Rice", "Rice vinegar", "Splenda", "Sriracha"],
        prepTime: 20 
    },
    { 
        name: "Lou's Pizza", 
        ingredients: "Lou's frozen pizza",
        frozen: ["Lou's frozen pizza"],
        pantry: [],
        produce: [],
        meat: [],
        dairy: [],
        prepTime: 15,
        storeNotes: {
            "Trader Joe's": "Check frozen section for Lou's brand",
            "Publix": "Usually in stock in frozen aisle",
            "Fresh Market": "Premium frozen section",
            "Target": "May carry in frozen foods",
            "Walmart": "Check frozen pizza section"
        }
    },
    { 
        name: "Orange Chicken", 
        ingredients: "Frozen orange chicken, rice",
        frozen: ["Trader Joe's Mandarin Orange Chicken", "Target Good & Gather Orange Chicken", "Walmart Great Value Orange Chicken"],
        produce: ["Green onions", "Sesame seeds (optional)"],
        pantry: ["White rice or Jasmine rice"],
        meat: [],
        dairy: [],
        prepTime: 15,
        storeNotes: {
            "Trader Joe's": "Best option - Mandarin Orange Chicken in frozen section",
            "Target": "Good & Gather brand in frozen aisle",
            "Walmart": "Great Value brand, usually cheaper option"
        }
    },
    { 
        name: "Lemon Chicken Breast", 
        ingredients: "Chicken breast, lemons, capers, fresh parsley, butter, white wine, chicken broth",
        meat: ["Chicken breast"],
        produce: ["Lemons", "Fresh parsley", "Garlic"],
        dairy: ["Butter"],
        pantry: ["Capers", "White wine", "Chicken broth", "Olive oil", "Salt", "Black pepper", "All-purpose flour"],
        prepTime: 25,
        category: "date-night"
    },
    { 
        name: "Honey Crusted Chicken", 
        ingredients: "Chicken breast, honey, panko breadcrumbs, butter, fresh thyme, dijon mustard",
        meat: ["Chicken breast"],
        produce: ["Fresh thyme", "Garlic"],
        dairy: ["Butter"],
        pantry: ["Honey", "Panko breadcrumbs", "Dijon mustard", "Olive oil", "Salt", "Black pepper"],
        prepTime: 30 
    },
    { 
        name: "Chicken Parm", 
        ingredients: "Chicken breast, marinara sauce, mozzarella cheese, parmesan cheese, panko breadcrumbs, eggs, flour, fresh basil",
        meat: ["Chicken breast"],
        produce: ["Fresh basil", "Garlic"],
        dairy: ["Mozzarella cheese", "Parmesan cheese", "Eggs"],
        pantry: ["Marinara sauce", "Panko breadcrumbs", "All-purpose flour", "Olive oil", "Salt", "Black pepper"],
        prepTime: 40,
        storeNotes: {
            "Trader Joe's": "Get their pre-made marinara sauce - excellent quality",
            "Publix": "Boar's Head mozzarella is great, often BOGO",
            "Fresh Market": "Fresh basil in herb section, high quality cheeses",
            "Sprouts": "Organic chicken breast, natural ingredients",
            "Walmart": "Great Value ingredients work fine for this recipe"
        }
    },
    { 
        name: "BBQ Chicken Wraps", 
        ingredients: "Chicken breast, flour tortillas, coleslaw mix, red onion, cilantro, BBQ sauce, mayonnaise",
        meat: ["Chicken breast"],
        produce: ["Coleslaw mix", "Red onion", "Cilantro", "Lime"],
        dairy: ["Flour tortillas"],
        pantry: ["BBQ sauce", "Mayonnaise", "Apple cider vinegar", "Sugar", "Salt", "Black pepper"],
        prepTime: 20 
    },
    { 
        name: "Caprese Chicken", 
        ingredients: "Chicken breast, mozzarella cheese, cherry tomatoes, fresh basil, balsamic glaze, olive oil",
        meat: ["Chicken breast"],
        produce: ["Cherry tomatoes", "Fresh basil", "Garlic"],
        dairy: ["Mozzarella cheese"],
        pantry: ["Balsamic glaze", "Olive oil", "Salt", "Black pepper", "Italian seasoning"],
        prepTime: 20 
    },
    { 
        name: "Pull Pork Sandwiches", 
        ingredients: "Pork shoulder, hamburger buns, coleslaw mix, BBQ sauce, apple cider vinegar, brown sugar",
        meat: ["Pork shoulder (3-4 lbs)"],
        produce: ["Coleslaw mix", "Onion"],
        dairy: ["Hamburger buns"],
        pantry: ["BBQ sauce", "Apple cider vinegar", "Brown sugar", "Paprika", "Garlic powder", "Onion powder", "Salt", "Black pepper"],
        prepTime: 45 
    },
    { 
        name: "Cheeseburgers", 
        ingredients: "Ground beef, hamburger buns, cheese slices, lettuce, tomato, onion, pickles, condiments",
        meat: ["Ground beef (80/20)"],
        produce: ["Lettuce", "Tomato", "Onion"],
        dairy: ["Hamburger buns", "Cheese slices"],
        pantry: ["Pickles", "Ketchup", "Mustard", "Mayonnaise", "Salt", "Black pepper"],
        prepTime: 20 
    },
    { 
        name: "BBQ Mac & Cheese", 
        ingredients: "Elbow macaroni, cheddar cheese, cream cheese, milk, butter, BBQ sauce, pulled pork",
        meat: ["Pre-cooked pulled pork"],
        produce: [],
        dairy: ["Sharp cheddar cheese", "Cream cheese", "Milk", "Butter"],
        pantry: ["Elbow macaroni", "BBQ sauce", "All-purpose flour", "Paprika", "Garlic powder", "Salt", "Black pepper"],
        prepTime: 25 
    },
    { 
        name: "Buffalo Chicken Lettuce Wraps", 
        ingredients: "Chicken breast, butter lettuce, celery, carrots, buffalo sauce, blue cheese dressing",
        meat: ["Chicken breast"],
        produce: ["Butter lettuce", "Celery", "Carrots"],
        dairy: ["Blue cheese dressing"],
        pantry: ["Buffalo sauce", "Olive oil", "Salt", "Black pepper"],
        prepTime: 15 
    },
    { 
        name: "Bang Bang Chicken Bowls", 
        ingredients: "Chicken breast, jasmine rice, broccoli, carrots, mayonnaise, sweet chili sauce, sriracha, green onions",
        meat: ["Chicken breast"],
        produce: ["Broccoli", "Carrots", "Green onions"],
        dairy: [],
        pantry: ["Jasmine rice", "Mayonnaise", "Sweet chili sauce", "Sriracha", "Soy sauce", "Cornstarch", "Vegetable oil", "Salt", "Black pepper"],
        prepTime: 25 
    },
    { 
        name: "Steak Tacos", 
        ingredients: "Flank steak, corn tortillas, lime, cilantro, white onion, avocado, salsa verde, queso fresco",
        meat: ["Flank steak"],
        produce: ["Lime", "Cilantro", "White onion", "Avocado"],
        dairy: ["Corn tortillas", "Queso fresco"],
        pantry: ["Salsa verde", "Cumin", "Chili powder", "Garlic powder", "Salt", "Black pepper", "Vegetable oil"],
        prepTime: 20 
    },
    { 
        name: "Chipotle Bowls", 
        ingredients: "Chicken breast, jasmine rice, black beans, corn, tomatoes, lettuce, cheese, sour cream, avocado, lime",
        meat: ["Chicken breast"],
        produce: ["Corn", "Tomatoes", "Romaine lettuce", "Avocado", "Lime", "Cilantro"],
        dairy: ["Mexican cheese blend", "Sour cream"],
        pantry: ["Jasmine rice", "Black beans (canned)", "Cumin", "Chili powder", "Garlic powder", "Salt", "Black pepper", "Olive oil"],
        prepTime: 25,
        storeNotes: {
            "Trader Joe's": "Their Mexican cheese blend is perfect, good avocados",
            "Sprouts": "Organic produce section has great avocados and limes",
            "Publix": "Good selection of fresh produce, check for BOGO deals",
            "Walmart": "Great Value black beans and rice are budget-friendly",
            "Target": "Good & Gather ingredients, decent quality"
        }
    },
    { 
        name: "Spinach & Artichoke Chicken", 
        ingredients: "Chicken tenders, frozen spinach, artichoke hearts, cream cheese, Greek yogurt, mozzarella, parmesan, tortilla chips",
        meat: ["Chicken tenders or chicken breasts (2 lbs)"],
        produce: ["Garlic (3 cloves)"],
        dairy: ["Cream cheese (4 oz)", "Plain Greek yogurt (3/4 cup)", "Grated Parmesan cheese (1/2 cup)", "Shredded mozzarella cheese (1 cup)"],
        frozen: ["Frozen chopped spinach (10 oz)"],
        pantry: ["Canned artichoke hearts (14 oz)", "Olive oil (1 tsp)", "Kosher salt (1.5 tsp)", "Ground black pepper (3/4 tsp)", "Onion powder (1/2 tsp)", "Garlic powder (1.5 tsp, alternative)", "Tortilla chips"],
        prepTime: 35 
    },
    { 
        name: "Asian Chicken Tacos", 
        ingredients: "Chicken thighs, corn tortillas, cabbage slaw, lime, cilantro, sriracha, mayonnaise, soy sauce, sesame oil",
        meat: ["Chicken thighs"],
        produce: ["Cabbage slaw mix", "Lime", "Cilantro", "Green onions", "Ginger", "Garlic"],
        dairy: ["Corn tortillas"],
        pantry: ["Sriracha", "Mayonnaise", "Soy sauce", "Sesame oil", "Rice vinegar", "Brown sugar", "Vegetable oil"],
        prepTime: 25 
    },
    { 
        name: "Skinny Pasta", 
        ingredients: "Pasta, broccoli, chicken breast, alfredo sauce with cream cheese and parmesan",
        meat: ["Chicken breasts (2 medium)"],
        produce: ["Broccoli florets (2 cups)", "Onion (1/2)", "Garlic (5-6 cloves)"],
        dairy: ["Whole milk (1 cup)", "Cream cheese (2 oz)", "Freshly-grated Parmesan cheese (1/2 cup)", "Butter (optional)"],
        pantry: ["Pasta (8-10 oz)", "Olive oil (2 tbsp total)", "Garlic powder (1/2 tsp)", "Paprika (1/2 tsp)", "Italian seasoning (1/2 tsp)", "All-purpose flour (3 tbsp)", "Chicken stock (1 cup)", "Salt", "Black pepper"],
        prepTime: 25 
    },
    { 
        name: "Parmesan Crusted Sheet Pan Dinner", 
        ingredients: "Chicken breast, broccoli, baby potatoes, parmesan cheese, panko breadcrumbs, garlic, olive oil",
        meat: ["Chicken breast"],
        produce: ["Broccoli", "Baby potatoes", "Garlic"],
        dairy: ["Parmesan cheese"],
        pantry: ["Panko breadcrumbs", "Olive oil", "Italian seasoning", "Garlic powder", "Salt", "Black pepper"],
        prepTime: 35 
    },
    { 
        name: "BBQ Chicken Sweet Potato Bowl", 
        ingredients: "Chicken tenders, sweet potatoes, BBQ sauce, coleslaw mix, red onion, cilantro, Greek yogurt, lime, hot honey, avocado",
        meat: ["Chicken tenders (6-8 pieces)"],
        produce: ["Sweet potatoes (2-4)", "Coleslaw mix (1/2 bag)", "Red onion (1/4)", "Cilantro (1 bunch)", "Lime (1 for juice and zest)", "Avocado"],
        dairy: ["Greek yogurt (2 heaping tbsp)"],
        pantry: ["BBQ sauce (8.5 oz bottle, Primal Kitchen preferred)", "Hot honey"],
        prepTime: 35 
    },
    { 
        name: "Calzone", 
        ingredients: "Pizza dough, ricotta cheese, mozzarella cheese, pepperoni, italian sausage, marinara sauce, egg",
        meat: ["Pepperoni", "Italian sausage"],
        produce: ["Fresh basil"],
        dairy: ["Pizza dough", "Ricotta cheese", "Mozzarella cheese", "Egg"],
        pantry: ["Marinara sauce", "Italian seasoning", "Garlic powder", "Olive oil"],
        prepTime: 25 
    },
    { 
        name: "BBQ Sausage & Macaroni", 
        ingredients: "Italian sausage, elbow macaroni, cheddar cheese, onion, bell peppers, BBQ sauce, diced tomatoes",
        meat: ["Italian sausage"],
        produce: ["Onion", "Bell peppers"],
        dairy: ["Sharp cheddar cheese"],
        pantry: ["Elbow macaroni", "BBQ sauce", "Diced tomatoes (canned)", "Garlic powder", "Paprika", "Salt", "Black pepper"],
        prepTime: 20 
    },
    { 
        name: "Chicken Sandwich", 
        ingredients: "Chicken breast, hamburger buns, lettuce, tomato, pickles, cheese, mayonnaise, hot sauce",
        meat: ["Chicken breast"],
        produce: ["Lettuce", "Tomato"],
        dairy: ["Hamburger buns", "Cheese slices"],
        pantry: ["Pickles", "Mayonnaise", "Hot sauce", "All-purpose flour", "Paprika", "Salt", "Black pepper", "Vegetable oil"],
        prepTime: 20 
    },
    { 
        name: "Burger Bowl", 
        ingredients: "Ground beef, butter lettuce, cherry tomatoes, sweet onion, pickles, bacon, avocado, special sauce ingredients",
        meat: ["Lean ground beef (1 lb)", "Bacon (4 pieces)"],
        produce: ["Butter lettuce (2-4 cups)", "Cherry tomatoes (1 cup)", "Sweet yellow onion (1 large)", "Purple onion (2-4 slices)", "Avocado (1, optional)", "Dill pickles"],
        dairy: ["Mayonnaise (1/2 cup)"],
        pantry: ["Ketchup (1/4 cup)", "Pickle juice (1/2 tsp)", "Paprika (1/4 tsp)", "Garlic powder (1 tsp total)", "Onion powder (1/2 tsp)", "Kosher salt", "Black pepper", "Soy sauce (1/2 tsp)", "Rice vinegar (1/2 tsp)", "Extra virgin olive oil (1 tbsp)", "Burger pickles (8 pieces)"],
        prepTime: 25 
    }
];

// App state
let mealData = {};
let weekPlan = {};
let activityLog = [];
let restaurants = [];
let currentModalTarget = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    initializeApp();
    updateStats();
    renderMeals();
    renderRestaurants();
    renderWeekPlan();
    renderQuickLog();
    renderActivity();
    
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(function(registration) {
                console.log('SW registered');
            })
            .catch(function(error) {
                console.log('SW registration failed');
            });
    }
});

// Load data from localStorage
function loadData() {
    const savedMealData = localStorage.getItem('dinnerPlannerMeals');
    const savedWeekPlan = localStorage.getItem('dinnerPlannerWeek');
    const savedActivity = localStorage.getItem('dinnerPlannerActivity');
    const savedRestaurants = localStorage.getItem('dinnerPlannerRestaurants');
    
    if (savedMealData) {
        mealData = JSON.parse(savedMealData);
    } else {
        // Initialize meal data
        meals.forEach(meal => {
            mealData[meal.name] = {
                count: 0,
                lastMade: null,
                category: 'regular', // default category
                ...meal
            };
        });
    }
    
    if (savedWeekPlan) {
        weekPlan = JSON.parse(savedWeekPlan);
    }
    
    if (savedActivity) {
        activityLog = JSON.parse(savedActivity);
    }
    
    if (savedRestaurants) {
        restaurants = JSON.parse(savedRestaurants);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('dinnerPlannerMeals', JSON.stringify(mealData));
    localStorage.setItem('dinnerPlannerWeek', JSON.stringify(weekPlan));
    localStorage.setItem('dinnerPlannerActivity', JSON.stringify(activityLog));
    localStorage.setItem('dinnerPlannerRestaurants', JSON.stringify(restaurants));
}

// Initialize event listeners
function initializeApp() {
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Search and filter
    document.getElementById('searchMeals').addEventListener('input', renderMeals);
    document.getElementById('filterCategory').addEventListener('change', renderMeals);
    
    // Close modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    // Modal backdrop close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    });
    
    // Shopping list generation
    document.getElementById('generateShoppingList').addEventListener('click', generateShoppingList);
    document.getElementById('generateQuickList').addEventListener('click', showQuickShoppingModal);
    document.getElementById('generateSelectedList').addEventListener('click', generateSelectedShoppingList);
    document.getElementById('shareShoppingList').addEventListener('click', shareShoppingList);
    
    // Modal actions
    document.getElementById('logMealBtn').addEventListener('click', function() {
        const mealName = document.getElementById('detailMealName').textContent;
        logMeal(mealName);
        closeModal();
    });
    
    document.getElementById('addToPlanBtn').addEventListener('click', function() {
        const mealName = document.getElementById('detailMealName').textContent;
        if (currentModalTarget) {
            addMealToPlan(currentModalTarget, mealName);
        }
        closeModal();
    });
    
    // Add meal form
    document.getElementById('addMealForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addNewMeal();
    });
    
    document.getElementById('clearForm').addEventListener('click', clearAddMealForm);
    
    // Restaurant form
    document.getElementById('addRestaurantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addNewRestaurant();
    });
    
    document.getElementById('clearRestaurantForm').addEventListener('click', clearRestaurantForm);
    
    // Remove meal functionality
    document.getElementById('removeMealBtn').addEventListener('click', function() {
        if (currentModalTarget) {
            removeMealFromPlan(currentModalTarget);
        }
        closeModal();
    });
}

// Tab switching
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Update dashboard stats
function updateStats() {
    const totalMeals = Object.keys(mealData).length;
    const neverMade = Object.values(mealData).filter(meal => !meal.lastMade).length;
    
    // Count meals made this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const recentMeals = Object.values(mealData).filter(meal => {
        if (!meal.lastMade) return false;
        return new Date(meal.lastMade) > oneWeekAgo;
    }).length;
    
    document.getElementById('totalMeals').textContent = totalMeals;
    document.getElementById('neverMade').textContent = neverMade;
    document.getElementById('recentMeals').textContent = recentMeals;
}

// Render meals list
function renderMeals() {
    const searchTerm = document.getElementById('searchMeals').value.toLowerCase();
    const categoryFilter = document.getElementById('filterCategory').value;
    const container = document.getElementById('mealsList');
    
    // Filter and sort meals alphabetically - show ALL meals
    let filteredMeals = Object.values(mealData).filter(meal => {
        const matchesSearch = meal.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || meal.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    // Sort alphabetically by name
    filteredMeals.sort((a, b) => a.name.localeCompare(b.name));
    
    container.innerHTML = filteredMeals.map(meal => {
        const daysSinceLastMade = meal.lastMade ? 
            Math.floor((Date.now() - new Date(meal.lastMade)) / (1000 * 60 * 60 * 24)) : null;
        
        let cardClass = 'meal-card';
        let lastMadeText = 'Never made';
        
        if (daysSinceLastMade === null) {
            cardClass += ' never-made';
        } else if (daysSinceLastMade > 14) {
            cardClass += ' overdue';
            lastMadeText = `${daysSinceLastMade} days ago`;
        } else {
            lastMadeText = daysSinceLastMade === 0 ? 'Today' : `${daysSinceLastMade} days ago`;
        }
        
        const categoryBadge = meal.category === 'date-night' ? '<span class="category-badge">Date Night</span>' : '';
        
        return `
            <div class="${cardClass}" onclick="showMealDetails('${meal.name}')">
                <div class="meal-header">
                    <div class="meal-name">
                        ${meal.name}
                        ${categoryBadge}
                    </div>
                </div>
                <div class="meal-ingredients">${meal.ingredients}</div>
                <div class="meal-info">
                    <span class="last-made">
                        ${lastMadeText}
                    </span>
                    <span class="count">
                        ${meal.count} times
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// Render restaurants list
function renderRestaurants() {
    const container = document.getElementById('restaurantsList');
    
    if (restaurants.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--gray-500);">
                <p>No restaurants saved yet!</p>
                <p>Add your favorite restaurants above for easy date night planning.</p>
            </div>
        `;
        return;
    }
    
    // Sort by last visited (oldest first)
    const sortedRestaurants = [...restaurants].sort((a, b) => {
        if (!a.lastVisited && !b.lastVisited) return 0;
        if (!a.lastVisited) return -1;
        if (!b.lastVisited) return 1;
        return new Date(a.lastVisited) - new Date(b.lastVisited);
    });
    
    container.innerHTML = sortedRestaurants.map((restaurant, index) => {
        const daysSinceVisited = restaurant.lastVisited ? 
            Math.floor((Date.now() - new Date(restaurant.lastVisited)) / (1000 * 60 * 60 * 24)) : null;
        
        const lastVisitedText = daysSinceVisited === null ? 'Never visited' : 
            daysSinceVisited === 0 ? 'Visited today' : `Visited ${daysSinceVisited} days ago`;
        
        return `
            <div class="restaurant-card" onclick="visitRestaurant(${index})">
                <div class="restaurant-header">
                    <div>
                        <div class="restaurant-name">${restaurant.name}</div>
                        ${restaurant.cuisine ? `<span class="restaurant-cuisine">${restaurant.cuisine}</span>` : ''}
                    </div>
                </div>
                <div class="restaurant-details">
                    ${restaurant.location ? `
                        <div class="restaurant-location">
                            📍 ${restaurant.location}
                        </div>
                    ` : ''}
                    ${restaurant.notes ? `
                        <div class="restaurant-notes">${restaurant.notes}</div>
                    ` : ''}
                </div>
                <div class="restaurant-actions">
                    <span class="restaurant-visited">${lastVisitedText}</span>
                    <button class="delete-restaurant" onclick="event.stopPropagation(); deleteRestaurant(${index})" title="Delete restaurant">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Show meal details modal
function showMealDetails(mealName) {
    const meal = mealData[mealName];
    document.getElementById('detailMealName').textContent = meal.name;
    
    let ingredientBreakdown = '';
    const categories = ['meat', 'produce', 'dairy', 'frozen', 'pantry'];
    const categoryNames = {
        meat: 'Meat & Seafood',
        produce: 'Produce',
        dairy: 'Dairy & Bread', 
        frozen: 'Frozen',
        pantry: 'Pantry & Condiments'
    };
    
    categories.forEach(category => {
        if (meal[category] && meal[category].length > 0) {
            ingredientBreakdown += `
                <div class="ingredient-category">
                    <h6>${categoryNames[category]}</h6>
                    <ul class="ingredient-list">
                        ${meal[category].map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    });
    
    const categoryBadge = meal.category === 'date-night' ? '<span class="category-badge">Date Night Special</span>' : '';
    
    document.getElementById('detailMealInfo').innerHTML = `
        <div class="meal-stats">
            <div class="stat-item">
                <span>Made <strong>${meal.count} times</strong></span>
            </div>
            <div class="stat-item">
                <span>Last made: <strong>${meal.lastMade ? new Date(meal.lastMade + 'T12:00:00').toLocaleDateString() : 'Never'}</strong></span>
            </div>
            ${categoryBadge ? `<div class="stat-item">${categoryBadge}</div>` : ''}
        </div>
        <div class="ingredients-breakdown">
            <h5>Ingredients by Store Section</h5>
            ${ingredientBreakdown}
        </div>
    `;
    document.getElementById('detailModal').classList.add('active');
}

// Log meal as made today
function logMeal(mealName) {
    const today = new Date().toISOString().split('T')[0];
    mealData[mealName].lastMade = today;
    mealData[mealName].count++;
    
    // Add to activity log
    activityLog.unshift({
        date: today,
        meal: mealName,
        action: 'Made'
    });
    
    // Keep only last 20 activities
    activityLog = activityLog.slice(0, 20);
    
    saveData();
    updateStats();
    renderMeals();
    renderRestaurants();
    renderQuickLog();
    renderActivity();
}

// Render week plan
function renderWeekPlan() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    days.forEach(day => {
        const slot = document.querySelector(`[data-day="${day}"] .meal-slot`);
        const meal = weekPlan[day];
        
        if (meal) {
            slot.innerHTML = `<strong>${meal}</strong>`;
            slot.classList.add('filled');
        } else {
            slot.innerHTML = '<span class="placeholder">Tap to add meal</span>';
            slot.classList.remove('filled');
        }
        
        slot.onclick = () => showMealSelector(day);
    });
}

// Show meal selector modal
function showMealSelector(day) {
    currentModalTarget = day;
    const container = document.getElementById('modalMealsList');
    const modalActions = document.getElementById('modalActions');
    const modalTitle = document.getElementById('modalMealTitle');
    
    // Check if day already has a meal
    const existingMeal = weekPlan[day];
    
    if (existingMeal) {
        // Show remove option for existing meal
        modalTitle.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)} - ${existingMeal}`;
        container.innerHTML = `
            <div class="quick-log-item">
                <strong>Current meal: ${existingMeal}</strong>
            </div>
        `;
        modalActions.style.display = 'block';
    } else {
        // Show meal selection including Date Night option
        modalTitle.textContent = `Select Meal for ${day.charAt(0).toUpperCase() + day.slice(1)}`;
        container.innerHTML = `
            <div class="quick-log-item" onclick="addMealToPlan('${day}', 'Date Night')" style="background: var(--primary-light); border-color: var(--primary-color);">
                <strong>🌹 Date Night</strong>
                <small style="display: block; margin-top: 0.5rem; opacity: 0.8;">Go to a restaurant</small>
            </div>
            ${Object.values(mealData).sort((a, b) => a.name.localeCompare(b.name)).map(meal => `
                <div class="quick-log-item" onclick="addMealToPlan('${day}', '${meal.name}')">
                    ${meal.name}
                </div>
            `).join('')}
        `;
        modalActions.style.display = 'none';
    }
    
    document.getElementById('mealModal').classList.add('active');
}

// Add meal to weekly plan
function addMealToPlan(day, mealName) {
    weekPlan[day] = mealName;
    saveData();
    renderWeekPlan();
    closeModal();
}

// Generate shopping list organized by store sections
function generateShoppingList() {
    const plannedMeals = Object.values(weekPlan).filter(meal => meal);
    const selectedStore = document.getElementById('storeSelector').value;
    
    if (plannedMeals.length === 0) {
        document.getElementById('shoppingList').innerHTML = '<p>Add meals to your weekly plan first!</p>';
        return;
    }
    
    const shoppingCategories = {
        meat: new Set(),
        produce: new Set(),
        dairy: new Set(),
        frozen: new Set(),
        pantry: new Set()
    };
    
    const storeNotes = [];
    
    plannedMeals.forEach(mealName => {
        const meal = mealData[mealName];
        if (meal) {
            // Add ingredients from each category
            Object.keys(shoppingCategories).forEach(category => {
                if (meal[category]) {
                    meal[category].forEach(ingredient => {
                        shoppingCategories[category].add(ingredient);
                    });
                }
            });
            
            // Collect store-specific notes
            if (selectedStore && meal.storeNotes && meal.storeNotes[selectedStore]) {
                storeNotes.push({
                    meal: meal.name,
                    note: meal.storeNotes[selectedStore]
                });
            }
        }
    });
    
    const categoryNames = {
        meat: 'Meat & Seafood',
        produce: 'Produce',
        dairy: 'Dairy & Bread',
        frozen: 'Frozen',
        pantry: 'Pantry & Condiments'
    };
    
    let shoppingHTML = `<h4>Shopping List for This Week</h4>`;
    
    if (selectedStore) {
        shoppingHTML += `<div class="store-header"><h5>${selectedStore} - Specific Recommendations</h5></div>`;
    }
    
    Object.keys(shoppingCategories).forEach(category => {
        const items = Array.from(shoppingCategories[category]);
        if (items.length > 0) {
            shoppingHTML += `
                <div class="shopping-category">
                    <h5>${categoryNames[category]}</h5>
                    <ul>
                        ${items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    });
    
    // Add store-specific notes
    if (storeNotes.length > 0) {
        shoppingHTML += `
            <div class="store-notes">
                <h5>${selectedStore} Tips</h5>
                <div class="notes-list">
                    ${storeNotes.map(note => `
                        <div class="store-note">
                            <strong>${note.meal}:</strong> ${note.note}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    if (Object.values(shoppingCategories).every(category => category.size === 0)) {
        shoppingHTML += '<p>No ingredients needed!</p>';
    }
    
    document.getElementById('shoppingList').innerHTML = shoppingHTML;
    
    // Show share button if there's content to share
    const shareButton = document.getElementById('shareShoppingList');
    if (Object.values(shoppingCategories).some(category => category.size > 0)) {
        shareButton.style.display = 'inline-block';
    } else {
        shareButton.style.display = 'none';
    }
}

// Render quick log
function renderQuickLog() {
    const container = document.getElementById('quickLogList');
    
    // Show meals sorted by last made (oldest first)
    let sortedMeals = Object.values(mealData).sort((a, b) => {
        if (!a.lastMade && !b.lastMade) return 0;
        if (!a.lastMade) return -1;
        if (!b.lastMade) return 1;
        return new Date(a.lastMade) - new Date(b.lastMade);
    });
    
    container.innerHTML = sortedMeals.slice(0, 10).map(meal => {
        const daysSince = meal.lastMade ? 
            Math.floor((Date.now() - new Date(meal.lastMade)) / (1000 * 60 * 60 * 24)) : null;
        const lastMadeText = daysSince === null ? 'Never made' : 
            daysSince === 0 ? 'Today' : `${daysSince} days ago`;
        
        return `
            <div class="quick-log-item" onclick="logMeal('${meal.name}')">
                <strong>${meal.name}</strong><br>
                <small>${lastMadeText}</small>
            </div>
        `;
    }).join('');
}

// Render recent activity
function renderActivity() {
    const container = document.getElementById('recentActivity');
    
    if (activityLog.length === 0) {
        container.innerHTML = '<div class="activity-item">No recent activity</div>';
        return;
    }
    
    container.innerHTML = activityLog.slice(0, 5).map(activity => {
        // Fix timezone issue by parsing date properly
        const activityDate = new Date(activity.date + 'T12:00:00');
        return `
            <div class="activity-item">
                ${activity.action} <strong>${activity.meal}</strong> on ${activityDate.toLocaleDateString()}
            </div>
        `;
    }).join('');
}

// Close modal
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    currentModalTarget = null;
}

// Add new meal functionality
function addNewMeal() {
    const name = document.getElementById('mealName').value.trim();
    const category = document.getElementById('mealCategory').value;
    
    if (!name) {
        alert('Please fill in meal name');
        return;
    }
    
    // Check if meal already exists
    if (mealData[name]) {
        alert('A meal with this name already exists');
        return;
    }
    
    // Get ingredients from textareas
    const meat = document.getElementById('meatIngredients').value
        .split(',').map(item => item.trim()).filter(item => item);
    const produce = document.getElementById('produceIngredients').value
        .split(',').map(item => item.trim()).filter(item => item);
    const dairy = document.getElementById('dairyIngredients').value
        .split(',').map(item => item.trim()).filter(item => item);
    const frozen = document.getElementById('frozenIngredients').value
        .split(',').map(item => item.trim()).filter(item => item);
    const pantry = document.getElementById('pantryIngredients').value
        .split(',').map(item => item.trim()).filter(item => item);
    
    // Create ingredients summary
    const allIngredients = [...meat, ...produce, ...dairy, ...frozen, ...pantry];
    const ingredients = allIngredients.join(', ');
    
    // Create new meal object
    const newMeal = {
        name: name,
        ingredients: ingredients,
        meat: meat,
        produce: produce,
        dairy: dairy,
        frozen: frozen,
        pantry: pantry,
        category: category,
        count: 0,
        lastMade: null
    };
    
    // Add to meals array and mealData
    meals.push(newMeal);
    mealData[name] = newMeal;
    
    // Save and refresh
    saveData();
    updateStats();
    renderMeals();
    renderRestaurants();
    
    // Clear form and switch to meals tab
    clearAddMealForm();
    switchTab('meals');
    
    alert(`Added "${name}" to your meal list!`);
}

function clearAddMealForm() {
    document.getElementById('addMealForm').reset();
}

// Remove meal from weekly plan
function removeMealFromPlan(day) {
    delete weekPlan[day];
    saveData();
    renderWeekPlan();
}

// Show quick shopping modal
function showQuickShoppingModal() {
    const container = document.getElementById('quickShoppingMealsList');
    
    container.innerHTML = Object.values(mealData).sort((a, b) => a.name.localeCompare(b.name)).map(meal => `
        <div class="quick-shopping-meal-item" onclick="toggleMealSelection(this, '${meal.name}')">
            <input type="checkbox" id="meal-${meal.name.replace(/\s+/g, '-')}" />
            <label for="meal-${meal.name.replace(/\s+/g, '-')}">${meal.name}</label>
        </div>
    `).join('');
    
    document.getElementById('quickShoppingModal').classList.add('active');
}

// Toggle meal selection in quick shopping
function toggleMealSelection(element, mealName) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle('selected', checkbox.checked);
}

// Generate shopping list from selected meals
function generateSelectedShoppingList() {
    const selectedMeals = [];
    const checkboxes = document.querySelectorAll('#quickShoppingMealsList input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const mealItem = checkbox.closest('.quick-shopping-meal-item');
        const mealName = mealItem.querySelector('label').textContent;
        selectedMeals.push(mealName);
    });
    
    if (selectedMeals.length === 0) {
        alert('Please select at least one meal');
        return;
    }
    
    generateShoppingListFromMeals(selectedMeals);
    closeModal();
}

// Generate shopping list from specific meals
function generateShoppingListFromMeals(mealNames) {
    const selectedStore = document.getElementById('storeSelector').value;
    
    const shoppingCategories = {
        meat: new Set(),
        produce: new Set(),
        dairy: new Set(),
        frozen: new Set(),
        pantry: new Set()
    };
    
    const storeNotes = [];
    
    mealNames.forEach(mealName => {
        const meal = mealData[mealName];
        if (meal) {
            // Add ingredients from each category
            Object.keys(shoppingCategories).forEach(category => {
                if (meal[category]) {
                    meal[category].forEach(ingredient => {
                        shoppingCategories[category].add(ingredient);
                    });
                }
            });
            
            // Collect store-specific notes
            if (selectedStore && meal.storeNotes && meal.storeNotes[selectedStore]) {
                storeNotes.push({
                    meal: meal.name,
                    note: meal.storeNotes[selectedStore]
                });
            }
        }
    });
    
    const categoryNames = {
        meat: 'Meat & Seafood',
        produce: 'Produce',
        dairy: 'Dairy & Bread',
        frozen: 'Frozen',
        pantry: 'Pantry & Condiments'
    };
    
    let shoppingHTML = `<h4>Shopping List - Selected Meals</h4>`;
    shoppingHTML += `<p><strong>Meals:</strong> ${mealNames.join(', ')}</p>`;
    
    if (selectedStore) {
        shoppingHTML += `<div class="store-header"><h5>${selectedStore} - Specific Recommendations</h5></div>`;
    }
    
    Object.keys(shoppingCategories).forEach(category => {
        const items = Array.from(shoppingCategories[category]);
        if (items.length > 0) {
            shoppingHTML += `
                <div class="shopping-category">
                    <h5>${categoryNames[category]}</h5>
                    <ul>
                        ${items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    });
    
    // Add store-specific notes
    if (storeNotes.length > 0) {
        shoppingHTML += `
            <div class="store-notes">
                <h5>${selectedStore} Tips</h5>
                <div class="notes-list">
                    ${storeNotes.map(note => `
                        <div class="store-note">
                            <strong>${note.meal}:</strong> ${note.note}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    if (Object.values(shoppingCategories).every(category => category.size === 0)) {
        shoppingHTML += '<p>No ingredients needed!</p>';
    }
    
    document.getElementById('shoppingList').innerHTML = shoppingHTML;
    
    // Show share button if there's content to share
    const shareButton = document.getElementById('shareShoppingList');
    if (Object.values(shoppingCategories).some(category => category.size > 0)) {
        shareButton.style.display = 'inline-block';
    } else {
        shareButton.style.display = 'none';
    }
}

// Add new restaurant
function addNewRestaurant() {
    const name = document.getElementById('restaurantName').value.trim();
    const cuisine = document.getElementById('restaurantCuisine').value.trim();
    const location = document.getElementById('restaurantLocation').value.trim();
    const notes = document.getElementById('restaurantNotes').value.trim();
    
    if (!name) {
        alert('Please enter restaurant name');
        return;
    }
    
    const newRestaurant = {
        name,
        cuisine,
        location,
        notes,
        lastVisited: null,
        visitCount: 0
    };
    
    restaurants.push(newRestaurant);
    saveData();
    renderRestaurants();
    clearRestaurantForm();
    
    alert(`Added "${name}" to your restaurants!`);
}

// Clear restaurant form
function clearRestaurantForm() {
    document.getElementById('addRestaurantForm').reset();
}

// Visit restaurant (mark as visited today)
function visitRestaurant(index) {
    const today = new Date().toISOString().split('T')[0];
    restaurants[index].lastVisited = today;
    restaurants[index].visitCount++;
    
    // Add to activity log
    activityLog.unshift({
        date: today,
        meal: `${restaurants[index].name} (Restaurant)`,
        action: 'Visited'
    });
    
    // Keep only last 20 activities
    activityLog = activityLog.slice(0, 20);
    
    saveData();
    renderRestaurants();
    renderActivity();
    
    alert(`Marked "${restaurants[index].name}" as visited today!`);
}

// Delete restaurant
function deleteRestaurant(index) {
    const restaurant = restaurants[index];
    if (confirm(`Delete "${restaurant.name}" from your restaurants?`)) {
        restaurants.splice(index, 1);
        saveData();
        renderRestaurants();
    }
}

// Share shopping list via text
function shareShoppingList() {
    const shoppingListElement = document.getElementById('shoppingList');
    if (!shoppingListElement.innerHTML || shoppingListElement.innerHTML.includes('No ingredients needed!')) {
        alert('Generate a shopping list first!');
        return;
    }
    
    // Extract text content from the shopping list
    let shareText = '🛒 GROCERY LIST\n\n';
    
    // Get the planned meals or selected meals info
    const plannedMeals = Object.values(weekPlan).filter(meal => meal);
    if (plannedMeals.length > 0) {
        shareText += `📅 This Week's Meals:\n${plannedMeals.join(', ')}\n\n`;
    }
    
    // Extract shopping categories
    const categories = shoppingListElement.querySelectorAll('.shopping-category');
    categories.forEach(category => {
        const categoryTitle = category.querySelector('h5').textContent;
        const items = Array.from(category.querySelectorAll('li')).map(li => li.textContent);
        
        shareText += `${getCategoryEmoji(categoryTitle)} ${categoryTitle.toUpperCase()}:\n`;
        items.forEach(item => {
            shareText += `• ${item}\n`;
        });
        shareText += '\n';
    });
    
    // Add store notes if available
    const storeNotes = shoppingListElement.querySelector('.store-notes');
    if (storeNotes) {
        const storeTitle = storeNotes.querySelector('h5').textContent;
        shareText += `💡 ${storeTitle}:\n`;
        const notes = storeNotes.querySelectorAll('.store-note');
        notes.forEach(note => {
            shareText += `• ${note.textContent}\n`;
        });
        shareText += '\n';
    }
    
    shareText += '📱 Generated by Austin & Lexie\'s Meal Planner';
    
    // Use Web Share API if available (mobile), otherwise copy to clipboard
    if (navigator.share) {
        navigator.share({
            title: 'Grocery Shopping List',
            text: shareText
        }).then(() => {
            console.log('Shared successfully');
        }).catch((error) => {
            console.log('Error sharing:', error);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

// Fallback share method - copy to clipboard and show options
function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Shopping list copied to clipboard! You can now paste it into any messaging app.');
        }).catch(() => {
            showTextModal(text);
        });
    } else {
        showTextModal(text);
    }
}

// Show text in a modal for manual copying
function showTextModal(text) {
    const modalHTML = `
        <div id="shareModal" class="modal active">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Share Shopping List</h3>
                    <button class="close-modal" onclick="closeShareModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Copy the text below and paste it into your messaging app:</p>
                    <textarea id="shareText" readonly style="width: 100%; height: 300px; font-family: monospace; font-size: 14px; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">${text}</textarea>
                    <div class="modal-actions" style="margin-top: 15px;">
                        <button onclick="selectAndCopy()" class="primary-btn">Select All & Copy</button>
                        <button onclick="closeShareModal()" class="secondary-btn">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing share modal if any
    const existingModal = document.getElementById('shareModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Helper function to get emoji for category
function getCategoryEmoji(categoryName) {
    const emojiMap = {
        'Meat & Seafood': '🥩',
        'Produce': '🥬',
        'Dairy & Bread': '🥛',
        'Frozen': '🧊',
        'Pantry & Condiments': '🥫'
    };
    return emojiMap[categoryName] || '📋';
}

// Close share modal
function closeShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.remove();
    }
}

// Select all text and copy
function selectAndCopy() {
    const textarea = document.getElementById('shareText');
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        alert('Shopping list copied to clipboard!');
        closeShareModal();
    } catch (err) {
        alert('Please manually select and copy the text above.');
    }
}
