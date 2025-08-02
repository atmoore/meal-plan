// Dinner data with comprehensive ingredients organized by store section
const meals = [
    { 
        name: "Steak & Potatoes", 
        ingredients: "Ribeye or sirloin steak, russet potatoes, fresh rosemary, garlic, butter, olive oil",
        meat: ["Ribeye or sirloin steak"],
        produce: ["Russet potatoes", "Fresh rosemary", "Garlic"],
        dairy: ["Butter"],
        pantry: ["Olive oil", "Salt", "Black pepper"],
        prepTime: 30,
        category: "date-night",
        storeNotes: {
            "Fresh Market": "Best steaks - prime grade ribeye",
            "Publix": "Good quality, often on BOGO",
            "Sprouts": "Grass-fed options available",
            "Walmart": "Great Value steaks, budget-friendly",
            "Target": "Good & Gather, decent quality"
        }
    },
    { 
        name: "Panko Chicken", 
        ingredients: "Chicken breast, panko breadcrumbs, eggs, flour, parmesan cheese, lemon",
        meat: ["Chicken breast"],
        produce: ["Lemon", "Garlic"],
        dairy: ["Eggs", "Parmesan cheese"],
        pantry: ["Panko breadcrumbs", "All-purpose flour", "Olive oil", "Salt", "Black pepper", "Garlic powder"],
        prepTime: 25 
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
        ingredients: "Frozen orange chicken",
        frozen: ["Trader Joe's Mandarin Orange Chicken", "Target Good & Gather Orange Chicken", "Walmart Great Value Orange Chicken"],
        produce: ["Green onions", "Sesame seeds (optional)"],
        pantry: ["White rice", "Jasmine rice"],
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
        ingredients: "Chicken breast, fresh spinach, artichoke hearts, cream cheese, mozzarella, parmesan, garlic",
        meat: ["Chicken breast"],
        produce: ["Fresh spinach", "Garlic"],
        dairy: ["Cream cheese", "Mozzarella cheese", "Parmesan cheese"],
        pantry: ["Artichoke hearts (canned)", "Olive oil", "Salt", "Black pepper", "Italian seasoning"],
        prepTime: 30 
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
        name: "Healthy Pasta", 
        ingredients: "Whole wheat pasta, cherry tomatoes, fresh spinach, fresh basil, garlic, parmesan cheese, olive oil, lemon",
        meat: [],
        produce: ["Cherry tomatoes", "Fresh spinach", "Fresh basil", "Garlic", "Lemon"],
        dairy: ["Parmesan cheese"],
        pantry: ["Whole wheat pasta", "Olive oil", "Red pepper flakes", "Salt", "Black pepper"],
        prepTime: 15 
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
        name: "BBQ Chicken Sweet Bowls", 
        ingredients: "Chicken breast, sweet potatoes, quinoa, corn, black beans, avocado, lime, BBQ sauce",
        meat: ["Chicken breast"],
        produce: ["Sweet potatoes", "Corn", "Avocado", "Lime", "Cilantro"],
        dairy: [],
        pantry: ["Quinoa", "Black beans (canned)", "BBQ sauce", "Cumin", "Paprika", "Olive oil", "Salt", "Black pepper"],
        prepTime: 30 
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
        ingredients: "Ground beef, romaine lettuce, tomatoes, cheese, onion, pickles, sweet potatoes, special sauce",
        meat: ["Ground beef (80/20)"],
        produce: ["Romaine lettuce", "Tomatoes", "Onion", "Sweet potatoes"],
        dairy: ["Cheese slices"],
        pantry: ["Pickles", "Ketchup", "Mayonnaise", "Mustard", "Worcestershire sauce", "Olive oil", "Salt", "Black pepper"],
        prepTime: 20 
    }
];

// App state
let mealData = {};
let weekPlan = {};
let activityLog = [];
let currentModalTarget = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    initializeApp();
    updateStats();
    renderMeals();
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
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('dinnerPlannerMeals', JSON.stringify(mealData));
    localStorage.setItem('dinnerPlannerWeek', JSON.stringify(weekPlan));
    localStorage.setItem('dinnerPlannerActivity', JSON.stringify(activityLog));
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
    
    // Filter and sort meals
    let filteredMeals = Object.values(mealData).filter(meal => {
        const matchesSearch = meal.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || meal.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    // Sort by last made (oldest first)
    filteredMeals.sort((a, b) => {
        if (!a.lastMade && !b.lastMade) return 0;
        if (!a.lastMade) return -1;
        if (!b.lastMade) return 1;
        return new Date(a.lastMade) - new Date(b.lastMade);
    });
    
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
                <span>Last made: <strong>${meal.lastMade ? new Date(meal.lastMade).toLocaleDateString() : 'Never'}</strong></span>
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
    renderQuickLog();
    renderActivity();
}

// Render week plan
function renderWeekPlan() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
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
    
    container.innerHTML = Object.values(mealData).map(meal => `
        <div class="quick-log-item" onclick="addMealToPlan('${day}', '${meal.name}')">
            ${meal.name}
        </div>
    `).join('');
    
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
    
    container.innerHTML = activityLog.slice(0, 5).map(activity => `
        <div class="activity-item">
            ${activity.action} <strong>${activity.meal}</strong> on ${new Date(activity.date).toLocaleDateString()}
        </div>
    `).join('');
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
    
    // Clear form and switch to meals tab
    clearAddMealForm();
    switchTab('meals');
    
    alert(`Added "${name}" to your meal list!`);
}

function clearAddMealForm() {
    document.getElementById('addMealForm').reset();
}