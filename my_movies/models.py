from django.db import models

# Create your models here.
class MovieModel(models.Model):
    movie_title = models.CharField(max_length=100)
    movie_director = models.CharField(max_length=50)
    movie_genre = models.CharField(max_length=40)
    movie_year = models.IntegerField()