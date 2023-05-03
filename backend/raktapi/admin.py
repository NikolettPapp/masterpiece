from django.contrib import admin
from .models import Device, Part, Product, ProductGroup

# Register your models here.

admin.site.register(Device)
admin.site.register(Part)

# RAKTAR V1
admin.site.register(Product)
admin.site.register(ProductGroup)

