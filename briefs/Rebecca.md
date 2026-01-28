**Analyzing the Requirements**

I'm currently breaking down the brief, focusing on Rebecca Louise and her target audience, busy mothers. I'm starting to identify their needs and pain points, which will inform the subsequent stages. This groundwork is key for defining the project's parameters.


**Mapping the Product Scope**

I'm now clarifying the scope of the project. I've moved from the initial broad concepts towards defining the app as an educational companion. I'm considering how best to present information so that it's easy to digest and doesn't overwhelm the user.


**Structuring the User Flows**

Now, I'm concentrating on the user flows, starting with the "Quick Save" scenario. I'm focusing on simplicity and ease of navigation, ensuring the app provides immediate value for the primary persona. I'm also considering the integration of the "ladder" concept, mapping out how users can progress from quick wins to more complex financial concepts.


**Detailing the User Journeys**

I'm now focusing on user flows and functional requirements. I'm prioritizing user needs, specifically, the overwhelmed juggler's need for instant solutions. Developing features like shopping swaps and cost comparators for the "Quick Save" category. Also, I'm defining the content for the "Investing Basics" module, with short, easy-to-digest lessons.


**Structuring the Requirements**

I'm now detailing the functional and non-functional requirements. I'm focusing on the "Quick Save" and "Investing Basics" modules, and their individual components, starting with shopping swaps and the need for simple, easy-to-digest investing lessons. Also, I'm defining the necessary onboarding processes. Finally, I'm prioritizing user experience and ensuring the app is both quick and easy to use.


This requirements file is designed for an app focused on practical utility, low cognitive load, and building trust. The target audience (busy mums) means time is scarce; features must provide value in under 5 minutes.

# Product Requirements Document (PRD) - Project Name: "WalletMum" (Internal Placeholder)

| **Client / Brand** | Rebecca Louise |
| :--- | :--- |
| **Target Platform** | Mobile Application (iOS & Android) |
| **Primary Goal** | Build financial confidence in busy mums through practical, time-saving tools and approachable education. |
| **Target Audience** | "Busy Mums." Characterized by time scarcity, mental overload, and a desire for financial security but overwhelmed by traditional finance terminology. |
| **Core Design Principle** | "The 5-Minute Rule." Every interaction—whether finding a swap or learning a concept—must be actionable within 5 minutes. High utility, low jargon. |

## 1. Executive Summary
The application will serve as a practical daily financial companion, moving users from immediate anxiety relief (saving money today) to long-term confidence (understanding how to grow money tomorrow). It is not a banking app or a budgeting tracker. It is a *decision-support tool* and a *micro-education platform*.

## 2. User Personas

| Persona | The Scenario | Key Needs |
| :--- | :--- | :--- |
| **The Supermarket Sprinter** (Primary) | Currently doing the weekly shop with a toddler in the trolley. Stressed by the total at the checkout. | Needs instant price comparisons and viable "swaps" for common items without extensive research. |
| **The Late-Night Worrier** (Secondary) | Kids are finally asleep. She has some savings but knows inflation is eating it. Terrified the stock market is just gambling. | Needs approachable, jargon-free explanations of investing basics that don't make her feel unintelligent. |

## 3. High-Level User Flows

1.  **The "Smart Swap" Flow (Immediate Value):**
    *   User is at a store, looking at an expensive branded item (e.g., cleaning spray).
    *   Opens app to the "Swaps" tool.
    *   Searches "Cleaning spray" or scans a barcode (future scope).
    *   App presents 2-3 cheaper, vetted alternatives (e.g., generic brand or a DIY vinegar recipe) showing estimated savings.

2.  **The Micro-Learning Flow (Long-term Value):**
    *   User has 10 minutes while waiting in the school pickup line.
    *   Opens the "Growth Path" tab.
    *   Sees their current progress: "Level 2: Pensions explained."
    *   Watches a 3-minute video from Rebecca Louise explaining pensions simply.
    *   Answers one confidence-check question to unlock "Level 3."

## 4. Functional Requirements

### FR1: Onboarding & Identity
**Goal:** Establish an encouraging tone and identify immediate needs.
*   **FR1.1:** Friendly, conversational onboarding (Rebecca’s voice/video brand intro).
*   **FR1.2:** Simple goal selection to customize the home screen feed (e.g., "I need to free up cash weekly" vs. "I have savings and don't know what to do with them").

### FR2: Everyday Saving Tools (The "Toolkit" Tab)
**Goal:** Provide instant, actionable ways to spend less money right now.
*   **FR2.1 - The "Swap Shop" Database:** A searchable database of common expensive household purchases (groceries, cleaning, beauty) paired with cheaper, approved alternatives.
    *   * Requirement: Content team needs a CMS to easily input these swaps.
*   **FR2.2 - Unit Price Calculator:** A super-simple tool where a user inputs Price & Weight/Volume of Item A vs. Item B to instantly see which costs less per unit. (Essential for supermarket decisions).
*   **FR2.3 - Budget Batch Cooking Feed:** A curated feed of recipes selected specifically for low cost-per-serving and time efficiency.
    *   *Requirement:* Recipes must clearly display "Prep time" and "Estimated cost per serving."

### FR3: Investing Basics (The "Growth Path" Tab)
**Goal:** Remove overwhelm from investing through structured micro-learning.
*   **FR3.1 - Linear Curriculum:** Education must be presented as a numbered path (e.g., Step 1, Step 2, Step 3). Users cannot jump to complex topics (crypto/individual stocks) quickly; they must consume basics first (emergency funds, debt clearance, index funds).
*   **FR3.2 - Micro-Content format:** Lessons must be consumed in under 5 minutes. Formats: Text cards intended for quick scanning, or short (under 3 min) vertical videos from Rebecca.
*   **FR3.3 - Jargon Buster Overlay:** Tapping highlighted financial words in text (e.g., "compound interest," "ETF") should reveal a plain-English definition in a pop-up modal without leaving the lesson page.

### FR4: "Home Reno Savings" (Special Feature Module)
**Goal:** Address the specific high-cost pain point mentioned in the brief.
*   **FR4.1:** A dedicated section for larger project savings.
*   **FR4.2 - Tip Checklist:** A categorized checklist of actionable tips to lower renovation costs (e.g., "Sourcing materials," "DIY tasks vs. Pro tasks," "Timing sales").

### FR5: Motivation & "Quick Wins"
**Goal:** Maintain engagement through positive reinforcement.
*   **FR5.1 - Daily "Money Minute" Notification:** Push notification with a single, 30-second actionable tip (e.g., "Check your subscriptions today for one you don't use").

## 5. Non-Functional Requirements (NFRs)

### NFR1: Usability & Accessibility
*   **One-Handed Navigation:** Key primary navigation elements (tabs) must be easily reachable with a thumb at the bottom of the screen (crucial for mums holding children/bags).
*   **Cognitive Load:** The UI must be incredibly clean with ample white space. Avoid dense blocks of text. Text font size should be slightly larger than standard.

### NFR2: Tone Check
*   All copy must be reviewed against the brand persona: encouraging, empathetic, and practical. The app must never feel judgmental about debt or current spending habits.

### NFR3: Performance
*   The "Toolkit" features (swaps, calculator) must load and function instantly, even on spotty supermarket data connections. Offline capability for core swap text data should be considered for V2.

## 6. Out of Scope (for V1 MVP)

*   Connecting to real bank accounts (Open Banking APIs) for tracking spending. (Too much friction and security overhead for launch).
*   Barcode scanning for products (High technical overhead, manual search is sufficient for MVP).
*   A full social community forum (Moderation heavy; focus on content first).