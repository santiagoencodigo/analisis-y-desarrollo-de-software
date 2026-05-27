from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def inicio(request):
    return render(request, 'paginas/inicio.html')
def nosotros(request):
    return render(request, 'paginas/nosotros.html')
def hojas(request):
    return render(request, 'hojas/index.html')
def crearh(request):
    return render(request, 'hojas/crearh.html')
def editarh(request):
    return render(request, 'hojas/editarh.html')