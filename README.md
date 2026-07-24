# Django React CineVault

A full-stack movie collection app with complete CRUD functionality — built with Django REST Framework, MySQL, and React.

## Features
- Add, view, search, update, and delete movies
- REST API built with Django REST Framework
- MySQL database
- React frontend with gold/dark cinema theme

## Tech Stack
**Backend:** Django, Django REST Framework, MySQL  
**Frontend:** React

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/save/` | Add a new movie |
| GET | `/select/` | Get all movies |
| GET | `/search/<title>` | Get a movie by title |
| PATCH | `/update/<title>` | Update a movie |
| DELETE | `/delete/<title>` | Delete a movie |

## Setup

### Backend
```
cd my_movies
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```
cd movie-frontend
npm install
npm start
```
## Author
Built by Praveen - [Portfolio](https://portfolio-praveen03.vercel.app) · [GitHub](https://github.com/PraveenSankar03)