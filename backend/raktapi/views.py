from django.http import JsonResponse
from .models import Device, Part # A Part-ok visszaadására is 

# Áru és árucsoport kezelés kapcsán
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, ProductGroup
from .serializers import ProductSerializer, ProductGroupSerializer

# Create your views here.
def getCommand(request):
    endpoints = {
        "api/devices": "All devices"
    }

    return JsonResponse(endpoints) # A JsonResponse Python dictionary-t vár bemenetként


def getDevices(request):
    devices = Device.objects.all()

    serialised_devices = []

    for device in devices:
        serialised_devices.append(device.serializer())

    return JsonResponse(serialised_devices, safe=False) # a serializált elemeket adjuk vissza


# RAKTAR_V1-

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

