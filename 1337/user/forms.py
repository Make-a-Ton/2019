# users/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'name', 'email', 'phone_no', 'address', 'pincode', 'user_type', 'vehicle')

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'name', 'email', 'phone_no', 'address', 'pincode', 'user_type', 'vehicle')


class UserRegistrationForm(forms.ModelForm):

    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = CustomUser
        fields = ('name', 'email', 'phone_no', 'address', 'pincode', 'password')