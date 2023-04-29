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
    
