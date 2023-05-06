#A fő URL-ek, de ide raktapi API-hoz kapcsolódó URL-ek

"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings # (Kun) hogy a settings.py állományhoz hozzáférjünk
from django.conf.urls.static import static # (Kun) 

from raktapi.views import ProductList
from raktapi.views import ProductDetail
from raktapi.views import ProductGroupList
from raktapi.views import ProductGroupDetail
from raktapi.views import ProductInGroupList

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('raktapi.urls')),
    path('products/', ProductList.as_view()),
    path('products/<int:ean>/', ProductDetail.as_view()),
    path('groups/', ProductGroupList.as_view()),
    path('groups/<int:id>/', ProductGroupDetail.as_view()),
    path('groups/<int:pk>/products/', ProductInGroupList.as_view()),
]

if settings.DEBUG:   # (Kun) Ha debug módban vagyunk - lásd settings.py
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
# (Kun) Beállítjuk a teljes elérési útvonalat

