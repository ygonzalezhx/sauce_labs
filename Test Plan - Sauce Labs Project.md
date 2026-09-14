# Sauce Labs project - TEST PLAN
###### 10th September 2026

OVERVIEW  
Establish an end-to-end testing strategy for the Swag Labs web application, ensuring core user journeys —from authentication through checkout—are functional, reliable, and performance-ready.

## GOALS
 1. Validate the critical end-to-end user journeys (authentication through checkout
completion)
 2. Ensure all defined user stories meet acceptance criteria without blocking defects.

---

## REFERENCES
The documents that will support the test plan are:
- Epics-US-TC - Sauce Labs project

---

## INTRODUCTION
### In-Scope vs. Out-of-Scope
**In-Scope (Functional Testing):**
* Access Management: Login (valid/invalid credentials, locked users), logout session
invalidation.
* Product Catalog: List display, sorting/filtering (A–Z, Z–A, Price low-high/high-low), item
details navigation.
* Shopping Cart: Add/Remove functionality, cart badge count updates, persistent cart state.
* Global Navigation: Side menu panel operations (All Items, About, Logout, Reset App
State).
* Checkout & Order Management: Shipping info validation, order summary calculations
(Subtotal + Tax), order confirmation flow.
* Responsive & Mobile Viewport Layout Verification: Testing UI layouts, navigation
overlay, item grids, and checkout forms across different screen widths using Chrome
DevTools' Toggle Device Toolbar.

**Out-of-Scope:**
* Non-functional performance/stress testing.
* Security penetration testing.
* Multi-user concurrent load scenarios.
* Special users (problem_user, performance_glitch_user, error_user, visual_user)
* Dynamic Catalog functionality

---

## TEST TYPES & EXECUTION APPROACH
* Manual Functional Testing: Primary method; step-by-step verification against the
acceptance criteria.
* Exploratory Testing: Edge-case exploration (e.g., direct URL access without logging in,
unusual checkout input sequences).
* Smoke Testing: Core path validation (Login -> Add Item -> Checkout -> Confirmation)
before deep execution.
* Regression Testing: Re-verifying key functional flows after bug fixes or state resets.
* Responsive Layout Testing: Utilizing Chrome DevTools (Toggle Device Toolbar) to
simulate various screen resolutions (e.g., Mobile, Tablet, Desktop). This ensures UI
elements—such as the burger menu, product cards, and cart badge counter—adapt
cleanly without clipping, broken layouts, or hidden controls across different viewports.

---

## TEST ENVIRONMENT & TOOLS
* Target Application: Desktop web browser accessing saucedemo.com.
* Browser Coverage: Google Chrome (Latest stable release).
* DevTools Utilities: Chrome DevTools — Toggle Device Toolbar for simulating multiple
display sizes (e.g., iPhone SE/12 Pro, iPad Air, standard 1080p Desktop)
* Target Viewports for Execution:
    * Mobile: 375px – 430px width (verifies burger menu behavior, single-column
inventory layout, and touch-friendly button targets)
    * Tablet: 768px – 1024px width (verifies multi-column grid scaling and checkout
form responsiveness)
    * Desktop: 1280px+ width (standard multi-column catalog view)
* Test Management Tool: Google Sheets / Markdown-based Test Case repository.
* Defect Tracking: Issue Log within portfolio documentation.

---

## ENTRY & EXIT CRITERIA
|Stage| Criteria|
|----------------:|-----------:|
|Entry Criteria| • User stories and acceptance criteria are fully defined. •Test environment URL (saucedemo.com) is accessible. • Valid test accounts (standard_user, locked_out_user) are verified.|
|Exit Criteria| • 100% execution of designed test cases mapped to the user stories. • 0 Critical or High severity defects open. • All acceptance criteria across defined modules pass validation.|

---

## TEST DELIVERABLES
* High-Level Test Plan Document (This document).
* Detailed Test Case Suite mapped to User Stories.
* Execution Log & Bug/Defect Report.
* Final QA Summary & Closure Report.
* Test scripts for automated test cases