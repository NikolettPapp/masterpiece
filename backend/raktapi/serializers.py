# Az adatok átforgatásához, szerializálásához
from rest_framework import serializers
from .models import Product, ProductGroup

# A http://127.0.0.1:8000/products/ kérésre 
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['ean', 'name', 'description', 'price', 'image' ]
# Ha nem akarunk mindent visszaadni: ( nem: 'quantity', 'created_at', 'updated_at')
#       fields = ['ean', 'name', 'description', 'price', 'image' ]
# Ha mindent:
#       fields = '__all__'

# A http://127.0.0.1:8000/groups/ kérésre 
class ProductGroupSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = ProductGroup
        fields = '__all__'
    
# ['name', 'description', 'created_at', 'updated_at']

