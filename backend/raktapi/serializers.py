from rest_framework import serializers
from .models import Product, ProductGroup

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductGroupSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = ProductGroup
        fields = '__all__'

