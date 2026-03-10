# 🔢 BCD Counter Web Project (DLD-SSD)

An interactive web-based implementation of **Binary Coded Decimal (BCD)** counters. This project demonstrates how digital logic can be translated into functional web interfaces using HTML, CSS, and JavaScript, specifically focusing on **Seven Segment Display (SSD)** logic.

---

## 🚀 Live Demo
Experience the project directly in your browser:  
👉 **[View Live Project](https://samisalehin.github.io/DLD-SSD/)**

---

## 🛠️ Project Architecture

The project is structured to offer two different versions of the counter, accessible via the main landing page. 



### Core Components:
* **Main Entry (`index.html`):** The central hub linking to both counter versions.
* **Version 1 (`bcdCounter.html`):** The primary logic implementation.
* **Version 2 (`bcdcounter2.html`):** An alternative UI/UX approach for the counter.
* **Logic Engine (`script.js`):** Handles the mathematical conversion and state management.

---

## 📂 File Directory

| File/Folder | Purpose |
| :--- | :--- |
| `index.html` | **Home Page** - Navigation to all project modules. |
| `bcdCounter.html` | BCD Counter Interface (Standard Version). |
| `bcdcounter2.html` | BCD Counter Interface (Alternative Version). |
| `script.js` | JavaScript functionality for counting and BCD logic. |
| `css.css` | Primary stylesheet for visual layout. |
| `myslide.pptx` | Presentation detailing the project concept. |

---

## 🔍 Inside the Hub (index.html)

The `index.html` file acts as the dashboard for this project. It contains the navigation links to the different counter modules. Here is the core structure:

```html
<nav>
    <ul>
        <li><a href="bcdCounter.html">Go to BCD Counter v1</a></li>
        <li><a href="bcdcounter2.html">Go to BCD Counter v2</a></li>
    </ul>
</nav>
