 # TrelloBoard – Simplified Kanban Application

**TrelloBoard** is a web application inspired by Trello that allows users to visually organize their tasks using boards, columns, and cards.  
The main goal of this project is to demonstrate efficient state management, drag-and-drop interaction, and a clean component-based structure in React.

---

## Project Objective

To develop a simplified **Trello board application** where users can manage their personal or professional tasks.

---

 ## Usage

1. Users can use the **existing boards** (e.g., "Work", "Sports", "Personal") or **create new, personalized ones**.  
   Boards can be **deleted** or **rearranged** using the **drag-and-drop** functionality.

2. When accessing a **board**, a dedicated page opens containing **three default columns**:
   - **To Do** – for tasks that need to be started;
   - **In Progress** – for tasks that are currently being worked on;
   - **Done** – for tasks that have been completed.

3. Inside each column, there is a **dedicated button** that allows the creation of a **new project**.  
   Each project can be **customized** with:
   - a **title**;
   - a **short description** of its purpose or content.

4. Each created project (card) includes **three functional buttons**:
   - **Edit** – allows editing the project title and description;
   - **Delete** – removes the project from the column;
   - **Add Tasks/Steps** – allows adding specific **tasks** to the project.

5. Each **added task** can be **edited** or **deleted** at any time.

6. The project cards can be **moved between columns** or **reordered within the same column** via the **drag-and-drop** system, making it easy to reflect the current stage of each project.

7. You can quickly and easily navigate **back to the main page** using the **“Back”** button in the navigation bar.

8. All changes are **automatically saved** to **localStorage**, with no need for confirmation.  
   This ensures that the data remains available **even after refreshing or reopening the page**.

---

## Technologies Used


**React** – main structure of the application;

**TypeScript** – strict typing for more robust code;

**TailwindCSS** – simple, consistent, and modern styling;

**DnD Kit** – implementation of drag-and-drop functionality;

**React Context** – state management for the application;

**LocalStorage** – backend simulation for data persistence;

**Vite** – fast development environment runner.

---

## Installation

1. **Clone the project**
git clone https://github.com/mihaela-1232/TrelloBoard.git

2. **Navigate to the project directory**
cd TrelloBoard

3. **Install dependencies**
pnpm install

4. **Run the application**
pnpm run dev

5. **After the server starts, access the app.**

---

## Key Technical Features

**Drag-and-drop** |	Dynamic movement of tasks between columns;

**State management** | Global data control using Context;

**Local persistence** | Automatic saving in LocalStorage;

**Board navigation** | Quick switching between different boards;

**TailwindCSS styling**	 | Simple and responsive design;

**Clear architecture** | Separate and logically structured components.

---


## Author

**Mihaela Talpa**

**github.com/mihaela-1232**
