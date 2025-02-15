# Frontend for School Database Project




## Description 

This is a group project for a school database system, this is the frontend part created with **Next.js**. The application consists of two main features:


### Student Grades Table  
![image](https://github.com/user-attachments/assets/7c03301c-00ef-4a2c-8bce-d03f5a756c44)
   A simple and intuitive table that allows direct viewing of data from the **Marks** table (which stores student grades). The table enables easy **editing** and **deletion** of rows, providing a user-friendly interface for managing grades.


### Grade Submission Form  
![image](https://github.com/user-attachments/assets/141dcf06-0852-4035-ac28-3f712616731a)
   The second feature includes a straightforward form for adding new grades. The form is equipped with **autosuggestions** to streamline data entry and ensure accuracy.
   

## SQL Server Part
In this project we use SQL Server for our database. You can find necessary files to recreate our School Database [here](https://github.com/filipjarzyna/BD-group-project-Database).
### 
Run the [generating script](https://github.com/filipjarzyna/BD-group-project-Database/blob/main/SchoolDatabase.sql), You can use programs like SQL Server Managment Studio or Azure Data Studio. After that you should see database named 'School' appear. For frontend to work you need to create a user that will enable Next.js to create a connection with our database. 
You can use this query (change names and password):
```tsql
CREATE LOGIN YourUserName WITH PASSWORD = 'YourStrongPassword';
USE School;
CREATE USER YourUserNameForDB FOR LOGIN YourUserName;
GRANT EXECUTE TO YourUserNameForDB;
```
This should create a new user with EXECUTE privileges.
### Next.js part
To enable Next.js to connect to our database you need to save created user credentials in .env file (that you should create in place of [your.env](/your.env)).

Then you should be able to run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


