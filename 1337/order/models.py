from django.db import models
from user.models import CustomUser


class Order(models.Model):
    user_details = models.ForeignKey(CustomUser, limit_choices_to={
                                     'user_type': CustomUser.USER}, on_delete=models.PROTECT, related_name="User", blank=True, null=True)
    assigned_driver = models.ForeignKey(CustomUser, limit_choices_to={
                                        'user_type': CustomUser.DRIVER}, on_delete=models.PROTECT, related_name="Driver", blank=True, null=True)
    
    PLACED = 'P'
    PICKED_UP = 'U'
    TRANSIT = 'T'
    RECIEVED = 'R'

    STATUS_CHOICES = [
        (PLACED, 'Placed'),
        (PICKED_UP, 'Picked Up'),
        (TRANSIT, 'In Transist'),
        (RECIEVED, 'Recieved at collection center'),
    ]
    
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)

    weight = models.IntegerField()
    date_of_order = models.DateField(auto_now_add=True)
    waste_type = models.ForeignKey('WasteType', on_delete=models.PROTECT)
    pickup_date = models.DateTimeField(blank=True)

    def status_verbose(self):
        return dict(Order.STATUS_CHOICES)[self.status]

    def __str__(self):
        return str(self.id)

class WasteType(models.Model):
    name = models.CharField(max_length=30)
    current_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name