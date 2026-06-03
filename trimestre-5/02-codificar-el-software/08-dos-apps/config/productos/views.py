# Create your views here.
from django.shortcuts import (
   render,
   redirect,
   get_object_or_404
)

from .models import Producto
from .forms import ProductoForm


def lista_productos(request):

   productos = Producto.objects.all()

   return render(
       request,
       'productos/lista.html',
       {
           'productos': productos
       }
   )


def crear_producto(request):

   form = ProductoForm(request.POST or None)

   if form.is_valid():
       form.save()
       return redirect('lista_productos')

   return render(
       request,
       'productos/form.html',
       {
           'form': form
       }
   )


def editar_producto(request, id):

   producto = get_object_or_404(
       Producto,
       id=id
   )

   form = ProductoForm(
       request.POST or None,
       instance=producto
   )

   if form.is_valid():
       form.save()
       return redirect('lista_productos')

   return render(
       request,
       'productos/form.html',
       {
           'form': form
       }
   )


def eliminar_producto(request, id):

   producto = get_object_or_404(
       Producto,
       id=id
   )

   if request.method == 'POST':
       producto.delete()
       return redirect('lista_productos')

   return render(
       request,
       'productos/eliminar.html',
       {
           'producto': producto
       }
   )
