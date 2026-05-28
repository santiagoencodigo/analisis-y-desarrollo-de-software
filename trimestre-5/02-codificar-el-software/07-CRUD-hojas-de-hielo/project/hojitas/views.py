from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Hoja
from .forms import HojaForm

# Create your views here.
def inicio(request): #request es la solicitud a la aplicación
    #return HttpResponse("<h1> Bienvenido a la tienda de hojas de hielo</h1>")
    return render(request, 'paginas/inicio.html')

def nosotros(request):
    return render(request,'paginas/nosotros.html')
    #busca el archivo .html, accede directamente a templates, pero como esta dentro de otra carpeta,
    # se direcciona /

def hojas(request):
    #return render(request, 'hojas/index.html')
    hojas=Hoja.objects.all()
    return render(request, 'hojas/index.html',{'hojas':hojas})

def crearh(request):
    formulario=HojaForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('hojas')
    return render(request, 'hojas/crearh.html',{'formulario':formulario})
    #eso quiere decir que se le va enviar información al formulario de crearh.html a traves de la variable formulario
    #cuando se lee hojas/crearh, se le esta enviado la info a crearh.html en la parte {% include 'hojas/formh.html' %}

def editarh(request,id): #se agrega el parametro que necesitamos.
    hoja=Hoja.objects.get(id=id)
    formulario=HojaForm(request.POST or None, request.FILES or None, instance=hoja)
    if formulario.is_valid() and request.POST: #o request.POST
        formulario.save()
        return redirect('hojas')
    return render(request, 'hojas/editarh.html',{'formulario':formulario})

def eliminarh(request, id):
    hoja=Hoja.objects.get(id=id)
    hoja.delete()
    return redirect('hojas') #no hay una vista de eliminar, por lo que se redirecciona y queremos seguir en la vista de hojas porque allí esta el boton borrar.