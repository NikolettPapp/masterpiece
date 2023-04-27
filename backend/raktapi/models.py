from django.db import models

# Create your models here.
class Part(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Device(models.Model):
    name = models.CharField(max_length=200)
    price = models.PositiveBigIntegerField()
    devices = models.ManyToManyField(Part)

    def __str__(self):
        return self.name
    
