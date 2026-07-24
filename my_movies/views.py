from django.shortcuts import render
from .models import MovieModel
from .serializers import MovieSerializer
from rest_framework.views import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['POST'])
def movie_save(request):
    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=201,data=serializer.data)
    else:
        return Response(serializer.errors,status=400)
    
@api_view(['GET'])
def movie_select(request):
    movies = MovieModel.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(status=200,data=serializer.data)

@api_view(['GET'])
def movie_search(request, movie_title):
    try:
        movie = MovieModel.objects.get(movie_title=movie_title)
        serializer = MovieSerializer(movie)
        return Response(status=200, data=serializer.data)
    except MovieModel.DoesNotExist:
        return Response(status=404, data={"error": "Movie not found"})
    
@api_view(['PATCH'])
def movie_update(request, movie_title):
    try:
        movie = MovieModel.objects.get(movie_title=movie_title)
    except MovieModel.DoesNotExist:
        return Response(status=404, data={"error": "Movie not found"})
    serializer = MovieSerializer(movie, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(status=200, data=serializer.data)
    else:
        return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def movie_delete(request,movie_title):
    try:
        movie = MovieModel.objects.get(movie_title=movie_title)
    except MovieModel.DoesNotExist:
        return Response(status=404, data={"error": "Movie not found"})
    movie.delete()
    return Response(status=200)