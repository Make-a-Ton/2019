from django.db import models

# Create your models here.


class Vehicle(models.Model):
    name = models.CharField(max_length=40)
    max_carry_weight = models.IntegerField()
    reg_no = models.CharField(max_length=20)

    def __str__(self):
        return self.name