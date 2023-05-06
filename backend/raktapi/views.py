# A Django REST framework keretrendszerhez. https://www.django-rest-framework.org
# Telepítése: pip install djangorestframework
# - - - - 
from django.http import JsonResponse
from .models import Device, Part # A Part-ok visszaadására is 

# Áru és árucsoport kezelés kapcsán
from rest_framework import generics
from rest_framework.views import APIView  
from rest_framework.decorators import api_view 
# Az api_view egy decorator. Módosítani tudja egy függvény működését. 
# Pl. ilyenkor csak a GET-re válaszolna :  @api view(['GET'])

from rest_framework.response import Response
from .models import Product, ProductGroup
from .serializers import ProductSerializer
from .serializers import ProductGroupSerializer

# Create your views here.

@api_view(['GET']) #Csak GET legyen engedélyezve
def base(request):
    return Response(
        {
            "Ez az indo oldal":"/",
            "Adminisztrátori oldal":"admin/",
            "Eszközök API":"api/",
            "Mindegyik termék":"products/",
            "Mindegyik csoport":"groups/"
        }
    )
# 
# admin/
# api/
# products/
# products/<int:ean>/
# groups/
# groups/<int:id>/
# groups/<int:pk>/products/
# ^media/(?P<path>.*)$
# 
# path: ''
def getCommand(request):
    endpoints = {
        "api/devices": "All devices"
    }

    return JsonResponse(endpoints) # A JsonResponse Python dictionary-t vár bemenetként

# path: 'devices/'
def getDevices(request):
    devices = Device.objects.all()

    serialised_devices = []

    for device in devices:
        serialised_devices.append(device.serializer())

    return JsonResponse(serialised_devices, safe=False) # a serializált elemeket adjuk vissza

# RAKTAR_V1-# 

# Az összes elem
# path: 'products/'
@api_view(['GET']) #Csak GET legyen engedélyezve
def getProducts(request):
    item = Product.objects.all()
    serializer = ProductSerializer(item, many=True)
    return Response(serializer.data)

# Egy konkrét azonosított elem
# path: 'products/<int:ean>/'
@api_view(['GET']) #Csak GET legyen engedélyezve
def getProductByEan(request, ean):
    try:
        item = Product.objects.get(ean=ean)
        serializer = ProductSerializer(item, many=False)
        return Response(serializer.data)
    except Exception as error:
        return Response({"Hibaüzenet:": str(error)})
# 
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'ean'
 
class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductGroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductGroup.objects.all()
    serializer_class = ProductGroupSerializer
    lookup_field = 'id'

class ProductGroupList(generics.ListCreateAPIView):
    queryset = ProductGroup.objects.all()
    serializer_class = ProductGroupSerializer

class ProductInGroupList(APIView):
    def get(self, request, pk):
        product_group = ProductGroup.objects.get(pk=pk)
        products = product_group.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

