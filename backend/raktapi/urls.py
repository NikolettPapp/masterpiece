from django.urls import path, include
from .views import getCommand, getDevices 
from .views import ProductList, ProductDetail, ProductGroupList, ProductGroupDetail, ProductInGroupList


urlpatterns = [
    path('', getCommand),
    path('devices/', getDevices),
    path('products/', ProductList.as_view()),
    path('products/<int:ean>/', ProductDetail.as_view()),
    path('groups/', ProductGroupList.as_view()),
    path('groups/<int:id>/', ProductGroupDetail.as_view()),
    path('groups/<int:pk>/products/', ProductInGroupList.as_view()),
]
