# Fall 2020 Principles of Databases — Final Project

* **Do not start this project until you have read these instructions carefully.**  
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**  

## ❖・Introduction・❖
For the final project, you’ll convert the XML/JSON from assignment 2 into a MongoDB database for this assignment. For obvious reasons, ignore any directions from assignment 2 that relate to visual elements, such as CSS and references to a browser.

---

## ❖・Rules・❖
* Name the collection as you see fit.
* Similarly, name the database as you see fit.
* Don’t mix tabs with spaces; choose one or the other.
* If using spaces, indent by 2.
* Copy and translate all entries used to populate the original MySQL database.
* Create MongoDB commands to do the following:
   + Populate the database with 10 students as follows:
      * 5 students should have a GPA greater than 3.5
      * The remaining students should have a GPA between 1.0 and 3.5, inclusive
      * At least 2 students should have an advisor named “Donald Knuth”; the remaining students can have anyone as an advisor
      * One of Donald Knuth’s students must have a GPA greater than 3.5
      * No one should be withdrawn
   + Retrieve all the info from students with a GPA greater than 3.5
   + Update the status of the student advised by Donald Knuth with the highest GPA to “graduated”
   + Update the status of the student with the lowest GPA to “withdrawn”
* Export the database as BSON using the `mongodump` command. Ensure the database’s BSON file is saved to the `dump` folder.
* Include all your commands in `commands.json`.

---

## ❖・Due・❖
Tuesday, 15 December 2020, at 10:00 PM.

---

## ❖・Grading・❖
| Item                                   | Points |
|----------------------------------------|:------:|
| *Similarity to original JSON project*  | `25`   |
| *Implementation quality*               | `25`   |
| *Code Quality*                         | `25`   |
| *Following Instructions*               | `25`   |

---

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**NO late submissions will be accepted.**

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
