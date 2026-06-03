from django import forms

from .models import EntradaInventario


class EntradaInventarioForm(forms.ModelForm):

   class Meta:
       model = EntradaInventario

       fields = [
           'producto',
           'cantidad'
       ]
