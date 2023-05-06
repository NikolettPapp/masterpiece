#A raktapi API-hoz kapcsolódó URL-ek

from django.urls import path, include
from . import views
from .views import getCommand
from .views import getDevices 
from .views import ProductList
from .views import ProductGroupDetail
from .views import ProductGroupList
from .views import ProductGroupDetail
from .views import ProductInGroupList
from .views import getProducts
from .views import getProductByEan

urlpatterns = [
    path('', getCommand),
    path('devices/', getDevices),
    path('products/', views.getProducts),
    path('products/<int:ean>/', views.getProductByEan)
]


# urlpatterns = [
#     path('', getCommand),
#     path('devices/', getDevices),
#     path('products/', ProductList.as_view()),
#     path('products/<int:ean>/', views.getProductByEan),
#     path('groups/', ProductGroupList.as_view()),
#     path('groups/<int:id>/', ProductGroupDetail.as_view()),
#     path('groups/<int:pk>/products/', ProductInGroupList.as_view()),
# ]
# 
#    path('products/<int:ean>/', ProductDetail.as_view()),
