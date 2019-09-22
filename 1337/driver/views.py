from django.shortcuts import render
from . models import Vehicle

def get_driver_data(request):

    if(CustomUser.user_type == 'D'):
        driverdata = CustomUser.objects.filter(username=request.user.username)
        return render(request, '', {'driverdata': driverdata})

