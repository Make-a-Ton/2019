from django import forms
from .models import Order


class OrderForm(forms.ModelForm):

    class Meta:

        model = Order
        fields = ('waste_type', 'weight', 'pickup_date')


class OrderPickedUpForm(forms.ModelForm):

    class Meta:
        model = Order
        fields = ('status',)
        widgets = {'status': forms.HiddenInput()}
