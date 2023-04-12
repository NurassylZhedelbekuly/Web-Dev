from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', vacancy_list_by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancy_top),
]
