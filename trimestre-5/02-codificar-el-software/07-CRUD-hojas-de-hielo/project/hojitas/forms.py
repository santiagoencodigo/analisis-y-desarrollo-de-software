from django import forms
from .models import Hoja

#crear la lectura y el mapeado
class HojaForm(forms.ModelForm):
    class Meta:
        model=Hoja
        fields='__all__'

# Con lo anterior, se realiza la lectura y el mapeo del modelo a partir de la declaración del formulario.        