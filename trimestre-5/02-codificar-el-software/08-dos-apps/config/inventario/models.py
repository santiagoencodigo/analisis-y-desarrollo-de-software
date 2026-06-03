
# Create your models here.
from django.db import models

from productos.models import Producto


class EntradaInventario(models.Model):

   producto = models.ForeignKey(
       Producto,
       on_delete=models.CASCADE
   )

   cantidad = models.IntegerField()

   fecha = models.DateTimeField(
       auto_now_add=True
   )

   def save(self, *args, **kwargs):

       super().save(*args, **kwargs)

       # actualizar stock
       self.producto.stock += self.cantidad

       self.producto.save()

   def __str__(self):
       return self.producto.nombre
