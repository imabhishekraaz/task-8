# To-Do Application
A basic To-do application that perform the save,delete,and update the tasks.

---

## Features
- user registraion
- JWT based login
- Add task
- Delete task
- Update the task
- saved the hash password in the database
- get all the task

---

## Installation

clone the repository

```bash
git clone https://github.com/imabhishekraaz/todo
```

move to project
```bash
cd todo
```

install dependencies
```bash
npm install
```

run the backend
```bash
npm run start
```

---

## Envirnment variables

create '.env' file

```env
PORT=5000

MONGODB_URI=mongodb://localhost:27017/taskdb

JWT_SECRET=your_secret_key

JWT_EXPIRE=7d
```
add own mongodb url

---

# API Endpoints

## Authentication

### Register

```
POST - 'api/user/signup'
```
### Login

```
POST - 'api/user/login'
```

---

## Task

### Add task

```
POST - 'api/user/task'
```

### update task

```
PUT - 'api/user/task/:id'
```

### delete task

```
DELETE - 'api/user/task/:id'
```

### get all task

```
GET - 'api/user/tasks'
```

---

## Authentication

Pass JWT Token

```
Authorization: Bearer <token>
```

---

## Example Response

```json
{
    "success": true,
    "message": "Task created successfully"
}
```

---

## Author

**Abhishek Raj**

GitHub:[github](https://github.com/imabhishekraaz)


LinkedIn:[LinkedIn](https://www.linkedin.com/in/abhishekraz/)



