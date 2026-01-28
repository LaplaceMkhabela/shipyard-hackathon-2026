**Considering User Needs**

I'm currently focused on dissecting the initial brief. Simon's preferences are key: he values productivity, design, and system building. This implies the app's need for efficiency, good aesthetics, and a logical structure. I am now refining these needs, as they are crucial for setting the app's direction.


**Outlining the Scope**

I'm now establishing the basic framework for the app, beginning with the name "Momentum," which aligns with the user's focus. The primary objective is to get coaching to more users. This includes crucial user actions, such as browsing, creating, and sharing AI coaches. I'm prioritizing immediate chat capabilities and a straightforward user experience.


**Detailing Functional Needs**

I'm presently building out the functional requirements. I'm focusing on user onboarding, and have decided to utilize streamlined signup via Apple/Google SSO and quick entry to the primary feed. Context setting will be introduced during the chat interaction. Then, in core interaction, the app will need a standard chat interface with fast response times. I am also planning on including the ability to save or export chat snippets.


**Developing Initial Requirements**

I'm now formulating a product requirements document. I'm leveraging the gathered information. Streamlined signup and a focus on essential chat functions are now the priority. I'm categorizing features like "browse," "create," and "share" AI coaches to build a clear functional outline. The emphasis is on a user-friendly and efficient mobile experience.


**Finalizing Document Details**

I am now focusing on refining the PRD. I am prioritizing onboarding and chat. I'm carefully constructing the User Flows section to ensure a smooth, user-friendly experience. I am drafting descriptions for each feature, concentrating on how to make them clear and concise.


**Refining Requirements Details**

I am now organizing the feature requirements into a structured product requirements document. I am focusing on detailed onboarding, the browse feed, chat interface, personal context features, the creation of coaches, and user sharing options. I am also working to ensure that the document follows a logical structure.


This requirements file outlines the scope, goals, and necessary features for "Project Catalyst" (placeholder name), a minimalist AI coaching mobile application aimed at an audience focused on productivity and design.

**NOTE:** The phrase "Eitan Bernath: From saved recipe to dinner made" at the end of the brief appears to be extraneous text unrelated to the core requirements for Simon's app and has been disregarded.

---

# Product Requirements Document (PRD) - Project Catalyst

| **Project Name** | Project Catalyst (Internal Placeholder) |
| :--- | :--- |
| **Target Platform** | Mobile (iOS & Android) |
| **Primary Goal** | Democratize access to high-quality coaching via a minimalist AI interface. |
| **Target Audience** | Simon’s audience: Productivity enthusiasts, system builders, and design-conscious professionals. |
| **Key Design Principle** | "Zero-Friction to Value." No complex setups; guidance is offered just-in-time, not upfront. |

## 1. Executive Summary
Project Catalyst defines a mobile application that serves as a marketplace and creation engine for specialized AI coaches. The app must appeal to a discerning audience that values speed, aesthetics, and utility. The user experience must be frictionless, allowing a user to download the app and start receiving coaching within seconds.

## 2. User Personas

| Persona | Description | Key Motivation |
| :--- | :--- | :--- |
| **The Optimizer (Primary User)** | Busy professional, already uses tools like Notion/Obsidian. Values efficiency above all. | Wants immediate, actionable advice related to their specific goals without navigating complex menus. |
| **The System Builder (Secondary User)** | An expert or tinkerer who loves codifying knowledge. | Wants to create highly specialized AI agents based on their own workflows or philosophies to use or share with others. |

## 3. High-Level User Flow (The "Zero-Friction" Path)


1.  **Download & Open:** User opens app.
2.  **Instant Browse:** User is immediately presented with a clean feed of featured AI coaches. (No forced signup yet).
3.  **Selection:** User taps a coach that looks interesting (e.g., "Deep Work Accountability Coach").
4.  **The Hook (First Chat):** User enters the chat interface and types a problem.
5.  **Just-in-Time Authentication:** Before the AI responds to the *first* message, a subtle pop-up requests instant authentication (e.g., "Teach me your style by signing in with Apple/Google").
6.  **Engagement:** The chat continues.
7.  **Progressive Context:** If the AI needs more info to give better advice, it asks the user to briefly update their "Context Profile" within the chat flow.

## 4. Functional Requirements

### FR1: Onboarding & Authentication
**Goal:** Minimize time to first chat.
*   **R1.1:** The app must allow browsing coaches without an account.
*   **R1.2:** Account creation must be restricted to single-tap SSO (Sign in with Apple, Sign in with Google). Email/Password signup should be deprioritized or hidden to reduce friction.
*   **R1.3:** There shall be no initial "wizard," survey, or lengthy profile setup upon launch.

### FR2: The Coach Feed (Browse)
**Goal:** Present options cleanly and aesthetically.
*   **R2.1:** The home screen is a minimalist feed of available AI coaches.
*   **R2.2:** Coach cards must be visually uncluttered, displaying only: Coach Name, One-sentence specialty/hook, and Creator Name.
*   **R2.3:** Users can perform a simple keyword search to find coaches (e.g., "writing," "finance," "fitness").

### FR3: Core Interaction (Chat)
**Goal:** A fast, familiar, productivity-focused chat experience.
*   **R3.1:** The interface needs to resemble standard modern messaging apps (clean bubbles, ample whitespace).
*   **R3.2:** Latency between user input and AI response must be minimized (streaming responses preferred to reduce perceived wait time).
*   **R3.3:** Users must be able to easily copy text blocks (for moving advice into their own productivity systems).

### FR4: Personal Context & Values
**Goal:** Personalize the AI without overwhelming the user.
*   **R4.1 - The Context Profile:** Users have a single, hidden "Context Profile" accessible via settings. This may contain fields like: "Current Focus Goal," "Core Values," and "Tech Stack/Constraints."
*   **R4.2 - Progressive Disclosure:** Users should not be forced to fill this out. The AI coaches should instead be prompted to ask for this information naturally during conversation if it is missing and necessary for good advice.
*   **R4.3:** Once entered, all AI coaches on the platform have read-access to this context profile to ensure consistent advice across different agents.

### FR5: Coach Creation Engine
**Goal:** Allow system builders to easily codify expertise.
*   **R5.1:** A dedicated "Create" tab in the navigation.
*   **R5.2:** The creation process must be a simple form, not a complex code interface. Required fields: icon selection, coach name, specialty description, and "System Instructions" (the prompt that defines the AI's behavior).
*   **R5.3:** Creators should be able to set a "Voice/Tone" (e.g., Socratic, encouraging, drill sergeant, minimalist).

### FR6: Sharing Mechanisms
**Goal:** Virality and easy distribution of systems.
*   **R6.1:** Every coach needs a unique, shareable deep link.
*   **R6.2:** Tapping a shared link on a mobile device should open the app directly to that coach's chat interface.

## 5. Non-Functional Requirements (NFRs)

### NFR1: Design & Aesthetics
*   The app must strictly adhere to a minimalist design language (e.g., heavy use of clean typography, black/white palette with one accent color, ample负spaces). It needs to feel "premium" and uncluttered.

### NFR2: Performance
*   The app launch time to interactive state should be under 2 seconds.
*   AI chat response streaming should begin within 1-2 seconds of submission.

### NFR3: Privacy & Security
*   User context data and chat history must be encrypted at rest and in transit.
*   The privacy policy must clearly state that chat data is processed by an LLM provider.

### NFR4: Scalability
*   The backend architecture must support rapidly scaling the number of unique AI coach definitions without performance degradation.