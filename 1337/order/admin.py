from django.contrib import admin


from .models import Order, WasteType
# Register your models here.


admin.site.register(Order)
admin.site.register(WasteType)
