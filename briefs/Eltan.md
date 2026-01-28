# Product Requirements Document (PRD) - CookNow

| **Project Name** | CookNow |
| :--- | :--- |
| **Client** | Eitan Bernath |
| **Target Platform** | Mobile Application (iOS & Android) |
| **Primary Goal** | Bridge the gap between recipe discovery and actual meal preparation |
| **Target Audience** | Food enthusiasts who save recipes but struggle to turn them into actual meals |
| **Core Design Principle** | "Inspiration to Table" - Simplify every step from saving a recipe to serving the dish |

## 1. Executive Summary

The CookNow application addresses the common problem of "recipe collection without action." Many food enthusiasts save recipes from various sources (social media, websites, videos) but face friction when attempting to prepare these dishes. This app streamlines the journey from recipe discovery to meal preparation by automating list creation, organizing saved recipes, and providing a clear path to cooking completion.

## 2. User Personas

| Persona | Description | Key Pain Points |
| :--- | :--- | :--- |
| **The Social Media Foodie** | Regularly saves recipe videos from TikTok, Instagram, and YouTube but rarely makes them | • Can't easily extract ingredients from videos<br>• Loses track of saved recipes across platforms |
| **The Weekend Meal Planner** | Wants to try new recipes but struggles with organizing shopping and prep | • Difficulty converting multiple recipes into a single shopping list<br>• Lacks system to track which saved recipes to make when |
| **The Cooking Novice** | Interested in cooking but intimidated by the preparation process | • Unsure how to break down recipes into manageable steps<br>• Needs guidance on prep timing and execution |

## 3. High-Level User Flows

### Flow 1: Recipe Capture & Import
1. User discovers a recipe (video, website, social post)
2. User shares link to CookNow app or uses browser extension/share sheet
3. App processes recipe, extracts ingredients, steps, and metadata
4. Recipe is stored in user's collection with source attribution

### Flow 2: Meal Planning & List Generation
1. User browses saved recipe collection
2. User selects recipes for upcoming meals (adds to "Cook Soon" queue)
3. User initiates shopping list generation
4. App generates consolidated shopping list from selected recipes
5. List is categorized by store section (produce, dairy, etc.)

### Flow 3: Cooking Execution
1. User selects recipe from "Cook Soon" queue
2. App presents prep steps with timing estimates
3. User follows guided cooking interface with timers and checkpoints
4. User marks recipe as cooked, rates experience, and adds notes

## 4. Functional Requirements

### FR1: Recipe Capture & Processing
**Goal:** Enable seamless import of recipes from diverse sources.

* **FR1.1 - Universal Import:** The app shall accept shared links from:
  * Recipe websites
  * YouTube videos
  * TikTok videos
  * Instagram posts
  * Pinterest pins
  
* **FR1.2 - Ingredient Extraction:** The system shall automatically parse ingredients from:
  * Text-based recipes (structured data from websites)
  * Video captions/descriptions (when available)
  * Audio transcripts of videos (using speech-to-text when necessary)
  
* **FR1.3 - Manual Adjustment:** Users shall be able to:
  * Edit extracted ingredients if parsing is incomplete
  * Add missing ingredients
  * Adjust quantities

### FR2: Recipe Organization
**Goal:** Create an intuitive system for managing saved recipes.

* **FR2.1 - Collection Management:** The app shall provide:
  * Default collections (Breakfast, Lunch, Dinner, Desserts, etc.)
  * Custom collection creation
  * Multi-collection tagging
  
* **FR2.2 - Cook Queue:** Users shall be able to:
  * Add recipes to a "Cook Soon" queue with intended cook dates
  * Reorder the queue via drag-and-drop
  * Receive optional reminders for queued recipes

* **FR2.3 - Search & Filter:** Users shall be able to search recipes by:
  * Ingredient inclusion/exclusion
  * Preparation time
  * Dietary restrictions
  * Source platform

### FR3: Shopping List Generation
**Goal:** Convert saved recipes into actionable shopping lists.

* **FR3.1 - List Compilation:** The system shall:
  * Generate consolidated lists from multiple recipes
  * Deduplicate ingredients
  * Suggest quantity adjustments for overlapping ingredients

* **FR3.2 - List Organization:** The list shall be organized by:
  * Store section (produce, meat, dairy, etc.)
  * Recipe association (which recipe requires which ingredient)
  * Optional priority flags for time-sensitive items

* **FR3.3 - List Export & Sharing:** Users shall be able to:
  * Export lists to native notes apps
  * Share lists via messaging/email
  * Print lists
  * Mark items as purchased in real-time

### FR4: Cooking Mode
**Goal:** Guide users through the cooking process.

* **FR4.1 - Step-by-Step Guide:** The app shall present:
  * Clear, sequential steps
  * Timers for time-sensitive steps
  * Progress tracking

* **FR4.2 - Prep Planning:** The system shall:
  * Suggest prep order for efficient cooking
  * Highlight steps that can be done in advance
  * Estimate total active and passive cooking time

* **FR4.3 - Cooking Completion:** After cooking, users shall be able to:
  * Rate the recipe
  * Add personal notes for future reference
  * Share photos of completed dishes
  * Move recipe to "Cooked" collection

### FR5: Social & Sharing Features
**Goal:** Enhance engagement through community features.

* **FR5.1 - Recipe Sharing:** Users shall be able to:
  * Share their saved recipes (including modifications) with other app users
  * Generate shareable links to recipes for non-app users

* **FR5.2 - Creator Attribution:** The app shall:
  * Maintain source attribution for all imported recipes
  * Provide links back to original content
  * Support following favorite content creators

## 5. Non-Functional Requirements

### NFR1: Performance
* The app shall process and extract recipe information from shared links within 10 seconds.
* Shopping lists shall generate within 3 seconds, even for multiple recipes.
* The app shall function offline for viewing saved recipes and previously generated shopping lists.

### NFR2: Usability
* The interface shall prioritize one-handed operation for kitchen use.
* Text shall be legible at arm's length for counter placement during cooking.
* Voice commands shall be available for hands-free operation during messy cooking steps.

### NFR3: Data Management
* Recipes shall be stored locally and synced to cloud when online.
* User data shall be backed up automatically.
* Recipe import history shall be maintained for at least 90 days.

### NFR4: Compatibility
* The app shall support deep linking with major social platforms and browsers.
* The app shall integrate with popular calendar apps for meal planning.
* The app shall provide sharing extensions compatible with iOS and Android share sheets.

## 6. MVP Feature Prioritization

### Phase 1 (MVP Launch)
* Recipe import from websites with structured data
* Basic recipe collection organization
* Simple shopping list generation
* Essential cooking mode

### Phase 2
* Video recipe processing (YouTube, TikTok)
* Advanced shopping list with store sections
* Meal planning calendar integration

### Phase 3
* Social sharing features
* Advanced cooking mode with timers and guidance
* AI-powered recommendations based on past cooking

## 7. Technical Considerations

* Natural Language Processing (NLP) required for ingredient extraction
* Video processing API integration for content analysis
* Cloud infrastructure for recipe processing and storage
* Cross-platform development framework for consistent iOS/Android experience

## 8. Success Metrics

* Number of recipes imported per user
* Conversion rate from saved recipes to generated shopping lists
* Conversion rate from shopping lists to completed meals
* User retention and frequency of app usage
* Time saved in meal planning and shopping preparation