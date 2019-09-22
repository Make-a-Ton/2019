from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):

    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone_no = models.CharField(max_length=15)
    address = models.TextField(max_length=300, null=True, blank=True)
    pincode = models.IntegerField(null=True, blank=True)
    last_access = models.DateTimeField(auto_now_add=True)

    DRIVER = 'D'
    USER = 'U'
    CCADMIN = 'C'

    USER_CHOICES = [
        (DRIVER, 'Driver'),
        (USER, 'User'),
        (CCADMIN, 'CC Admin'),
    ]

    user_type = models.CharField(
        max_length=1,
        choices=USER_CHOICES,
        default=USER,
    )

    vehicle = models.ForeignKey(
        'driver.Vehicle', on_delete=models.PROTECT, blank=True, null=True)

    def __str__(self):
        return self.email
