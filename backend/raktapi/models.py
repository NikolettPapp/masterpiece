from django.db import models

# Create your models here.
class Osszetevo(models.Model):
    nev = models.CharField(max_length=200)

    def __str__(self):
        return self.nev

class Csomag(models.Model):
    nev = models.CharField(max_length=200)
    ar = models.PositiveBigIntegerField()
    osszetevok = models.ManyToManyField(Osszetevo)

    def __str__(self):
        return self.nev
    
