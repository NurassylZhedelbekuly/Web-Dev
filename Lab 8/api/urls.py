from django.urls import path
from api.views import *


urlpatterns = [
    path('products/', products),
    path('products/<int:product_id>/', products_by_id),
    path('categories/', categories),
    path('categories/<int:category_id>/', categories_by_id),
    path('categories/<int:category_id>/products/', products_by_category_id),
]
