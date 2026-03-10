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
* **Styling (`css.css` / `css2.css`):** Custom layouts for a clean, modern interface.

---

## 📂 File Directory

| File/Folder | Purpose |
| :--- | :--- |
| `index.html` | **Home Page** - Navigation to all project modules. |
| `bcdCounter.html` | BCD Counter Interface (Standard Version). |
| `bcdcounter2.html` | BCD Counter Interface (Alternative Version). |
| `script.js` | JavaScript functionality for counting and BCD logic. |
| `css.css` | Primary stylesheet for visual layout. |
| `css2.css` | Secondary stylesheet for variant designs. |
| `myslide.pptx` | Presentation detailing the project concept and technical specs. |
| `myslide/` | Directory containing supporting assets for the presentation. |

---

## ⚙️ How to Use
1.  **Launch:** Visit the [Live Link](https://samisalehin.github.io/DLD-SSD/) or open `index.html` locally.
2.  **Navigate:** Use the buttons on the home page to select **Version 1** or **Version 2**.
3.  **Interact:** Use the UI buttons to increment or reset the BCD values and watch the display update in real-time.

---

## 🔬 Technical Context: BCD to 7-Segment
Binary Coded Decimal (BCD) represents each decimal digit with four bits. To display these on a screen, the bits are decoded into a **Seven Segment Display (SSD)** pattern.



For example, the number **5** is represented as:
* **Binary:** `0101`
* **SSD Segments:** $a, c, d, f, g$ are active.

---

## 👤 Author
**Sami Salehin**
* **GitHub:** [@SamiSalehin](https://github.com/SamiSalehin)
* **Project Repository:** [DLD-SSD](https://github.com/SamiSalehin/DLD-SSD)

---
*Created for Digital Logic Design (DLD) studies.*
