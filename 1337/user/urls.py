from django.urls import path

from .views import *

urlpatterns = [
    path('', user_dash_view),
    path('driver', driver_dash_view)
]
