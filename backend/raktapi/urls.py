from django.urls import path, include
from .views import getCommand

urlpatterns = [
    path('', getCommand)
]

