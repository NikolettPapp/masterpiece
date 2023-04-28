from django.urls import path, include
from .views import getCommand, getDevices 

urlpatterns = [
    path('', getCommand),
    path('devices/', getDevices),
]
