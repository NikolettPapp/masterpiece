from django.db import models

# Create your models here.
class Part(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
    def serializer(self):
        return {"id":self.id, "name": self.name} # Python dictionary-t ad vissza

class Device(models.Model):
    name = models.CharField(max_length=200)
    price = models.PositiveBigIntegerField()
    devices = models.ManyToManyField(Part)

    def __str__(self):
        return self.name
    
    def serializer(self):
        serialized_parts = []

        for part in self.parts.all():
            serialized_parts.append(part.serializer())

            #Létrehozzuk a tömböt

        return{
            "name": self.name,
            "price": self.price,
            "parts": serialized_parts
        }