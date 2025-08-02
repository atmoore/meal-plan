# Dinner Planner PWA

A Progressive Web App for tracking your dinner meals and weekly planning.

## Quick Setup

### Option 1: Python Server (Easiest)
1. Open Terminal and navigate to this folder:
   ```bash
   cd ~/Desktop/dinner-planner-pwa
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your phone browser and go to: `http://YOUR_COMPUTER_IP:8000`
   - Find your computer's IP: `ifconfig | grep "inet " | grep -v 127.0.0.1`

### Option 2: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Access from your phone using the provided URL

## Installing on Your Phone

### iPhone:
1. Open the app in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Tap "Add"

### Android:
1. Open the app in Chrome
2. Look for "Add to Home Screen" prompt, or
3. Tap menu (⋮) → "Add to Home Screen"

## Features

- **Meals Tab:** Browse all meals, see which you haven't made recently
- **This Week Tab:** Plan your weekly meals and generate shopping lists
- **Quick Log Tab:** One-tap logging when you make a meal

## Usage

1. **Track meals:** Tap any meal → "Made This Today"
2. **Plan weekly:** Go to "This Week" tab → tap days → select meals
3. **Shopping list:** After planning, tap "Generate Shopping List"
4. **Find variety:** Meals you haven't made recently appear at the top

Data saves automatically to your phone's storage!