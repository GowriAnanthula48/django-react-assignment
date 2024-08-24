from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to my Django site!")

@api_view(['GET'])
def get_message(request):
    return Response({"message": "Hey, This is from the Django backend!"})

@api_view(['GET'])
def get_data(request):
    data = {"id" : 1, "name" : "React with Django"}
    return Response(data)
