from django.db import models

# Create your models here.
class Part(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

# A serializer-ekker azt tudjuk meghatározni, hogy az API-ban milyen adatok jelenjenek meg. Másrészt egy dictiomary        
    def serializer(self):
        return {"id":self.id, "name": self.name} # Python dictionary-t ad vissza. ID-ja mindennek van. Automatikusan növekedik az értéke.

# A "Device" adatai
class Device(models.Model):
    name = models.CharField(max_length=200)
    price = models.PositiveBigIntegerField()
    devices = models.ManyToManyField(Part)
    image = models.ImageField(upload_to="images/", null=True) # Az eszköz fényképének kezelése - tárolási mappája. Kép nélküli is engedélyezett.

    def __str__(self):
        return self.name
    
    def serializer(self):
        serialized_parts = [] # Egy lista az alkotóelemeknek

        for part in self.devices.all():
            serialized_parts.append(part.serializer()) #Adjuk hozzá az alkotóelemeket


# Python dictionary szintén. Név, ár és a kapcsolódó alkotóelemek szerepelnek benne. 
        return{
            "name": self.name,
            "price": self.price,
            "parts": serialized_parts,
            "image": str(self.image) # Stringé alakítjuk a kép nevét, hogy kezelni tudjuk
        }

# RAKTAR_V1-
# A különálló termékek adatai    
class Product(models.Model):
    name = models.CharField(max_length=255)
    ean = models.CharField(max_length=13, primary_key=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to="images/product", null=True) # Az eszköz fényképének kezelése - tárolási mappája. Kép nélküli is engedélyezett.

# A különálló termékcsoportok adatai
class ProductGroup(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    products = models.ManyToManyField(Product, blank=True, related_name='product_groups')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

