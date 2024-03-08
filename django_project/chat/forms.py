from django import forms
from .models import Group

class GroupCreationForm(forms.ModelForm):
    class Meta:
        model = Group
        fields = ['group_name', 'password']
