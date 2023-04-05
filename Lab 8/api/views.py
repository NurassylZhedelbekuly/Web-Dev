from json import dumps

from django.core import serializers
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.views.generic import ListView

from api.models import *


# Create your views here.


def products(request):
    all_products = Product.objects.all()
    all_products = [p.to_json() for p in all_products]
    return JsonResponse(all_products, safe=False, json_dumps_params={'indent': 2})


def products_by_id(request, product_id):
    product = Product.objects.filter(pk=product_id)
    product = [p.to_json() for p in product]
    return JsonResponse(product, safe=False, json_dumps_params={'indent': 2})


def categories(request):
    cat = Category.objects.all()
    cat = [c.to_json() for c in cat]
    return JsonResponse(cat, safe=False, json_dumps_params={'indent': 2})


def categories_by_id(request, category_id):
    cat = Category.objects.filter(pk=category_id)
    cat = [c.to_json() for c in cat]
    return JsonResponse(cat, safe=False, json_dumps_params={'indent': 2})


def products_by_category_id(request, category_id):
    products_by_cat = Product.objects.filter(cat_id=category_id)
    products_by_cat = [p_c.to_json() for p_c in products_by_cat]
    return JsonResponse(products_by_cat, safe=False, json_dumps_params={'indent': 2})