from django.db import models

from user.models import CustomUser

# Create your models here.


class CollectionCentre(models.Model):
    name = models.CharField(max_length=20)
    location = models.CharField(max_length=40)
    admin = models.ForeignKey('user.CustomUser', limit_choices_to={'user_type': CustomUser.CCADMIN}, on_delete=models.PROTECT, related_name="CC_Admin")
