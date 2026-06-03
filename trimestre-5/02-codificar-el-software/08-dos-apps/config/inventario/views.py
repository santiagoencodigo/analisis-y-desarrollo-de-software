
# Create your views here.
from django.shortcuts import (
   render,
   redirect
)

from .forms import EntradaInventarioForm


def entrada_inventario(request):

   form = EntradaInventarioForm(
       request.POST or None
   )

   if form.is_valid():

       form.save()

       return redirect(
           'lista_productos'
       )

   return render(
       request,
       'inventario/entrada.html',
       {
           'form': form
       }
   )
