from django.urls import path
from . import views

urlpatterns = [
    path('message/', views.get_message),
    path('data/', views.get_data),
]