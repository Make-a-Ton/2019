from django.shortcuts import render
from .models import CustomUser
from .forms import *
from order.models import Order

from order.forms import OrderForm, OrderPickedUpForm

def user_dash_view(request):
    orders = Order.objects.filter(user_details=request.user).order_by('-date_of_order')
    if(request.user.user_type == 'U'):
        if request.method == "POST":
            form = OrderForm(request.POST)
            if form.is_valid():
                order = form.save(commit=False)
                order.user_details = request.user
                order.status = 'P'
                order.save()
                # return redirect()
        else:
            form = OrderForm()
        return render(request, 'user/userhome2.html', {'orders': orders, 'form': form})


def driver_dash_view(request):
    pending_orders = Order.objects.filter(assigned_driver=request.user, status='P').order_by('-date_of_order')
    picked_orders = Order.objects.filter(assigned_driver=request.user, status='T').order_by('-date_of_order')
    if(request.user.user_type == 'D'):
        if request.method == "POST":
            Order.objects.filter(pk=request.POST['id']).update(status='T')
        else:
            form = OrderPickedUpForm()
        return render(request, 'user/driverhome.html', {'pending_orders': pending_orders, 'picked_orders': picked_orders})
